import { isEnum, isString } from 'jet-validators';

import schema from '@src/util/schema';
import { isRelationalKey, isStatus } from '@src/util/validators';


/******************************************************************************
                                  Types
******************************************************************************/

export enum EmployeeStatus {
  WORKING = 'Working',
  ON_VACATION = 'On Vacation',
  LUNCH_TIME = 'Lunch Time',
  BUSINESS_TRIP = 'Business Trip',
}

export interface IUser {
  id: number;
  name: string;
  img: string;
  status: EmployeeStatus;
}


/******************************************************************************
                                 Setup
******************************************************************************/

const User = schema<IUser>({
  id: isRelationalKey,
  name: isString,
  img: isString,
  status: isStatus,
});


/******************************************************************************
                                Export default
******************************************************************************/

export default User;