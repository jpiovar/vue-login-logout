import { GetterTree } from 'vuex';
import { QuoraStore, QuoraItem, QuoraStatus } from './quora.types';
import { RootState } from '../types';

const getters: GetterTree<QuoraStore, RootState> = {
  quoraItems(state: QuoraStore): QuoraItem[] {
    return state.quoraItems;
  },
  quoraStatus(state: QuoraStore): QuoraStatus {
    return state.quoraStatus;
  },
};

export default getters;
