import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import {
  chunk,
  compact,
  first,
  flatMap,
  flatten,
  groupBy,
  last,
  orderBy,
  padStart,
  range,
  uniqBy,
  without
} from 'lodash';
import {
  DataService,
  Group,
  Learner,
  Lesson
} from '@shared/data';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { Workbook } from 'exceljs';

@Component({
  selector: 'app-journal-root',
  templateUrl: 'journal.html',
  styleUrls: ['journal.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalComponent {
  @ViewChild('uploadJournalFile') uploadJournalFile: ElementRef;

  public learners: Array<Learner>;
  public groups: Array<Group>;
  public year: string;
  public month: string;
  public teacherName: string;
  public days: Array<number>;
  public uploadedJournalFile: File;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private dataService: DataService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.learners = this.dataService.learners;
    this.groups = this.dataService.groups;
    this.year = '19';
    this.month = '9';
    this.days = range(1, 31 + 1);
  }

  public createLearner(): void {
    const attendance = {};

    for (const year of range(19, 24 + 1)) {
      attendance[year] = {};

      for (const month of range(1, 12 + 1)) {
        attendance[year][month] = {};

        for (const day of range(1, 31 + 1)) {
          attendance[year][month][day] = '';
        }
      }
    }

    const learner = new Learner({
      id: (this.learners.length > 0)
        ? last(this.learners).id + 1
        : 1,
      name: '',
      attendance
    });

    this.learners.push(learner);

    this.router.navigate(['/learners', learner.id]);
  }

  public createGroup(): void {
    const group = new Group({
      id: (this.groups.length > 0)
        ? last(this.groups).id + 1
        : 1,
      subjects: [],
      learnersIds: []
    });

    this.groups.push(group);

    this.router.navigate(['/groups', group.id]);
  }

  public async generateJournal(): Promise<void> {
    const workbook = new Workbook();

    this.addJournalSheet(workbook);

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer]);

    saveAs(blob, `Табель-20${this.year}.${padStart(this.month, 2, '0')}.xlsx`);
  }

  public async generateReport(): Promise<void> {
    if (!this.validateBeforeGeneratingReport()) {
      return;
    }

    const workbook = new Workbook();

    this.addSubjectsSheets(workbook);
    this.addLearnersInfoSheet(workbook);
    this.addSkipsSheet(workbook);

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer]);

    saveAs(blob, `Журнал-20${this.year}.xlsx`);
  }

  private addSubjectsSheets(workbook: Workbook): void {
    this.groups.forEach((group, groupIndex) => {
      group.subjects.forEach((subject, subjectIndex) => {
        const lessons = subject.lessons.filter((lesson) => lesson.year === this.year);
        const sheets = this.groupLessons(lessons, 25);

        sheets.forEach((lessonsMonthGroups, sheetIndex) => {
          const sheetName = (sheets.length > 1)
            ? `${groupIndex + 1}.${subjectIndex + 1}.${sheetIndex + 1}`
            : `${groupIndex + 1}.${subjectIndex + 1}`

          const sheet = workbook.addWorksheet(sheetName);

          sheet.properties.defaultColWidth = 2.75;
          sheet.properties.defaultRowHeight = 15;

          // non-default rows and columns sizes
          sheet.getRow(2).height = 54.75;
          sheet.getRow(3).height = 31.5;
          sheet.getColumn('B').width = 33.5;
          sheet.getColumn('AD').width = 13;
          sheet.getColumn('AE').width = 57;
          sheet.getColumn('AF').width = 22;

          // left table
          sheet.mergeCells('A1', 'G1');
          sheet.getCell('A1').value = `Группа: ${group.name}`;

          sheet.mergeCells('H1', 'AA');
          sheet.getCell('H1').value = `Наименование предмета: ${subject.name}`;

          sheet.mergeCells('A2', 'A3');
          sheet.getCell('A2').value = '№ п/п';
          sheet.getCell('A2').alignment = { textRotation: 90, horizontal: 'center' };

          sheet.getCell('B2').value = 'МЕСЯЦ';
          sheet.getCell('B2').alignment = { horizontal: 'center', vertical: 'middle' };

          sheet.getCell('B3').value = `                                           ЧИСЛО\r\nСписок обучающихся`;
          sheet.getCell('B3').alignment = { vertical: 'top', wrapText: true };

          const sheetLessons = flatten(lessonsMonthGroups);

          let currentMonthGroupStartIndex = 0;
          let currentMonthGroupEndIndex = 0;
          lessonsMonthGroups.forEach((lessonMonthGroup) => {
            currentMonthGroupEndIndex = currentMonthGroupStartIndex + lessonMonthGroup.length - 1;

            sheet.mergeCells(
              2, 3 + currentMonthGroupStartIndex,
              2, 3 + currentMonthGroupEndIndex
            );

            sheet.getCell(2, 3 + currentMonthGroupStartIndex).value = this.getMonthText(lessonMonthGroup[0].month);
            sheet.getCell(2, 3 + currentMonthGroupStartIndex).alignment = { textRotation: 90, horizontal: 'left' };

            currentMonthGroupStartIndex = currentMonthGroupEndIndex + 1;
          });

          sheetLessons.forEach((lesson, lessonIndex) => {
            if (lesson === null) {
              return;
            }

            sheet.getCell(3, 3 + lessonIndex).value = lesson.day;
          });

          const firstLesson = first(sheetLessons);
          const lastLesson = last(compact(sheetLessons));

          let learners = group.learnersIds
            .map((learnerId) => this.learners.find((learner) => learner.id === learnerId));

          learners = this.filterLearnersByEnrollmentAndDismissal(
            learners,
            firstLesson.year,
            firstLesson.month,
            lastLesson.year,
            lastLesson.month
          );

          learners.forEach((learner, learnerIndex) => {
            sheet.getCell(`A${4 + learnerIndex}`).value = learnerIndex + 1;
            sheet.getCell(`B${4 + learnerIndex}`).value = learner.name;

            sheetLessons.forEach((lesson, lessonIndex) => {
              if (lesson === null) {
                return;
              }

              const isFirstLessonInMonth = lessonIndex === 0 || sheetLessons[lessonIndex - 1].month !== lesson.month;

              const isDismissed = this.isLearnerDismissedOnMonth(learner, lesson.year, lesson.month) &&
                isFirstLessonInMonth;

              if (isDismissed) {
                sheet.getCell(4 + learnerIndex, 3 + lessonIndex).value = 'в';
                return;
              }

              const attendance = this.getLearnerLessonAttendance(learner, lesson);

              sheet.getCell(4 + learnerIndex, 3 + lessonIndex).value = ['н', 'о', 'с', 'б', 'д'].includes(attendance) ? 'н' : '';
            });
          });

          for (const row of range(2, 3 + learners.length + 1)) {
            for (const column of range(1, 27 + 1)) {
              sheet.getCell(row, column).border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
              };
            }
          }

          sheet.getCell('B3').border = {
            diagonal: { down: true, style: 'thin' },
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
          };

          // right table
          sheet.mergeCells('AC1', 'AF1');
          sheet.getCell('AC1').value = `ФИО учителя: ${this.teacherName}`;

          sheet.getCell('AC2').value = '№';
          sheet.getCell('AD2').value = 'Число/месяц';
          sheet.getCell('AE2').value = 'Тема занятия';
          sheet.getCell('AF2').value = 'Кол-во часов, занятий';

          const printableLessons = sheetLessons.filter((lesson) => lesson);

          printableLessons.forEach((lesson, lessonIndex) => {
            sheet.getCell(3 + lessonIndex, 29).value = lessonIndex + 1;
            sheet.getCell(3 + lessonIndex, 30).value = `${padStart(lesson.day, 2, '0')}.${padStart(lesson.month, 2, '0')}`;
            sheet.getCell(3 + lessonIndex, 30).alignment = { horizontal: 'center' };
            sheet.getCell(3 + lessonIndex, 31).alignment = { wrapText: true };
            sheet.getCell(3 + lessonIndex, 31).value = lesson.topic;
            sheet.getCell(3 + lessonIndex, 32).value = lesson.hoursAndLessons;
          });

          for (const row of range(2, 2 + printableLessons.length + 1)) {
            for (const column of range(29, 32 + 1)) {
              sheet.getCell(row, column).border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
              };
            }
          }

          // Change font globally
          sheet.eachRow((row) => {
            row.font = { name: 'Times New Roman', family: 4, size: 11 };
          });

          sheet.getRow(1).font = { name: 'Times New Roman', family: 4, size: 11, bold: true };
        });
      });
    });
  }

  private addLearnersInfoSheet(workbook: Workbook): void {
    const sheet = workbook.addWorksheet('Общие сведения об обучающихся');

    sheet.getColumn(1).width = 2.88;
    sheet.getColumn(2).width = 13;
    sheet.getColumn(3).width = 30;
    sheet.getColumn(4).width = 5;
    sheet.getColumn(5).width = 16;
    sheet.getColumn(6).width = 30;
    sheet.getColumn(7).width = 60;
    sheet.getColumn(8).width = 30;

    sheet.mergeCells('A1', 'H1');
    sheet.getCell('A1').value = `Общие сведения об обучающихся`;
    sheet.getCell('A1').alignment = { horizontal: 'center' };

    sheet.getCell('A2').value = '№';
    sheet.getCell('B2').value = '№ лич. дела';
    sheet.getCell('C2').value = 'ФИО обучающегося';
    sheet.getCell('D2').value = 'Пол';
    sheet.getCell('E2').value = 'Дата рождения';
    sheet.getCell('F2').value = 'ФИО родителей';
    sheet.getCell('G2').value = 'Место работы родителей, занимаемая должность, телефон';
    sheet.getCell('H2').value = 'Домашний адрес, тел.';

    const learners = this.filterLearnersByEnrollmentAndDismissal(
      this.learners,
      this.year,
      '9',
      this.year,
      '8'
    );

    learners.forEach((learner, learnerIndex) => {
      sheet.getCell(`A${3 + learnerIndex}`).value = learnerIndex + 1;
      sheet.getCell(`B${3 + learnerIndex}`).value = learner.personalFileNumber;
      sheet.getCell(`C${3 + learnerIndex}`).value = learner.name;
      sheet.getCell(`D${3 + learnerIndex}`).value = learner.gender === 'male' ? 'М' : 'Ж';
      sheet.getCell(`E${3 + learnerIndex}`).value = learner.birthDate;
      sheet.getCell(`F${3 + learnerIndex}`).value = learner.parentsName;
      sheet.getCell(`G${3 + learnerIndex}`).value = learner.parentsInfo;
      sheet.getCell(`H${3 + learnerIndex}`).value = learner.address;
    });

    for (const row of range(2, 2 + learners.length + 1)) {
      for (const column of range(1, 8 + 1)) {
        sheet.getCell(row, column).border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        };
      }
    }

    // Change font globally
    sheet.eachRow((row) => {
      row.font = { name: 'Times New Roman', family: 4, size: 11 };
    });

    sheet.getRow(1).font = { name: 'Times New Roman', family: 4, size: 14, bold: true };
  }

  private addSkipsSheet(workbook: Workbook): void {
    const subjects = flatMap(this.groups, (group) => group.subjects);
    let lessons = flatMap(subjects, (subject) => subject.lessons);
    lessons = lessons.filter((lesson) => lesson.year === this.year);
    lessons = uniqBy(lessons, (lesson) => `${lesson.year}-${lesson.month}-${lesson.day}`);
    lessons = orderBy(lessons, (lesson) => `${lesson.year}-${this.getMonthOrder(lesson.month)}-${padStart(lesson.day, 2, '0')}`);

    const sheets = this.groupLessons(lessons, 55);

    sheets.forEach((lessonsMonthGroups, sheetIndex) => {
      const sheetName = (sheets.length > 1)
        ? `Сведения о пропусках ${sheetIndex + 1}`
        : `Сведения о пропусках`;

      const sheet = workbook.addWorksheet(sheetName);

      sheet.properties.defaultColWidth = 2.75;
      sheet.properties.defaultRowHeight = 15;

      // non-default rows and columns sizes
      sheet.getRow(2).height = 54.75;
      sheet.getRow(3).height = 31.5;
      sheet.getColumn('B').width = 33.5;

      sheet.mergeCells('A1', 'BE1');
      sheet.getCell('A1').value = `Сведения о количестве уроков, пропущенных обучающимися`;
      sheet.getCell('A1').alignment = { horizontal: 'center' };

      sheet.mergeCells('A2', 'A3');
      sheet.getCell('A2').value = '№ п/п';
      sheet.getCell('A2').alignment = { textRotation: 90, horizontal: 'center' };

      sheet.getCell('B2').value = 'МЕСЯЦ';
      sheet.getCell('B2').alignment = { horizontal: 'center', vertical: 'middle' };

      sheet.getCell('B3').value = `                                           ЧИСЛО\r\nСписок обучающихся`;
      sheet.getCell('B3').alignment = { vertical: 'top', wrapText: true };

      const sheetLessons = flatten(lessonsMonthGroups);

      let currentMonthGroupStartIndex = 0;
      let currentMonthGroupEndIndex = 0;
      lessonsMonthGroups.forEach((lessonMonthGroup) => {
        currentMonthGroupEndIndex = currentMonthGroupStartIndex + lessonMonthGroup.length - 1;

        sheet.mergeCells(
          2, 3 + currentMonthGroupStartIndex,
          2, 3 + currentMonthGroupEndIndex
        );

        sheet.getCell(2, 3 + currentMonthGroupStartIndex).value = this.getMonthText(lessonMonthGroup[0].month);
        sheet.getCell(2, 3 + currentMonthGroupStartIndex).alignment = { textRotation: 90, horizontal: 'left' };

        currentMonthGroupStartIndex = currentMonthGroupEndIndex + 1;
      });

      sheetLessons.forEach((lesson, lessonIndex) => {
        if (lesson === null) {
          return;
        }

        sheet.getCell(3, 3 + lessonIndex).value = lesson.day;
      });

      const firstLesson = first(sheetLessons);
      const lastLesson = last(compact(sheetLessons));

      const learners = this.filterLearnersByEnrollmentAndDismissal(
        this.learners,
        firstLesson.year,
        firstLesson.month,
        lastLesson.year,
        lastLesson.month
      );

      learners.forEach((learner, learnerIndex) => {
        sheet.getCell(`A${4 + learnerIndex}`).value = learnerIndex + 1;
        sheet.getCell(`B${4 + learnerIndex}`).value = learner.name;

        sheetLessons.forEach((lesson, lessonIndex) => {
          if (lesson === null) {
            return;
          }

          const isFirstLessonInMonth = lessonIndex === 0 || sheetLessons[lessonIndex - 1].month !== lesson.month;

          const isDismissed = this.isLearnerDismissedOnMonth(learner, lesson.year, lesson.month) &&
            isFirstLessonInMonth;

          if (isDismissed) {
            sheet.getCell(4 + learnerIndex, 3 + lessonIndex).value = 'в';
            return;
          }

          const attendance = this.getLearnerLessonAttendance(learner, lesson);

          sheet.getCell(4 + learnerIndex, 3 + lessonIndex).value = ['н', 'о', 'с', 'б'].includes(attendance) ? attendance : '';
        });
      });

      for (const row of range(2, 3 + learners.length + 1)) {
        for (const column of range(1, 57 + 1)) {
          sheet.getCell(row, column).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
          };
        }
      }

      sheet.getCell('B3').border = {
        diagonal: { down: true, style: 'thin' },
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };

      // Change font globally
      sheet.eachRow((row) => {
        row.font = { name: 'Times New Roman', family: 4, size: 11 };
      });

      sheet.getRow(1).font = { name: 'Times New Roman', family: 4, size: 14, bold: true };
    });
  }

  private addJournalSheet(workbook: Workbook): void {
    const sheet = workbook.addWorksheet('Табель');

    sheet.properties.defaultColWidth = 7;
    sheet.properties.defaultRowHeight = 15;

    // non-default rows and columns sizes
    sheet.getRow(1).height = 29;
    sheet.getColumn(1).width = 4;
    sheet.getColumn(2).width = 33.5;

    sheet.mergeCells('A1', 'A2');
    sheet.getCell('A1').value = '№ п/п';
    sheet.getCell('A1').alignment = { textRotation: 90, horizontal: 'center' };

    sheet.mergeCells('B1', 'B2');
    sheet.getCell('B1').value = 'Список обучающихся';
    sheet.getCell('B1').alignment = { horizontal: 'center', vertical: 'middle' };

    sheet.mergeCells('C1', 'AG1');
    sheet.getCell('C1').value = 'Дата';
    sheet.getCell('C1').alignment = { horizontal: 'center', vertical: 'middle' };

    sheet.mergeCells('AH1', 'AI1');
    sheet.getCell('AH1').value = 'Всего пропущено';
    sheet.getCell('AH1').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };

    sheet.getCell('AH2').value = 'Н';
    sheet.getCell('AH2').alignment = { horizontal: 'center', vertical: 'middle' };

    sheet.getCell('AI2').value = 'Б';
    sheet.getCell('AI2').alignment = { horizontal: 'center', vertical: 'middle' };

    sheet.mergeCells('AJ1', 'AJ2');
    sheet.getCell('AJ1').value = 'Дни посещения';
    sheet.getCell('AJ1').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };

    for (let day = 1; day <= 31; day++) {
      sheet.getCell(2, 2 + day).value = day;
      sheet.getCell(2, 2 + day).alignment = { horizontal: 'center', vertical: 'middle' };
    }

    let totalN = 0;
    let totalB = 0;
    let totalPlus = 0;

    const learners = this.filterLearnersByEnrollmentAndDismissal(
      this.learners,
      this.year,
      this.month,
      this.year,
      this.month
    );

    learners.forEach((learner, learnerIndex) => {
      sheet.getCell(3 + learnerIndex, 1).value = learnerIndex + 1;
      sheet.getCell(3 + learnerIndex, 2).value = learner.name;

      let totalLearnerN = 0;
      let totalLearnerB = 0;
      let totalLearnerPlus = 0;

      for (let day = 1; day <= 31; day++) {
        const attendance = learner.attendance[this.year][this.month][day];

        sheet.getCell(3 + learnerIndex, 2 + day).value = attendance;
        sheet.getCell(3 + learnerIndex, 2 + day).alignment = { horizontal: 'center', vertical: 'middle' };

        if (['н', 'о', 'с', 'б'].includes(attendance)) {
          totalLearnerN++;
        }

        if (attendance === 'б') {
          totalLearnerB++;
        }

        if (['+', 'д'].includes(attendance)) {
          totalLearnerPlus++;
        }
      }

      totalN += totalLearnerN;
      totalB += totalLearnerB;
      totalPlus += totalLearnerPlus;

      sheet.getCell(3 + learnerIndex, 34).value = totalLearnerN;
      sheet.getCell(3 + learnerIndex, 34).alignment = { horizontal: 'center', vertical: 'middle' };

      sheet.getCell(3 + learnerIndex, 35).value = totalLearnerB;
      sheet.getCell(3 + learnerIndex, 35).alignment = { horizontal: 'center', vertical: 'middle' };

      sheet.getCell(3 + learnerIndex, 36).value = totalLearnerPlus;
      sheet.getCell(3 + learnerIndex, 36).alignment = { horizontal: 'center', vertical: 'middle' };
    });

    sheet.getCell(2 + learners.length + 2, 34).value = totalN;
    sheet.getCell(2 + learners.length + 2, 34).alignment = { horizontal: 'center', vertical: 'middle' };

    sheet.getCell(2 + learners.length + 2, 35).value = totalB;
    sheet.getCell(2 + learners.length + 2, 35).alignment = { horizontal: 'center', vertical: 'middle' };

    sheet.getCell(2 + learners.length + 1, 36).value = totalPlus;
    sheet.getCell(2 + learners.length + 1, 36).alignment = { horizontal: 'center', vertical: 'middle' };

    sheet.getCell(2 + learners.length + 1, 2).value = 'Посещения';
    sheet.getCell(2 + learners.length + 2, 2).value = 'Пропуски';

    for (let day = 1; day <= 31; day++) {
      let totalDayN = 0;
      let totalDayPlus = 0;

      learners.forEach((learner) => {
        const attendance = learner.attendance[this.year][this.month][day];

        if (['н', 'о', 'с', 'б'].includes(attendance)) {
          totalDayN++;
        }

        if (['+', 'д'].includes(attendance)) {
          totalDayPlus++;
        }
      });

      sheet.getCell(2 + learners.length + 1, 2 + day).value = totalDayPlus;
      sheet.getCell(2 + learners.length + 1, 2 + day).alignment = { horizontal: 'center', vertical: 'middle' };

      sheet.getCell(2 + learners.length + 2, 2 + day).value = totalDayN;
      sheet.getCell(2 + learners.length + 2, 2 + day).alignment = { horizontal: 'center', vertical: 'middle' };
    }

    for (const row of range(1, 2 + learners.length + 2 + 1)) {
      for (const column of range(1, 2 + 31 + 3 + 1)) {
        sheet.getCell(row, column).border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        };
      }
    }

    // set red background color
    for (const row of range(1, 2 + learners.length + 2 + 1)) {
      for (const column of range(2 + 31 + 1, 2 + 31 + 2 + 1)) {
        sheet.getCell(row, column).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFFFA08B' },
          bgColor: { argb: 'FFFFA08B' }
        };

        sheet.getCell(row, column).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFFFA08B' },
          bgColor: { argb: 'FFFFA08B' }
        };
      }
    }

    for (const column of range(1, 2 + 31 + 3 + 1)) {
      sheet.getCell(2 + learners.length + 2, column).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFA08B' },
        bgColor: { argb: 'FFFFA08B' }
      };
    }

    // set green background color
    for (const row of range(1, 2 + learners.length + 1 + 1)) {
      sheet.getCell(row, 2 + 31 + 3).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFD0D7A6' },
        bgColor: { argb: 'FFD0D7A6' }
      };
    }

    for (const column of range(1, 2 + 31 + 3 + 1)) {
      sheet.getCell(2 + learners.length + 1, column).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFD0D7A6' },
        bgColor: { argb: 'FFD0D7A6' }
      };
    }

    // Change font globally
    sheet.eachRow((row) => {
      row.font = { name: 'Times New Roman', family: 4, size: 11 };
    });

    sheet.getRow(2 + learners.length + 1).font = { name: 'Times New Roman', family: 4, size: 11, bold: true };
    sheet.getRow(2 + learners.length + 2).font = { name: 'Times New Roman', family: 4, size: 11, bold: true };
    sheet.getColumn(2 + 31 + 1).font = { name: 'Times New Roman', family: 4, size: 11, bold: true };
    sheet.getColumn(2 + 31 + 2).font = { name: 'Times New Roman', family: 4, size: 11, bold: true };
    sheet.getColumn(2 + 31 + 3).font = { name: 'Times New Roman', family: 4, size: 11, bold: true };
  }

  private groupLessons(lessons: Array<Lesson>, maxLessonsPerSheet: number): Array<Array<Array<Lesson>>> {
    if (lessons.length === 0) {
      return [];
    }

    const sheets = chunk(lessons, maxLessonsPerSheet)
      .map((lessons) => Object.values(groupBy(lessons, (lesson) => `${lesson.year}-${lesson.month}`)));

    const lastSheet = last(sheets);
    const lastMonthGroup = last(lastSheet);
    const lastSheetLessons = flatten(lastSheet);

    for (let i = 0; i < maxLessonsPerSheet - lastSheetLessons.length; i++) {
      lastMonthGroup.push(null);
    }

    return sheets;
  }

  private getMonthText(month: string): string {
    return {
      '1': 'Январь',
      '2': 'Февраль',
      '3': 'Март',
      '4': 'Апрель',
      '5': 'Май',
      '6': 'Июнь',
      '7': 'Июль',
      '8': 'Август',
      '9': 'Сентябрь',
      '10': 'Октябрь',
      '11': 'Ноябрь',
      '12': 'Декабрь'
    }[month];
  }

  private getMonthOrder(month: string): number {
    return {
      '1': '05',
      '2': '06',
      '3': '07',
      '4': '08',
      '5': '09',
      '6': '10',
      '7': '11',
      '8': '12',
      '9': '01',
      '10': '02',
      '11': '03',
      '12': '04'
    }[month];
  }

  public sortLessonsByDate(): void {
    this.groups.forEach((group) => {
      group.subjects.forEach((subject) => {
        subject.lessons = orderBy(subject.lessons, (lesson) => `${lesson.year}-${this.getMonthOrder(lesson.month)}-${padStart(lesson.day, 2, '0')}`);
      });
    });

    this.snackBar.open('Занятия отсортированы по дате', 'OK', {
      duration: 5000
    });
  }

  public deleteLearner(learner: Learner): void {
    const learnerIndex = this.learners.findIndex((item) => item.id === learner.id);

    this.learners.splice(learnerIndex, 1);

    this.groups.forEach((group) => {
      group.learnersIds = without(group.learnersIds, learner.id);
    });
  }

  public deleteGroup(group: Group): void {
    const groupIndex = this.groups.findIndex((item) => item.id === group.id);

    this.groups.splice(groupIndex, 1);
  }

  public downloadJournal(): void {
    const data = {
      learners: this.learners,
      groups: this.groups
    };

    const json = JSON.stringify(data, null, 2);

    console.log(json);

    const blob = new Blob([json], { type: 'application/json' });

    saveAs(blob, 'journal-data.json');
  }

  public uploadJournal(): void {
    this.uploadJournalFile.nativeElement.click();
  }

  public onJournalFileUploaded(files: FileList): void {
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);

        this.dataService.learners = data.learners;
        this.dataService.groups = data.groups;

        this.learners = this.dataService.learners;
        this.groups = this.dataService.groups;

        this.changeDetectorRef.detectChanges();
      } catch (error) {
        console.error(error);
        alert('Не удалось прочитать содержимое файла журнала!');
      }
    };

    reader.readAsText(files.item(0));
  }

  private getLearnerLessonAttendance(learner: Learner, lesson: Lesson): string {
    return learner.attendance[lesson.year][lesson.month][lesson.day];
  }

  private isLearnerDismissedOnMonth(learner: Learner, year: string, month: string): boolean {
    return learner.dismissalYear === year && learner.dismissalMonth === month;
  }

  private isLearnerEnrolledAfterMonth(learner: Learner, year: string, month: string): boolean {
    return !!learner.enrollmentYear && !!learner.enrollmentMonth &&
      (
        learner.enrollmentYear > year ||
        (
          learner.enrollmentYear === year &&
          this.getMonthOrder(learner.enrollmentMonth) > this.getMonthOrder(month)
        )
      );
  }

  private isLearnerDismissedBeforeMonth(learner: Learner, year: string, month: string): boolean {
    return !!learner.dismissalYear && !!learner.dismissalMonth &&
      (
        learner.dismissalYear < year ||
        (
          learner.dismissalYear === year &&
          this.getMonthOrder(learner.dismissalMonth) < this.getMonthOrder(month)
        )
      );
  }

  private filterLearnersByEnrollmentAndDismissal(
    learners: Array<Learner>,
    startYear: string,
    startMonth: string,
    endYear: string,
    endMonth: string
  ): Array<Learner> {
    return learners.filter((learner) => {
      return !this.isLearnerDismissedBeforeMonth(learner, startYear, startMonth) &&
        !this.isLearnerEnrolledAfterMonth(learner, endYear, endMonth);
    });
  }

  private validateBeforeGeneratingReport(): boolean {
    const errors = [];

    this.groups.forEach((group) => {
      group.subjects.forEach((subject) => {
        subject.lessons.forEach((lesson) => {
          if (!lesson.year) {
            errors.push(`${group.name}\n→ ${subject.name}\n→ ${lesson.topic}\n→ Год занятия не заполнен`);
          }

          if (!lesson.month) {
            errors.push(`${group.name}\n→ ${subject.name}\n→ ${lesson.topic}\n→ Месяц занятия не заполнен`);
          }

          if (!lesson.day) {
            errors.push(`${group.name}\n→ ${subject.name}\n→ ${lesson.topic}\n→ День занятия не заполнен`);
          }
        });
      });
    });

    if (errors.length > 0) {
      this.snackBar.open(`Невозможно сгенерировать отчет из-за ошибок:\n\n${errors.join('\n\n')}`, 'OK', {
        panelClass: ['app-snackbar']
      });

      return false;
    }

    return true;
  }
}
