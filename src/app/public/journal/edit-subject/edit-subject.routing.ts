import { PublicJournalEditSubjectPageComponent } from './edit-subject.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PublicJournalEditSubjectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicJournalEditSubjectPageRoutingModule { }
