import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import user from './user';
import quora from './quora';
import mode from './mode';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {},
  modules: {
    user,
    quora,
    mode,
  },
};

export default new Vuex.Store<RootState>(store);
