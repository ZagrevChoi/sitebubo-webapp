import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../shared/ui-kit/input/input.module';
import { SpinnerModule } from '../shared/ui-kit/spinner/loading-spinner/spinner.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent, VerifyEmailComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    SpinnerModule,
  ],

})
export class AuthModule { }
