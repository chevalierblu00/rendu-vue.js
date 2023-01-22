<template>
    <div>
        <h1>Historique</h1>
        <li v-for="appelle in appelles" :key="appelle.nom" >
            <ul>tu as telephoner a {{ appelle.nom }} au {{ appelle.numero }} <br> le {{ appelle.date }}</ul>
        </li>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'HistoriqueView',

    computed: {
        ...mapState(['appelles']),
    }
    
}
</script>

<style scoped>  
li {
    list-style: none;
    padding: 10px;
    margin: 10px 0;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #ccc;
    margin-left: 35%;
    margin-right: 35%;

}

li ul {
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

</style>