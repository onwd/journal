import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService, Learner } from '@shared/data';

@Component({
  selector: 'public-journal-edit-learner-page',
  templateUrl: 'edit-learner.html',
  styleUrls: ['edit-learner.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicJournalEditLearnerPageComponent implements OnInit {
  public learner: Learner;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  public ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.learner = this.dataService.learners.find((learner) => learner.id === Number(id));
  }
}
