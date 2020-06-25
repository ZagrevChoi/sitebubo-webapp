import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../core/services/toast.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  loginForm: FormGroup = this.fb.group({
    email: ['', [ Validators.email, Validators.required ]],
    password: ['', Validators.required ]
  });
  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async login() {
    try {
      this.isLoading = true;
      const value = this.loginForm.value;
      await this.authService.login(value.email, value.password).toPromise();
      this.toastService.success(`You've successfully logged in.`);
      this.router.navigate(['/dashboard']);
    } catch {
      this.toastService.error(`Invalid email or password. Please try again.`);
    } finally {
      this.isLoading = false;
    }
  }

  
}
