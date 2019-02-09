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
    ActionContext<QuoraStore, RootState>, { level, itemId }:
      { level: string, itemId: string }) {
    debugger;
    let qIndex = 0;
    let aIndex = 0;
    let data: QuoraItem[] = [];
    if (level === QLEVEL) {
      data = state.quoraItems;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === itemId) {
          qIndex = i;
          break;
        }
      }
      data.splice(qIndex, 1);
    } else if (level === ALEVEL) {
      data = state.quoraItems;
      let loopBreak = false;
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].answers.length; j++) {
          if (data[i].answers[j].id === itemId) {
            qIndex = i;
            aIndex = j;
            loopBreak = true;
            break;
          }
        }
        if (loopBreak) {
          break;
        }
      }
      data[qIndex].answers.splice(aIndex, 1);
    }
    commit('storeQuoraData', data);
  },
  destroyQuoraData({ commit }: ActionContext<QuoraStore, RootState>) {
    const data: QuoraItem[] = [];
    commit('storeQuoraData', data);
  },
};

export default actions;
