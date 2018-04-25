import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

// Other components
  import { RoundProgressModule } from 'angular-svg-round-progressbar';
//

import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { ResumePreviewComponent } from './layouts/home/components/resume-preview/resume-preview.component';
import { ProfileImgComponent } from './components/common/profile-img/profile-img.component';
import { ProfileWorkHistoryComponent } from './components/common/profile-work-history/profile-work-history.component';
import { ProfileSkillsComponent } from './components/common/profile-skills/profile-skills.component';
import { SkillsPreviewComponent } from './layouts/home/components/skills-preview/skills-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumePreviewComponent,
    ProfileImgComponent,
    ProfileWorkHistoryComponent,
    ProfileSkillsComponent,
    SkillsPreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    RoundProgressModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
