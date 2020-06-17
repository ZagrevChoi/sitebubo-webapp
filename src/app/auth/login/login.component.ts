import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    private fb: FormBuilder,
    private toast: ToastService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  async login() {
    try {
      this.isLoading = true;
      const value = this.loginForm.value;
      
    } catch {

    } finally {

    }
  }

  
}
