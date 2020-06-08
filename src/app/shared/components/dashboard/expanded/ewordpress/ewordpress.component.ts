import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ewordpress',
  templateUrl: './ewordpress.component.html',
  styleUrls: ['./ewordpress.component.scss']
})
export class EwordpressComponent implements OnInit {

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
