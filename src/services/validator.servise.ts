import { isEmail, isNotEmpty, isString } from 'class-validator';

function isUserLoginDataValid(email: string, password: string): boolean {
  if (!isEmail(email)) {
    return false;
  }
  if (!isString(password) || !isNotEmpty(password)) {
    return false;
  }

  return true;
}

export default isUserLoginDataValid;
