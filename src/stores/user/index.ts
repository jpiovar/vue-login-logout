import { Module } from 'vuex';
import { UserStore } from './user.types';
import RootState from '../types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { USER_PROFILE, USER_STATUS_OUT } from './constants';

const namespaced = true;

const state: UserStore = {
  userProfile: USER_PROFILE,
  userStatus: USER_STATUS_OUT,
};

const user: Module<UserStore, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default user;
