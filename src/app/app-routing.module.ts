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
    loadChildren: './auth/login/login.module#LoginModule'
  },
  {
    path: URL.SIGNUP,
    loadChildren:  './auth/signup/signup.module#SignupModule'
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
