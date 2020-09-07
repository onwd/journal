import { PublicJournalPageComponent } from './journal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PublicJournalPageComponent
  },
  {
    path: 'learners/:id',
    loadChildren: () => import('./edit-learner/edit-learner.module').then((module) => module.PublicJournalEditLearnerPageModule)
  },
  {
    path: 'groups/:id',
    loadChildren: () => import('./edit-group/edit-group.module').then((module) => module.PublicJournalEditGroupPageModule)
  },
  {
    path: 'groups/:groupId/subjects/:id',
    loadChildren: () => import('./edit-subject/edit-subject.module').then((module) => module.PublicJournalEditSubjectPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicJournalPageRoutingModule { }
