import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '../types';
import { UserStore, UserData } from './user.types';
import { userProfiles } from '../../assets/data';

const actions: ActionTree<UserStore, RootState> = {
  loginUser({ commit }: ActionContext<UserStore, RootState>, { name, password }: { name: string, password: string }): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const up = userProfiles.filter(item => item.name === name && item.password === password);
      if (up && up.length > 0) {
        commit('loginUser', { id: up[0].id, name: up[0].name, email: up[0].email });
        resolve(true);
      } else {
        resolve(false);
      }
    });
  },
  logoutUser({ commit }: ActionContext<UserStore, RootState>) {
    commit('logoutUser');
  },
};

export default actions;
