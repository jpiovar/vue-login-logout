import { MutationTree } from 'vuex';
import { QuoraStore, QuoraItem } from './quora.types';
import {
  QUORA_ITEM_INITIAL, QUORA_STATUS_INITIAL, QUORA_STATUS_LOADING, QUORA_STATUS_LOADED,
} from './constants';

const mutations: MutationTree<QuoraStore> = {
  storeQuoraData(state: QuoraStore, data: QuoraItem) {
    debugger;
    const newState = {
      quoraItems: data,
      quoraStatus: QUORA_STATUS_LOADED,
    };
    Object.assign(state, newState);
  },
};

export default mutations;
