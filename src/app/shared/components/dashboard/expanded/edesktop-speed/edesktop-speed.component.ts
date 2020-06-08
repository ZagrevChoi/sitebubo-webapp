import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edesktop-speed',
  templateUrl: './edesktop-speed.component.html',
  styleUrls: ['./edesktop-speed.component.scss']
})
export class EdesktopSpeedComponent implements OnInit {

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
