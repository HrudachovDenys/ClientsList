import Vue from 'vue'
import Vuex from 'vuex'

import clientsJson from '@/data/clients.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    client: {},
    clientsList: {}
  },
  mutations: {
    setClientsList(state, result) {
      state.clientsList = result;
    },
    setClient(state, client) {
      state.client = client;
    }
  },
  getters: {
    getClients: state => {
      return state.clientsList;
    },
    getClient: state => {
      return state.client;
    }
  },
  actions: {
    search({ commit }, query) {
      if(query.trim() == ''){
        commit('setClientsList', clientsJson);
        return;
      }

      const result = [];

      for(let client of clientsJson){
        next: for(let key in client){
          for(let field in client[key]){

            let str = client[key][field].toLowerCase()

            if(str.indexOf(query.trim().toLowerCase()) + 1){
              result.push(client);
              break next;
            }
          }
        }
      }

      commit('setClientsList', result);
    },

    selectedClient({ commit }, client){
      commit('setClient', client);
    }
  }
})
