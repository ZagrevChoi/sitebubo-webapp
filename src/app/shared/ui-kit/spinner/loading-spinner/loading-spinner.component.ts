import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.spinner.hide();
  }

}
