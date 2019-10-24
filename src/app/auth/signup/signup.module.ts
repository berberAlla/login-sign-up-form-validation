import { NgModule } from '@angular/core';
import {SignupComponent} from './signup.component';
import {SignupRoutingModule} from './signup-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [SignupComponent],
  imports: [SignupRoutingModule, SharedModule]
})
export class SignupModule { }
