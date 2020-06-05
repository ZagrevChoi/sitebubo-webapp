import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { LayoutModule } from './layout/layout.module';

import { AppRoutingModule } from './app-routing.module';

import { AuthInterceptor } from './core/interceptors/auth.interceptor';

import { AppComponent } from './app.component';
import { TopbarComponent } from './shared/common/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent
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
