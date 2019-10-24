import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { URL } from './config';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: URL.LOGIN
  },
  {
    path: URL.LOGIN,
    loadChildren: () => import('./auth/login/login.module').then((m => m.LoginModule))
  },
  {
    path: URL.SIGNUP,
    loadChildren: () => import('./auth/signup/signup.module').then((m => m.SignupModule))
  },
  {
    path: '**',
    redirectTo: URL.LOGIN
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
