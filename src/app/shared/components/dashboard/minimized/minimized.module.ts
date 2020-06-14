import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MconversionRateComponent } from './mconversion-rate/mconversion-rate.component';
import { MdomainExpireComponent } from './mdomain-expire/mdomain-expire.component';
import { MmalwareCheckComponent } from './mmalware-check/mmalware-check.component';
import { MseoScoreComponent } from './mseo-score/mseo-score.component';
import { MsiteSpeedComponent } from './msite-speed/msite-speed.component';
import { MuptimeComponent } from './muptime/muptime.component';
import { MwordpressComponent } from './mwordpress/mwordpress.component';
import { MfullReportComponent } from './mfull-report/mfull-report.component';



@NgModule({
  declarations: [
    MconversionRateComponent,
    MdomainExpireComponent,
    MmalwareCheckComponent,
    MseoScoreComponent,
    MsiteSpeedComponent,
    MuptimeComponent,
    MwordpressComponent,
    MfullReportComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MconversionRateComponent,
    MdomainExpireComponent,
    MmalwareCheckComponent,
    MseoScoreComponent,
    MsiteSpeedComponent,
    MuptimeComponent,
    MwordpressComponent,
    MfullReportComponent
  ]
})
export class MinimizedModule { }
