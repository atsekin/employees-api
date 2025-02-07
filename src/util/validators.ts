import { isNumber } from 'jet-validators';
import { EmployeeStatus } from '@src/models/User';


/**
 * Database relational key.
 */
export function isRelationalKey(arg: unknown): arg is number {
  return isNumber(arg) && arg >= -1;
}

export function isStatus(arg: unknown): arg is EmployeeStatus {
  return Object.values(EmployeeStatus).includes(arg as EmployeeStatus);
}
