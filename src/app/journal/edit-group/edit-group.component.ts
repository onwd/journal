import { ActivatedRoute, Router } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  DataService,
  Group,
  Learner,
  Subject
} from '@shared/data';
import { filter, map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { isString, last, without } from 'lodash';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';

@Component({
  selector: 'journal-edit-group-page',
  templateUrl: 'edit-group.html',
  styleUrls: ['edit-group.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalEditGroupPageComponent implements OnInit {
  @ViewChild('addLearnerInput') addLearnerInput: ElementRef;

  public group: Group;
  public subjects: Array<Subject>;
  public addLearnerControl: FormControl;
  public learnerOptions: Observable<Array<Learner>>;
  public learners: Array<Learner>;

  public get selectableLearners(): Array<Learner> {
    return this.learners.filter((learner) => !this.group.learnersIds.includes(learner.id));
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
    this.addLearnerControl = new FormControl();
  }

  public ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.group = this.dataService.groups.find((group) => group.id === Number(id));
    this.subjects = this.group.subjects;
    this.learners = this.dataService.learners;

    this.learnerOptions = this.addLearnerControl.valueChanges
      .pipe(
        startWith(''),
        filter((query) => isString(query)),
        map((query) => this.selectableLearners
          .filter((learner) => learner.name.toLowerCase().includes(query.toLowerCase()))
        )
      );
  }

  public createSubject(): void {
    const subject = new Subject({
      id: (this.subjects.length > 0)
        ? last(this.subjects).id + 1
        : 1,
      lessons: []
    });

    this.subjects.push(subject);

    this.router.navigate(['/groups', this.group.id, 'subjects', subject.id]);
  }

  public onLearnerSelected(event: MatAutocompleteSelectedEvent): void {
    this.group.learnersIds.push(event.option.value);
    this.addLearnerControl.setValue('');
    this.addLearnerInput.nativeElement.blur();

    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 0);
  }

  public getLearnerById(id: number): Learner {
    return this.learners.find((learner) => learner.id === id);
  }

  public deleteLearner(learnerId: number): void {
    this.group.learnersIds = without(this.group.learnersIds, learnerId);
  }

  public deleteSubject(subject: Subject): void {
    const subjectIndex = this.subjects.findIndex((item) => item.id === subject.id);

    this.subjects.splice(subjectIndex, 1);
  }
}
