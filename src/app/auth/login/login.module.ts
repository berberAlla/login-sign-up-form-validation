import { NgModule } from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, SharedModule, CommonModule]
})
export class LoginModule { }
