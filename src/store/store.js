import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    apiData: [],
    height: []
  },
  mutations: {
    storeData(state, payload) {
      return state.apiData = payload;
    },
    storedHeight(state, payload) {
      return state.height = payload
    }
  },
  actions: {
    storeData(context, payload) {
      context.commit('storeData', payload)
    },
    storeHeight(context, payload) {
      context.commit('storeHeight', payload)
    }
  }
})
console.log('store', store)
export default store;