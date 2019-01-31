import { MutationTree } from 'vuex';
import { QuoraStore, QuoraItem } from './quora.types';
import {
  QUORA_ITEM_INITIAL, QUORA_STATUS_INITIAL, QUORA_STATUS_LOADING, QUORA_STATUS_DONE,
} from './constants';

const mutations: MutationTree<QuoraStore> = {
  initialQuora(state: QuoraStore, data: QuoraItem) {
    const newState = {
      quoraItem: data,
      quoraStatus: QUORA_STATUS_INITIAL,
    };
    Object.assign(state, newState);
  },
};

export default mutations;
