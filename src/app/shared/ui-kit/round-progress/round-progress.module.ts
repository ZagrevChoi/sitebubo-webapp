import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { RoundProgressComponent } from './round-progress.component';

@NgModule({
  declarations: [
    RoundProgressComponent
  ],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
      radius: 150,
      outerStrokeWidth: 10,
      innerStrokeWidth: 5,
      showTitle: false,
      showSubtitle: false,
      showUnits: false,
      showBackground: false,
      startFromZero: false
  }),
  ],
  exports: [
    RoundProgressComponent
  ]
})
export class RoundProgressModule { }
