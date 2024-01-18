<template>
    <form @submit.prevent="searchStore.getMovies(searchMovie)">
        <input type="text" class="search-input" placeholder="Input movie" v-model="searchMovie">
    </form>
</template>

<script setup>
    import { ref } from 'vue';
    import {useSearchStore} from "../stores/SearchStore";
    const searchStore = useSearchStore();
    const searchMovie = ref('');
</script>

<style lang="css">
    .search-input{
        border: 1px solid #e7e7e7;
        width: 100%;
        height: 40px;
        padding: 0 10px;
        margin-bottom: 20px;
        border-radius: 10px;
    }
</style>