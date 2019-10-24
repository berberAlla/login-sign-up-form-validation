import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidatorsService} from '../../shared/validators.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {

  }

  public ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: this.fb.group({
        pass: ['', [Validators.required, Validators.pattern(ValidatorsService.passwordPattern)]],
        cpass: ['', [Validators.required, Validators.pattern(ValidatorsService.passwordPattern)]],
      },
        {
          validators: [this.validatorsService.equalPasswordValidator]
        }),
    });
  }

}
