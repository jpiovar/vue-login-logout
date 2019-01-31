import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '../types';
import { QuoraStore, QuoraItem } from './quora.types';

const actions: ActionTree<QuoraStore, RootState> = {
  storeQuoraData({ commit }: ActionContext<QuoraStore, RootState>, data: QuoraItem[]) {
    commit('storeQuoraData', data);
  },
  destroyQuoraData({ commit }: ActionContext<QuoraStore, RootState>, datas: QuoraItem[]) {},
};

export default actions;
