import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-euptime',
  templateUrl: './euptime.component.html',
  styleUrls: ['./euptime.component.scss']
})
export class EuptimeComponent implements OnInit {

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
