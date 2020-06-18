import { Injectable } from '@angular/core';
import { Toast, ToastType } from '../models/toast';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  sendToast$: Subject<Toast> = new Subject<Toast>();

  constructor() { }

  show(type: ToastType, text: string, title?: string) {
    this.sendToast$.next({ type, title, text });
  }

  success(text: string, title?: string) {
    this.sendToast$.next({ type: ToastType.Success, title, text });
  }

  waring(text: string, title?: string) {
    this.sendToast$.next({ type: ToastType.Success, title, text });
  }

  danger(text: string, title?: string) {
    this.sendToast$.next({ type: ToastType.Success, title, text });
  }
}
