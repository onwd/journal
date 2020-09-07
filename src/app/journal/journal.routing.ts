import { JournalComponent } from './journal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: JournalComponent
  },
  {
    path: 'learners/:id',
    loadChildren: () => import('./edit-learner/edit-learner.module').then((module) => module.JournalEditLearnerPageModule)
  },
  {
    path: 'groups/:id',
    loadChildren: () => import('./edit-group/edit-group.module').then((module) => module.JournalEditGroupPageModule)
  },
  {
    path: 'groups/:groupId/subjects/:id',
    loadChildren: () => import('./edit-subject/edit-subject.module').then((module) => module.JournalEditSubjectPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule { }
