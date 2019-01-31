import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '../types';
import { QuoraStore, QuoraItem } from './quora.types';

const actions: ActionTree<QuoraStore, RootState> = {
  setQuoraData({ commit }: ActionContext<QuoraStore, RootState>, datas: QuoraItem[]) {
    debugger;
    // const { id } = datas;
    // commit('loginUser', { id });
  },
  destroyQuoraData({ commit }: ActionContext<QuoraStore, RootState>, datas: QuoraItem[]) {
    debugger;
  },
};

export default actions;
