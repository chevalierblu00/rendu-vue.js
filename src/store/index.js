import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
          nom: 'maman',
          numero: 2363621132
      },          
      {
          nom: 'papa',
          numero: 2744573658
      },
      {
          nom: 'frere',
          numero: 4745377343
      }
      ],
      appelles: [],
      contactName: '',
      numerocomposer: ''
  },
  getters: {
  },
  mutations: {
    ajoutPerso(state, contacts) {
      state.contacts.push(contacts)
    },

    increment(state) {
      state.compteur++
    },

    ajouthistorique(state, appelle){
      state.appelles.push(appelle)
    },

    ajoutHistorique(state, {numero, nom, date}) {
      state.appelles.push({numero, nom, date});
  },

    setContactName(state, nom) {
      state.contactName = nom
    },

    setNumerocomposer(state, numerocomposer) {
      state.numerocomposer = numerocomposer
    },

    supprimerChiffre(state) {
      state.numerocomposer = state.numerocomposer.slice(0, -1);
    },
  },
  actions: {
    ajouthistorique({commit}, appelle,) {
      // Commit la mutation pour ajouter le call à l'état calls
      commit('ajouthistorique', appelle,)
    },

    ajoutHistorique({ commit }, { numero, nom, date }) {
      commit('ajoutHistorique', { numero, nom, date });
  },

    checkContact({ commit }, numerocomposer) {
      let contact = this.state.contacts.find(contacts => parseInt(contacts.numero) === parseInt(numerocomposer))
      if (contact) {
        commit('setContactName', contact.nom)
      } else {
        commit('setContactName', 'innconu')
      }
    }
  },
  modules: {
  }
})