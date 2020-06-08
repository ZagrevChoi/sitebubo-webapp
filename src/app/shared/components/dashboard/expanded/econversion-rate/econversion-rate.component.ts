import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-econversion-rate',
  templateUrl: './econversion-rate.component.html',
  styleUrls: ['./econversion-rate.component.scss']
})
export class EconversionRateComponent implements OnInit {

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
    alert('expand button pressed');
  }
}
