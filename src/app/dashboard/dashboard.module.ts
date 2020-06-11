import { ButtonsModule } from './../shared/components/buttons/buttons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


import { DragDropModule } from '@angular/cdk/drag-drop';
import { ExpandedModule } from '../shared/components/dashboard/expanded/expanded.module';
import { MinimizedModule } from '../shared/components/dashboard/minimized/minimized.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonsModule,
    DragDropModule,
    ExpandedModule,
    MinimizedModule
  ]
})
export class DashboardModule { }
