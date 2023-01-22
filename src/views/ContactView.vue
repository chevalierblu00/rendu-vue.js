<template lang="">
    <div>
        <h1>Contacts</h1>

        <button @click="showModal = true">Ajouter un contact</button>
        <modal name="form-modal" v-if="showModal" @close="showModal = false">
            <FormPerso :contacts="contacts" @close="showModal = false"/>
        </modal>

        <div class="cartes">
            <div v-for="contacts in contacts" :key="contacts.pseudo" class="perso">
                <CartePerso :contacts="contacts"/>
            </div>
        </div>

    </div>
</template>

<script>

import CartePerso from '@/components/CartePerso.vue';

import FormPerso from '@/components/FormPerso.vue';

export default {
    name: 'ContactView',
    
    components:{
        FormPerso,
        CartePerso,
    },
    
    computed: {
        contacts() {
            return this.$store.state.contacts
        }
    },

    data() {
        return {
            showModal: false
        }
    },
}

</script>

<style scoped>

    .perso {
        list-style: none;
        padding: 10px;
        margin: 10px 0;
        background-color: #f5f5f5;
        border-radius: 5px;
        box-shadow: 0px 0px 5px #ccc;
        margin-left: 5%;
        margin-right: 5%;
    }

    .cartes {
        height: 200px;
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
    }

    .add-btn {
        background-color: #42b983;
        border: none;
        border-radius: 5px;
        padding: 10px;
        color: white;
        font-weight: bold;
        margin-bottom: 20px;
    }
</style>
