import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowButtonComponent } from './window-button/window-button.component';



@NgModule({
  declarations: [WindowButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [WindowButtonComponent]
})
export class ButtonsModule { }
