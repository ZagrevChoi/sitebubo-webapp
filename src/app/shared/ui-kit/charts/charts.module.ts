import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ChartLineComponent } from './chart-line/chart-line.component';
import { ChartAreaComponent } from './chart-area/chart-area.component';

@NgModule({
  declarations: [
    ChartLineComponent,
    ChartAreaComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [
    ChartLineComponent,
    ChartAreaComponent
  ]
})
export class ChartsModule { }
