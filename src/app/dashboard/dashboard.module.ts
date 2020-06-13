import { ButtonsModule } from './../shared/components/buttons/buttons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { ExpandedModule } from '../shared/components/dashboard/expanded/expanded.module';
import { MinimizedModule } from '../shared/components/dashboard/minimized/minimized.module';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonsModule,
    ExpandedModule,
    MinimizedModule,
    NgSelectModule,
    FormsModule,
    DragDropModule
  ]
})
export class DashboardModule { }
