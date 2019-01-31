import { GetterTree } from 'vuex';
import { UserStore, UserData } from './user.types';
import { RootState } from '../types';

const getters: GetterTree<UserStore, RootState> = {
  userData(state: UserStore): UserData {
    return state.userData;
  },
  userStatus(state: UserStore): String {
    return state.userStatus;
  },
};

export default getters;
