import { MutationTree } from 'vuex';
import { ModeStore, AppMode, Reference } from './mode.types';
import { MODE_INITIAL, MODE_EDIT, MODE_READ } from './constants';

const mutations: MutationTree<ModeStore> = {
  setMode(state: ModeStore, { reference, status }: { reference: Reference, status: AppMode }) {
    debugger;
    const newState: ModeStore = {
      reference,
      status,
    };
    Object.assign(state, newState);
  },
};

export default mutations;
