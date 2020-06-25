import { Component, OnInit, Input } from '@angular/core';

import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-security-card',
  templateUrl: './security-card.component.html',
  styleUrls: ['./security-card.component.scss']
})
export class SecurityCardComponent implements OnInit {

  @Input() imgUrl: string;
  @Input() status: boolean;

  faCheckCircle = faCheckCircle;
  faTimesCircle =faTimesCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
