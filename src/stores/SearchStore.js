import { defineStore } from "pinia";

const url = "https:api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query=";

export const useSearchStore = defineStore("searchStore", {
    state: () => ({
        movies: [],
    }),
    actions: {
        async getMovies(search){
            const res = await fetch(`${url}${search}`);
            const data = await res.json();
            this.movies = data.results;
        },
    },
})