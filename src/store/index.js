import { createStore } from 'vuex';
import userModule from './user';
import newUserModule from './newUser';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user: userModule,
    newUser: newUserModule,
  },
});
