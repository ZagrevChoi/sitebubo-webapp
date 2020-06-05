import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { LayoutModule } from './layout/layout.module';

import { AppRoutingModule } from './app-routing.module';

import { AuthInterceptor } from './core/interceptors/auth.interceptor';

import { AppComponent } from './app.component';
import { EuptimeComponent } from './shared/components/dashboard/expanded/euptime/euptime.component';
import { EserverMonitorComponent } from './shared/components/dashboard/expanded/eserver-monitor/eserver-monitor.component';
import { EconversionRateComponent } from './shared/components/dashboard/expanded/econversion-rate/econversion-rate.component';
import { EdesktopSpeedComponent } from './shared/components/dashboard/expanded/edesktop-speed/edesktop-speed.component';
import { EmalwareCheckComponent } from './shared/components/dashboard/expanded/emalware-check/emalware-check.component';
import { EwordpressComponent } from './shared/components/dashboard/expanded/ewordpress/ewordpress.component';
import { EseoScoreComponent } from './shared/components/dashboard/expanded/eseo-score/eseo-score.component';

@NgModule({
  declarations: [
    AppComponent,
    EuptimeComponent,
    EserverMonitorComponent,
    EconversionRateComponent,
    EdesktopSpeedComponent,
    EmalwareCheckComponent,
    EwordpressComponent,
    EseoScoreComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
