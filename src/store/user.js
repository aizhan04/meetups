export default {
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isAuth: localStorage.getItem('user') ? true : false,
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
