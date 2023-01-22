<template lang="">
    <div>
        
        <form @submit.prevent="ajoutPerso">
            <input type="text" placeholder="Nom..." v-model="formPerso.nom">
            <input type="number" placeholder="Numero..." v-model="formPerso.numero">
            <button type="submit">Ajouter</button>
        </form>

    </div>
</template>

<script>
export default {
    name: 'FormPerso',

    props: [
        'contacts'
    ],
    
    data() {
        return {
            error: false,

            formPerso: {
                nom: '',
                numero: null
            },
            maxLength: 10,
        }
    },

    methods: {
        ajoutPerso() {
            if(this.formPerso.nom == "" || this.formPerso.numero == null) return

            if(this.formPerso.numero.length === this.maxLength) {
                this.error = true
                return
            }

            if(this.contacts.find(contact => contact.nom == this.formPerso.nom)) return
            
            this.$store.commit('ajoutPerso', this.formPerso)

            this.formPerso = {
                nom: "",
                numero: null
            }
        }
    }

}
</script>

<style scoped>
    form {
        background-color: #c4c4c4;
        width: 50vw;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        border-radius: 10px;
    }

    button {
        padding: 10px;
        border-radius: 10px;
        border: none;
        background-color: #2c3e50;
        color: white;
        font-weight: bold;
    }
    
    input {
        padding: 10px;
        border-radius: 10px;
        border: none;
    }
</style>