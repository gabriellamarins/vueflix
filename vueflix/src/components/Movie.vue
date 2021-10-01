<template>
<div>

  <h1>{{id}} {{title}}</h1>
   <div v-for="genre in genres" v-bind:key="genre.id">
    {{genre}} </div>
    {{rating}}

  <br>
     </div>
    </template>

    <script>
    export default {
      name: "Movie",
      props: {
        "id" : Number,
        "title": {
          String,
          // required:true
        },
        "genres": Array,
        "rating": String,
        "description": String,
        "review": String,

      }
    }
    </script>

    <style scoped>

    </style>