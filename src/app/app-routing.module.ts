import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: '**', redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
