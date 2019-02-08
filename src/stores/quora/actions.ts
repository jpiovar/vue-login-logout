import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '../types';
import { QuoraStore, QuoraItem, Answer } from './quora.types';
import { QLEVEL, ALEVEL } from './constants';

const actions: ActionTree<QuoraStore, RootState> = {
  storeQuoraData({ commit }: ActionContext<QuoraStore, RootState>, data: QuoraItem[]) {
    commit('storeQuoraData', data);
  },
  addNewQuestionStore({ commit, state }: ActionContext<QuoraStore, RootState>, item: QuoraItem) {
    const data: QuoraItem[] = state.quoraItems;
    data.push(item);
    commit('storeQuoraData', data);
  },
  removeQuestionStore({ commit, state }:
    ActionContext<QuoraStore, RootState>, { level, qIndex, index }:
      { level: string, qIndex: number, index: number }) {
    debugger;
    let data: QuoraItem[] = [];
    if (level === QLEVEL) {
      data = state.quoraItems;
      data.splice(index, 1);
    } else if (level === ALEVEL) {
      data = state.quoraItems;
      data[qIndex].answers.splice(index, 1);
    }
    commit('storeQuoraData', data);
  },
  destroyQuoraData({ commit }: ActionContext<QuoraStore, RootState>) {
    const data: QuoraItem[] = [];
    commit('storeQuoraData', data);
  },
};

export default actions;
