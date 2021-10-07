<template>
<div>

  <h1>{{movie.id}} - {{movie.title}}</h1>
  <img :src="movie.image" alt="x">
  <h4>Genre:</h4>
   <div v-for="genre in movie.genres" v-bind:key="genre.id" >
    {{genre}} </div>
  <h4>Rate: {{movie.rating}}</h4>
  <v-rating
      v-model="movie.rating"
      background-color="orange lighten-3"
      color="orange"
      large
  ></v-rating>
  Synopses: {{movie.description}}
<!--  <router-link :to="{name:'movie_id', params:{id:movie.id, movie:movie}}"></router-link>-->
  <br>
     </div>
    </template>

    <script>
    export default {
      name: "Movie",
      props: {
       movie: Object,
        // id : Number,
        // title: {
        //   String,
        //   // required:true
        // },
        // image: Image,
        // genres: Array,
        // rating: Number,
        // description: String,
        // review: String,
      },
    }
    </script>

    <style scoped>

    </style>