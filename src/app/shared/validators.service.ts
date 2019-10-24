import {Injectable} from '@angular/core';
import {FormGroup, ValidationErrors} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  static passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{7,}$';
  static namePattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{7,}$';


  public equalPasswordValidator({value}: FormGroup): ValidationErrors | null {
    const [pass, cpass] = Object.values(value);
    return pass !== cpass
      ? {
        notEqual: 'Passwords not equal'
      }
      : null;

  }
}

