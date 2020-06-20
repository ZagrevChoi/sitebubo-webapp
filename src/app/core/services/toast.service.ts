import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastService {


  constructor(
    private toastr: ToastrService
  ) { }


  success(text: string, title?: string) {
    this.toastr.success( title, text );
  }

  waring(text: string, title?: string) {
    this.toastr.warning( title, text );
  }

  error(text: string, title?: string) {
    this.toastr.error( title, text );
  }
}
