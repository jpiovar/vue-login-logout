export interface UserProfile {
    id: string;
    name: string;
    email: string;
}

export type UserStatus = ''|'loggedIn';

export interface UserStore {
    userProfile: UserProfile;
    userStatus: UserStatus;
}
