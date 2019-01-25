import { MutationTree } from 'vuex';
import { UserStore, UserProfile } from './user.types';
import { USER_PROFILE, USER_STATUS_OUT, USER_STATUS_IN } from './constants';

const mutations: MutationTree<UserStore> = {
  loginUser(state: UserStore, data: UserProfile) {
    const newState = {
      userProfile: data,
      userStatus: USER_STATUS_IN,
    };
    Object.assign(state, newState);
  },
  logoutUser(state: UserStore) {
    const newState = {
      userProfile: USER_PROFILE,
      userStatus: USER_STATUS_OUT,
    };
    Object.assign(state, newState);
  },
};

export default mutations;
