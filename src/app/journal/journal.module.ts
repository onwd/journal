import { CommonModule } from '@angular/common';
import { DataModule } from '@shared/data';
import { FormsModule } from '@angular/forms';
import { JournalComponent } from './journal.component';
import { JournalRoutingModule } from './journal.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    JournalComponent
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
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatRippleModule,
    RouterModule,
    TranslateModule,
    JournalRoutingModule
  ],
  providers: []
})
export class JournalModule { }
