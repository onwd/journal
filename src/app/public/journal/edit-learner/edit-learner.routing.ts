import { PublicJournalEditLearnerPageComponent } from './edit-learner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PublicJournalEditLearnerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicJournalEditLearnerPageRoutingModule { }
