import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count :0,
      loading:true,
    }
  },
  getters: {
  },
  mutations: {
    updateStore(state,payload){
      state.count +=payload
    }
  },
  actions: {
  },
})



export  default store