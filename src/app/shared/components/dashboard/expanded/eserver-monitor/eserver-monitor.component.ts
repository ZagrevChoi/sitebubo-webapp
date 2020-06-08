import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eserver-monitor',
  templateUrl: './eserver-monitor.component.html',
  styleUrls: ['./eserver-monitor.component.scss']
})
export class EserverMonitorComponent implements OnInit {

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
