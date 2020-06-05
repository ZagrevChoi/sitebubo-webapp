import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

// minimized components
import { MemailCheckComponent } from './../shared/components/dashboard/minimized/memail-check/memail-check.component';
import { MvisitorsComponent } from './../shared/components/dashboard/minimized/mvisitors/mvisitors.component';
import { MconversionRateComponent } from './../shared/components/dashboard/minimized/mconversion-rate/mconversion-rate.component';
import { MmobileFriendlyComponent } from './../shared/components/dashboard/minimized/mmobile-friendly/mmobile-friendly.component';
import { MwordpressComponent } from './../shared/components/dashboard/minimized/mwordpress/mwordpress.component';
import { MrankCheckComponent } from './../shared/components/dashboard/minimized/mrank-check/mrank-check.component';
import { MfullReportComponent } from './../shared/components/dashboard/minimized/mfull-report/mfull-report.component';
import { MsiteSpeedComponent } from './../shared/components/dashboard/minimized/msite-speed/msite-speed.component';
import { MdomainExpireComponent } from './../shared/components/dashboard/minimized/mdomain-expire/mdomain-expire.component';
import { MseoScoreComponent } from './../shared/components/dashboard/minimized/mseo-score/mseo-score.component';


@NgModule({
  declarations: [
    DashboardComponent,
    // minimized components
    MemailCheckComponent,
    MvisitorsComponent,
    MconversionRateComponent,
    MmobileFriendlyComponent,
    MwordpressComponent,
    MrankCheckComponent,
    MsiteSpeedComponent,
    MfullReportComponent,
    MdomainExpireComponent,
    MseoScoreComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    // minimized components
    MemailCheckComponent,
    MvisitorsComponent,
    MconversionRateComponent,
    MmobileFriendlyComponent,
    MwordpressComponent,
    MrankCheckComponent,
    MsiteSpeedComponent,
    MfullReportComponent,
    MdomainExpireComponent,
    MseoScoreComponent,
  ]
})
export class DashboardModule { }
