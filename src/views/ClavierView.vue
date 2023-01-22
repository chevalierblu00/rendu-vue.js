<template>
  <div>
    <div id="ecran">{{ numerocomposer }}</div>
    <div id="contact-name">{{ contactName }}</div>
    <div id="clavier">
      <button v-for="(chiffre, index) in chiffres" :key="index" @click="ajoutChiffre(chiffre)">{{ chiffre }}</button>
      <button @click="ajoutHistorique">appeler</button>
      <button @click="supprimer">supprimer</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'ClavierView',
  computed: {
    ...mapState(['contactName', 'numerocomposer']),
  },
  props: [
    'contacts'
  ],
  methods: {
    ...mapActions(['checkContact']),
    ...mapMutations(['supprimerChiffre']),
    ajoutChiffre(chiffre) {
      if (this.numerocomposer.length === this.maxLength) {
        return
      }
      this.$store.commit('setNumerocomposer', this.numerocomposer + chiffre);
      if (this.numerocomposer.length === this.maxLength) {
        this.checkContact(this.numerocomposer)
      }
    },

    supprimer() {
      this.supprimerChiffre(this.numerocomposer.slice(0, -1));
    },

    ajoutHistorique() {
    let date = new Date();
    let appelle = {
        numero: this.numerocomposer,
        nom: this.contactName,
        date: date.toLocaleString()
    }
    this.$store.dispatch('ajoutHistorique', appelle)
  }
  },
  data() {
    return {
      chiffres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      maxLength: 10
    }
  }
}
</script>

<style scoped>
  #ecran {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    font-weight: bold;
    color: #333;
  }

  #contact-name {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    color: #333;
  }

  #clavier {
    margin-top: 1rem;
    width: 100%;
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  button {
    margin: 1rem;
    width: 30%;
    height: 20%;
    background-color: #fff;
    border: none;
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:active {
    background-color: #d9d9d9;
  }
</style>





