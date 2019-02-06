import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '../types';
import { QuoraStore, QuoraItem } from './quora.types';

const actions: ActionTree<QuoraStore, RootState> = {
  storeQuoraData({ commit }: ActionContext<QuoraStore, RootState>, data: QuoraItem[]) {
    commit('storeQuoraData', data);
  },
  addNewQuestionStore({ commit, state }: ActionContext<QuoraStore, RootState>, item: any) {
    debugger;
    const data: QuoraItem[] = state.quoraItems;
    const key: any = Object.keys(item)[0];
    data[key] = item[key];
    commit('storeQuoraData', data);
  },
  destroyQuoraData({ commit }: ActionContext<QuoraStore, RootState>) {
    const data: QuoraItem[] = [];
    commit('storeQuoraData', data);
  },
};

export default actions;
