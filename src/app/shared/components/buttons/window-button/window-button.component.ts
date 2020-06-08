import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-window-button',
  templateUrl: './window-button.component.html',
  styleUrls: ['./window-button.component.scss']
})
export class WindowButtonComponent implements OnInit {

  @Input() icon: string;
  @Output() click = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
