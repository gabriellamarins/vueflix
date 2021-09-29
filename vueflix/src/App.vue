<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/cat_dir.jpg" style="width: 40%">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1> The Crazy Cat Movie Reviwer </h1>
    <br>

   <div v-for="movie in movies"  :key="movie" class="list">
<!--    {{movie}}: {{value}}-->
     <h2>  {{movie.id}} - {{movie.title}} </h2>


     Genres:  <div v-for="genre in movie.genres" v-bind:key="genre.id">
         {{genre}}
   </div>
     <br>
     Rating: {{movie.rating}}
     <br>
     <br>
    </div>
    <br>
    <h3> Total of Movies in this list: {{movies.length}}</h3>
<br>
<div>
    <h4>List boostrapVue</h4>
    <b-card img-src="" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>

    <b-card img-src="" img-alt="Card image" img-right>
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
  </div>
  </div>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
//    HelloWorld
  },


  data: function () {
    return {
 //     title: "Bienvenue sur VueFlix !",
      // On peut rajouter nos films ici
      movies: [
          {
      id: 1,
      title: "Parasite",
      genres: ["comedy", "drama", "thriller"],
      rating: 9,
      review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
      description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
    },
        {
          id: 2,
          title: "Boyhood",
          genres: ["comedy", "drama", "thriller"],
          rating: 9,
          review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
        },
        {
          id: 3,
          title: "Francis Ha",
          genres: ["comedy", "drama", "thriller"],
          rating: 9,
          review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
        },
    ]
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
