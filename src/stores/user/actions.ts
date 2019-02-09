import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '../types';
import { UserStore, UserData } from './user.types';

const actions: ActionTree<UserStore, RootState> = {
  loginUser({ commit }: ActionContext<UserStore, RootState>, { id, name, email }: UserData) {
    commit('loginUser', { id, name, email });
  },
  logoutUser({ commit }: ActionContext<UserStore, RootState>) {
    commit('logoutUser');
  },
};

export default actions;
