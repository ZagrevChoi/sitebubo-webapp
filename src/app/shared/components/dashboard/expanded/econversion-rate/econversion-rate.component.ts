import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts'
@Component({
  selector: 'app-econversion-rate',
  templateUrl: './econversion-rate.component.html',
  styleUrls: ['./econversion-rate.component.scss']
})
export class EconversionRateComponent implements OnInit {

  @Output() expand = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    alert('close button pressed');
  }

  onMinimize() {
    alert('minimize button pressed');
  }

  maximizeItem() {
    this.expand.emit(null);
  }
}
