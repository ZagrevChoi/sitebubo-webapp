import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EconversionRateComponent } from './econversion-rate/econversion-rate.component';
import { EdomainExpireComponent } from './edomain-expire/edomain-expire.component';
import { EmalwareCheckComponent } from './emalware-check/emalware-check.component';
import { EseoScoreComponent } from './eseo-score/eseo-score.component';
import { EsiteSpeedComponent } from './esite-speed/esite-speed.component';
import { EuptimeComponent } from './euptime/euptime.component';
import { EwordpressComponent } from './ewordpress/ewordpress.component';
import { ButtonsModule } from '../../buttons/buttons.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SecurityCardComponent } from './security-card/security-card.component';
@NgModule({
  declarations: [
    EconversionRateComponent,
    EdomainExpireComponent,
    EmalwareCheckComponent,
    EseoScoreComponent,
    EsiteSpeedComponent,
    EuptimeComponent,
    EwordpressComponent,
    SecurityCardComponent,
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    NgxChartsModule,
    FontAwesomeModule
    // BrowserAnimationsModule
  ],
  exports: [
    EconversionRateComponent,
    EdomainExpireComponent,
    EmalwareCheckComponent,
    EseoScoreComponent,
    EsiteSpeedComponent,
    EuptimeComponent,
    EwordpressComponent,
  ]
})
export class ExpandedModule { }
