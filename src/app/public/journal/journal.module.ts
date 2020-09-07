import { CommonModule } from '@angular/common';
import { DataModule } from '@shared/data';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { PublicJournalPageComponent } from './journal.component';
import { PublicJournalPageRoutingModule } from './journal.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PublicJournalPageComponent
  ],
  imports: [
    CommonModule,
    DataModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    MatRippleModule,
    RouterModule,
    TranslateModule,
    PublicJournalPageRoutingModule
  ],
  providers: []
})
export class PublicJournalPageModule { }
