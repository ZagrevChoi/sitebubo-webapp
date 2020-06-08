import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eseo-score',
  templateUrl: './eseo-score.component.html',
  styleUrls: ['./eseo-score.component.scss']
})
export class EseoScoreComponent implements OnInit {

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
