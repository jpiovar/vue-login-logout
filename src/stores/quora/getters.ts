import { GetterTree } from 'vuex';
import { QuoraStore, QuoraItem } from './quora.types';
import { RootState } from '../types';

const getters: GetterTree<QuoraStore, RootState> = {
  quoraItems(state: QuoraStore): QuoraItem[] {
    return state.quoraItems;
  },
  quoraStatus(state: QuoraStore): String {
    return state.quoraStatus;
  },
};

export default getters;
