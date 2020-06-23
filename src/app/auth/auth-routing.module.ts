import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrandComponent } from './brand/brand.component';

const routes: Routes = [
  {
    path: '', component: BrandComponent,
    children: [
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'signup', component: SignupComponent
      } 
    ]
  },
  // {
  //   path: '', redirectTo: 'login', pathMatch: 'full'
  // },
  // {
  //   path: 'login', component: LoginComponent
  // },
  // {
  //   path: 'signup', component: SignupComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
