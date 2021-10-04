<template>
<div>

  <h1>{{id}} - {{title}}</h1>
  {{image}}
  <h4>Genre:</h4>
   <div v-for="genre in genres" v-bind:key="genre.id">
    {{genre}} </div>
  <h4>Rate: {{rating}}</h4>
  <v-rating
      v-model="rating"
      background-color="orange lighten-3"
      color="orange"
      large
  ></v-rating>
  <br>
     </div>
    </template>

    <script>
    export default {
      name: "Movie",
      props: {
        id : Number,
        title: {
          String,
          // required:true
        },
        image: Image,
        genres: Array,
        rating: Number,
        description: String,
        review: String,

      }
    }
    </script>

    <style scoped>

    </style>