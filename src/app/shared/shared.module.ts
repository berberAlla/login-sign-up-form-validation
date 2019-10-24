import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValidatorsService} from './validators.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [
        ValidatorsService,
      ]
    };

  }
}
