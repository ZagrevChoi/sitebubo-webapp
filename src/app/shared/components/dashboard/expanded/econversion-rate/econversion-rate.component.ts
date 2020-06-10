import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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

  onExpand() {
    this.expand.emit(null);
  }
}
