import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import {
  chunk,
  flatten,
  groupBy,
  last,
  padStart,
  range,
  without,
  flatMap,
  uniqBy,
  orderBy
} from 'lodash';
import {
  DataService,
  Group,
  Learner,
  Lesson
} from '@shared/data';
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
  public groupId: number;
  public teacherName: string;
  public days: Array<number>;
  public uploadedJournalFile: File;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private dataService: DataService,
    private router: Router
  ) {
    this.learners = this.dataService.learners;
    this.groups = this.dataService.groups;
    this.year = '19';
    this.month = '9';
    this.groupId = null;
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

  public async generateReport(): Promise<void> {
    const workbook = new Workbook();

    this.addSubjectsSheets(workbook);
    this.addLearnersInfoSheet(workbook);
    this.addSkipsSheet(workbook);

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer]);

    saveAs(blob, 'Журнал.xlsx');
  }

  private addSubjectsSheets(workbook: Workbook): void {
    const group = this.groups.find((group) => group.id === Number(this.groupId));

    group.subjects.forEach((subject, subjectIndex) => {
      const lessons = subject.lessons.filter((lesson) => lesson.year === this.year);
      const sheets = this.groupLessons(lessons, 25);

      sheets.forEach((lessonsMonthGroups, sheetIndex) => {
        const sheetName = (sheets.length > 1)
          ? `${subjectIndex + 1}.${sheetIndex + 1}`
          : `${subjectIndex + 1}`

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

        group.learnersIds.forEach((learnerId, learnerIndex) => {
          const learner = this.learners.find((learner) => learner.id === learnerId);

          sheet.getCell(`A${4 + learnerIndex}`).value = learnerIndex + 1;
          sheet.getCell(`B${4 + learnerIndex}`).value = learner.name;

          sheetLessons.forEach((lesson, lessonIndex) => {
            if (lesson === null) {
              return;
            }

            sheet.getCell(4 + learnerIndex, 3 + lessonIndex).value = ['н', 'о', 'с', 'б', 'д'].includes(learner.attendance[lesson.year][lesson.month][lesson.day]) ? 'н' : '';
          });
        });

        for (const row of range(2, 3 + group.learnersIds.length + 1)) {
          for (const column of range(1, 27 + 1)) {
            sheet.getCell(row, column).border = {
              top: { style:'thin' },
              left: { style:'thin' },
              bottom: { style:'thin' },
              right: { style:'thin' }
            };
          }
        }

        sheet.getCell('B3').border = {
          diagonal: { down: true, style: 'thin' },
          top: { style:'thin' },
          left: { style:'thin' },
          bottom: { style:'thin' },
          right: { style:'thin' }
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
              top: { style:'thin' },
              left: { style:'thin' },
              bottom: { style:'thin' },
              right: { style:'thin' }
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

    this.learners.forEach((learner, learnerIndex) => {
      sheet.getCell(`A${3 + learnerIndex}`).value = learnerIndex + 1;
      sheet.getCell(`B${3 + learnerIndex}`).value = learner.personalFileNumber;
      sheet.getCell(`C${3 + learnerIndex}`).value = learner.name;
      sheet.getCell(`D${3 + learnerIndex}`).value = learner.gender === 'male' ? 'М' : 'Ж';
      sheet.getCell(`E${3 + learnerIndex}`).value = learner.birthDate;
      sheet.getCell(`F${3 + learnerIndex}`).value = learner.parentsName;
      sheet.getCell(`G${3 + learnerIndex}`).value = learner.parentsInfo;
      sheet.getCell(`H${3 + learnerIndex}`).value = learner.address;
    });

    for (const row of range(2, 2 + this.learners.length + 1)) {
      for (const column of range(1, 8 + 1)) {
        sheet.getCell(row, column).border = {
          top: { style:'thin' },
          left: { style:'thin' },
          bottom: { style:'thin' },
          right: { style:'thin' }
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
    lessons = orderBy(lessons, (lesson) => `${lesson.year}-${this.getMonthOrder(lesson.month)}-${lesson.day}`);

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

      this.learners.forEach((learner, learnerIndex) => {
        sheet.getCell(`A${4 + learnerIndex}`).value = learnerIndex + 1;
        sheet.getCell(`B${4 + learnerIndex}`).value = learner.name;

        sheetLessons.forEach((lesson, lessonIndex) => {
          if (lesson === null) {
            return;
          }

          sheet.getCell(4 + learnerIndex, 3 + lessonIndex).value = ['н', 'о', 'с', 'б', 'д'].includes(learner.attendance[lesson.year][lesson.month][lesson.day]) ? 'н' : '';
        });
      });

      for (const row of range(2, 3 + this.learners.length + 1)) {
        for (const column of range(1, 57 + 1)) {
          sheet.getCell(row, column).border = {
            top: { style:'thin' },
            left: { style:'thin' },
            bottom: { style:'thin' },
            right: { style:'thin' }
          };
        }
      }

      sheet.getCell('B3').border = {
        diagonal: { down: true, style: 'thin' },
        top: { style:'thin' },
        left: { style:'thin' },
        bottom: { style:'thin' },
        right: { style:'thin' }
      };

      // Change font globally
      sheet.eachRow((row) => {
        row.font = { name: 'Times New Roman', family: 4, size: 11 };
      });

      sheet.getRow(1).font = { name: 'Times New Roman', family: 4, size: 14, bold: true };
    });
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
}
