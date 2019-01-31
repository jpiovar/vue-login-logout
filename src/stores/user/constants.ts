import { UserData, UserStatus } from './user.types';

export const USER_DATA: UserData = {
  id: '',
  name: '',
  email: '',
};

export const USER_STATUS_IN: UserStatus = 'loggedIn';
export const USER_STATUS_OUT: UserStatus = 'loggedOut';
export const USER_STATUS_INITIAL: UserStatus = 'initial';
