import { ActionTree, ActionContext } from 'vuex';
import RootState from '../types';
import { UserStore, UserProfile } from './user.types';

const actions: ActionTree<UserStore, RootState> = {
  loginUser({ commit }: ActionContext<UserStore, RootState>, data: UserProfile) {
    const { id, name, email } = data;
    commit('loginUser', { id, name, email });
  },
  logoutUser({ commit }: ActionContext<UserStore, RootState>) {
    commit('logoutUser');
  },
};

export default actions;
