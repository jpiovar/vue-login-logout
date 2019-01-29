import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '../types';
import { QuoraStore, QuoraItem } from './quora.types';

const actions: ActionTree<QuoraStore, RootState> = {
  setLoadedData({ commit }: ActionContext<QuoraStore, RootState>, data: QuoraItem) {
    const { id } = data;
    commit('loginUser', { id });
  },
};

export default actions;
