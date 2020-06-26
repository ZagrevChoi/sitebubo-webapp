import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  signupForm: FormGroup = this.fb.group({
    fullname: ['', [Validators.required]],
    email: ['', [ Validators.email, Validators.required ]],
    password: ['', Validators.required]
  })
  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  async signup() {
    try {
      this.isLoading = true;
      const value = this.signupForm.value;
      await this.authService.signup(value.fullname, value.email, value.password);
      this.toastService.success('You have successfully signed up for sitebubo.')
    } catch {
      this.toastService.error('')
    } finally {

    }
  }
}
