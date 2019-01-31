import { Module } from 'vuex';
import { QuoraStore, QuoraItem } from './quora.types';
import { RootState } from '../types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { QUORA_ITEM, QUORA_STATUS_INITIAL } from './constants';

const namespaced = true;

const quoraItems: QuoraItem[] = [];

const state: QuoraStore = {
  quoraItems,
  quoraStatus: QUORA_STATUS_INITIAL,
};

const quora: Module<QuoraStore, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default quora;
