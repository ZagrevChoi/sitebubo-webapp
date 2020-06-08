import { ButtonsModule } from './../shared/components/buttons/buttons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


// expanded components
import { EseoScoreComponent } from './../shared/components/dashboard/expanded/eseo-score/eseo-score.component';
import { EwordpressComponent } from './../shared/components/dashboard/expanded/ewordpress/ewordpress.component';
import { EdesktopSpeedComponent } from './../shared/components/dashboard/expanded/edesktop-speed/edesktop-speed.component';
import { EmalwareCheckComponent } from './../shared/components/dashboard/expanded/emalware-check/emalware-check.component';
import { EconversionRateComponent } from './../shared/components/dashboard/expanded/econversion-rate/econversion-rate.component';
import { EserverMonitorComponent } from './../shared/components/dashboard/expanded/eserver-monitor/eserver-monitor.component';
import { EuptimeComponent } from './../shared/components/dashboard/expanded/euptime/euptime.component';
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

import { GridsterModule } from 'angular-gridster2';
@NgModule({
  declarations: [
    DashboardComponent,
    EseoScoreComponent,
    EwordpressComponent,
    EdesktopSpeedComponent,
    EmalwareCheckComponent,
    EconversionRateComponent,
    EserverMonitorComponent,
    EuptimeComponent,
    // minimized components
    MemailCheckComponent,
    MvisitorsComponent,
    MconversionRateComponent,
    MmobileFriendlyComponent,
    MwordpressComponent,
    MrankCheckComponent,
    MfullReportComponent,
    MsiteSpeedComponent,
    MdomainExpireComponent,
    MseoScoreComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    GridsterModule,
    ButtonsModule
  ]
})
export class DashboardModule { }
