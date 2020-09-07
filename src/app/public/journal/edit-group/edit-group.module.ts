import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { PublicJournalEditGroupPageComponent } from './edit-group.component';
import { PublicJournalEditGroupPageRoutingModule } from './edit-group.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PublicJournalEditGroupPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSelectModule,
    MatToolbarModule,
    RouterModule,
    TranslateModule,
    PublicJournalEditGroupPageRoutingModule
  ],
  providers: []
})
export class PublicJournalEditGroupPageModule { }
