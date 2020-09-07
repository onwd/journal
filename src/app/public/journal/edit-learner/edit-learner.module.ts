import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { PublicJournalEditLearnerPageComponent } from './edit-learner.component';
import { PublicJournalEditLearnerPageRoutingModule } from './edit-learner.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PublicJournalEditLearnerPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    RouterModule,
    TranslateModule,
    PublicJournalEditLearnerPageRoutingModule
  ],
  providers: []
})
export class PublicJournalEditLearnerPageModule { }
