export default {
  state: {
    users: []
  },
  actions: {
    async fetchUsers(context, limit = 10) {
      const APP_ID = '5f9fb7689a6f7046d7463eb7';
      let response = await fetch(`https://dummyapi.io/data/api/user?limit=${limit}`, {
        headers: {
          'app-id': APP_ID
        }
      });
      let users = await response.json();
      context.commit('updateUsers', users.data)
    }
  },
  mutations: {
    updateUsers (state, users) {
      state.users = users
    }
  },
  getters: {
    allUsers (state) {
      return state.users
    }
  }
}