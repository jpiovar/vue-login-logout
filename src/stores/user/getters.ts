import { GetterTree } from 'vuex';
import { UserStore } from './user.types';
import RootState from '../types';

const getters: GetterTree<UserStore, RootState> = {
  userNameEmail(state: UserStore): { name: String, email: String} {
    const { name, email } = state.userProfile;
    return { name, email };
  },
  userStatus(state: UserStore): String {
    return state.userStatus;
  },
};

export default getters;
