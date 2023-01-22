<template lang="">
    <h2>nom: {{ contacts.nom }}</h2>
    <p>numero: {{ contacts.numero }}</p>
    <button @click="ajouthistorique">appelle</button>
</template>

<script>
export default {
    name:'CartePerso',
    
    props:[
        'contacts'
    ],

    methods:{
        ajouthistorique() {
            let date = new Date();
            let appelle = {nom: this.contacts.nom , numero:this.contacts.numero, date: date.toLocaleString()}
            this.$store.dispatch('ajouthistorique', appelle)
      }
    }
}
</script>
    
<style scoped>
    
</style>