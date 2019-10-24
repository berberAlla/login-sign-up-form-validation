import {Injectable} from '@angular/core';
import {FormGroup, ValidationErrors} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  static passwordPattern = '^(?=.*[0-9])(?=.*[$~\\-_])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$~\\-_]{8,}$';

  public equalPasswordValidator({value}: FormGroup): ValidationErrors | null {
    const [pass, cpass] = Object.values(value);
    return pass !== cpass
      ? {
        notEqual: 'Passwords not equal'
      }
      : null;

  }
}

