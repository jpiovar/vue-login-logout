import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '../types';
import { QuoraStore, QuoraItem, AnswerItem } from './quora.types';
import { quoraContent } from '../../assets/data';

const actions: ActionTree<QuoraStore, RootState> = {
  storeQuoraData({ commit }:
    ActionContext<QuoraStore, RootState>) {
    commit('storeQuoraData', quoraContent);
  },
  destroyQuoraData({ commit }:
    ActionContext<QuoraStore, RootState>) {
    const data: QuoraItem[] = [];
    // commit('storeQuoraData', data);
    commit('destroyQuoraData', data);
  },
  addNewQuestionStore({ commit, state }:
    ActionContext<QuoraStore, RootState>, { item }: { item: QuoraItem }) {
    const data: QuoraItem[] = state.quoraItems;
    data.push(item);
    commit('storeQuoraData', data);
  },
  removeQuestionStore({ commit, state }:
    ActionContext<QuoraStore, RootState>, { itemId }: { itemId: string }) {
    let qIndex = 0;
    const data: QuoraItem[] = state.quoraItems;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === itemId) {
        qIndex = i;
        break;
      }
    }
    data.splice(qIndex, 1);
    commit('storeQuoraData', data);
  },
  updateQuestionStore({ commit, state }:
    ActionContext<QuoraStore, RootState>, { qId, text }: { qId: string, text: string }) {
    const data: QuoraItem[] = state.quoraItems;
    const qIndex: number = data.reduce((res, item, index) => {
      if (item.id === qId) {
        return index;
      }
      return res;
    }, 0);
    data[qIndex].text = text;
    commit('storeQuoraData', data);
  },
  addNewAnswerStore({ commit, state }:
    ActionContext<QuoraStore, RootState>, { qId, item }: { qId: string, item: QuoraItem }) {
    const data: QuoraItem[] = state.quoraItems;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === qId) {
        data[i].answers.push(item);
        break;
      }
    }
    commit('storeQuoraData', data);
  },
  removeAnswerStore({ commit, state }:
    ActionContext<QuoraStore, RootState>, { itemId, qId }: { itemId: string, qId: string }) {
    const data: QuoraItem[] = state.quoraItems;
    const qIndex: number = data.reduce((res, item, index) => {
      if (item.id === qId) {
        return index;
      }
      return res;
    }, 0);
    const aIndex: number = data[qIndex].answers.reduce((res, item, index) => {
      if (item.id === itemId) {
        return index;
      }
      return res;
    }, 0);
    data[qIndex].answers.splice(aIndex, 1);
    commit('storeQuoraData', data);
  },
  updateAnswerStore({ commit, state }:
    ActionContext<QuoraStore, RootState>, { aId, text, qId }: { aId: string, text: string, qId: string }) {
    const data: QuoraItem[] = state.quoraItems;
    const qIndex: number = data.reduce((res, item, index) => {
      if (item.id === qId) {
        return index;
      }
      return res;
    }, 0);
    const aIndex: number = data[qIndex].answers.reduce((res, item, index) => {
      if (item.id === aId) {
        return index;
      }
      return res;
    }, 0);
    data[qIndex].answers[aIndex].text = text;
    commit('storeQuoraData', data);
  },
};

export default actions;
