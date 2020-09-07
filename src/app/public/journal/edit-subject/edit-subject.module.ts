import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { PublicJournalEditSubjectPageComponent } from './edit-subject.component';
import { PublicJournalEditSubjectPageRoutingModule } from './edit-subject.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PublicJournalEditSubjectPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSelectModule,
    MatToolbarModule,
    RouterModule,
    TranslateModule,
    PublicJournalEditSubjectPageRoutingModule
  ],
  providers: []
})
export class PublicJournalEditSubjectPageModule { }
