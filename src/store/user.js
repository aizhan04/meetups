export default {
  state: {
    user: null,
    isAuth: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.isAuth = true
    },
    resetUser(state) {
      state.user = null
      state.isAuth = false
    },
  },
  actions: {},
  getters: {},
}
