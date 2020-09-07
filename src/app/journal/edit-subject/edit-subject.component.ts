import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  DataService,
  Group,
  Lesson,
  Subject
} from '@shared/data';
import { last, range } from 'lodash';

@Component({
  selector: 'journal-edit-subject-page',
  templateUrl: 'edit-subject.html',
  styleUrls: ['edit-subject.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalEditSubjectPageComponent implements OnInit {
  public group: Group;
  public subject: Subject;
  public lessons: Array<Lesson>;
  public days: Array<number>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  public ngOnInit(): void {
    const groupId = this.activatedRoute.snapshot.paramMap.get('groupId');
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.group = this.dataService.groups.find((group) => group.id === Number(groupId));
    this.subject = this.group.subjects.find((subject) => subject.id === Number(id));
    this.lessons = this.subject.lessons;
    this.days = range(1, 31 + 1);
  }

  public createLesson(): void {
    const lesson = new Lesson({
      id: (this.lessons.length > 0)
        ? last(this.lessons).id + 1
        : 1
    });

    this.lessons.push(lesson);

    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 0);
  }

  public deleteLesson(lesson: Lesson): void {
    const lessonIndex = this.lessons.findIndex((item) => item.id === lesson.id);

    this.lessons.splice(lessonIndex, 1);
  }
}
