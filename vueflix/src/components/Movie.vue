<template>
<div>

  <h1>{{id}} - {{title}}</h1>
  <li>Genres: <div v-for="genre in genres" v-bind:key="genre.id">
    {{genre}} </div></li>
      <li>Rate: {{rating}} </li>
  <br>
     </div>
    </template>

    <script>
    export default {
      name: "Movie",
      props: {
        "id" : Number,
        "title": String,
        "genres": Array,
        "rating": Number,
        "description": String,
        "review": String,

      }
    }
    </script>

    <style scoped>

    </style>