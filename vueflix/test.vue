<template>
<div id="movieCreation">
    <div class="ajout_film">
    <h1>Ajoutez un film</h1>


<div id="app_form">

    <!--        <div v-if="errors.length">-->
    <!--          <p>Corrigez les erreurs suivantes(s):</p>-->
    <!--          <ul>-->
    <!--            <li v-for="error in errors" :key="error">{{ error }}</li>-->
    <!--          </ul>-->
    <!--        </div>-->
    <div>
        <label for="title">Titre: </label>
        <input type="text" id="title" name="title" v-model="newFilm.title" @keypress="getResult()" required>
    </div>
    <v-autocomplete

        v-model="newFilm"
    :items="ApiFilms"
     item-text="title"
     return-object
></v-autocomplete>
<div>
    <label for="genres"> Genres: <br>'Appuyez ctrl pour choisir plusieurs catégories' </label>

    <select name="genres"
            id="genres"
            v-model="newFilm.genre_ids"
            required
            multiple>

        <option v-for="genre in ApiGenres" :key="genre.id" :value="genre.id">
        {{ genre.name }}

    </option>

</select>
</div>

<div>
    <label for="rating"> Rating: </label>
    <select name="rating"
            id="rating"
            v-model="newFilm.vote_average"
            required
    >
        <option v-for="etoiles in ratings" :key="etoiles">
        {{ etoiles }}
    </option>

</select>
</div>

<div>
    <label for="review"> Review: </label>
    <input type="text" id="review" name="review" v-model="newFilm.overview" required>
</div>


<button id="btn" type="submit" @click="ajoutFilm">Ajoutez</button>

</div>

</div>


</div>
</template>

<script>


    import {EventBus} from "../plugins/event-bus";
    import axios from "axios";

    export default {

    name: "MovieCreation",

    props: {

    addNewFilm: {
    type:
    Function,
},

},


    data: function () {
    return {
    errors: null,
    loading: false,
    ApiFilms: [],
    ApiGenres: [],
    newFilm: {
    id: null,
    title: "",
    genre_ids: [],
    vote_average: null,
    overview: ""
},
    // genres: ['action', 'comédie', 'animation', 'romance', 'drame', 'thriller', 'science-fiction', 'mystère', 'aventure', 'familial'],
    ratings: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

    show: true,
}

},

    methods: {


    getResult() {
    if (this.newFilm.title !== "") {
    this.loading = true;
    this.ApiFilms = [];

    axios.get("https://api.themoviedb.org/3/search/movie?api_key=80d0dd074cbffeb2db4b0123882c7f44&query=" + this.newFilm.title)
    .then(response => {
    // console.log(response.data.results)
    this.ApiFilms = response.data.results
})
    .catch(error => {
    console.log(error);
})

}
},

    getGenres() {
    this.ApiGenres = [];
    axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=80d0dd074cbffeb2db4b0123882c7f44&language=en-US")
    .then(response => {
    console.log(response.data.genres)
    this.ApiGenres = response.data.genres

})
    .catch(error => {
    console.log(error);
})

},



    ajoutFilm() {
    // console.log('emit');
    return EventBus.$emit('ajout-film', this.newFilm)
},

},
    mounted() {
    this.getGenres()
},



}


</script>