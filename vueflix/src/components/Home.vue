<template>
<div>
  <br>
  <br>
<h1 style="font-family:Roboto; color:cornflowerblue">The most miaawwsome movie reviewer of the internet </h1>
 <br>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
            src="../assets/cat_dir.jpg"
            max-height="50%"
            max-width="100%"
            contain
            height="50%"/>
        <br>
        <div>
          <h2>Filter by Category </h2>
          <v-select id="filter" v-model="selected"
                    :items="['adventure', 'comedy', 'drama', 'thriller', 'action', 'science-fiction']"
                    label="Genres"
          >
            <template v-slot:item="{ item, attrs, on }">
              <v-list-item
                  v-bind="attrs"
                  v-on="on"
              >
                <v-list-item-title
                    :id="attrs['aria-labelledby']"
                    v-text="item"
                ></v-list-item-title>
              </v-list-item>
            </template>
          </v-select>

          <Movie v-for="movie in filter_movies" :key="movie.id"
                 :id="movie.id"
                 :title="movie.title"
                 :genres="movie.genres"
                 :rating="movie.rating"/>

          <h2> There are {{ movies_length }} movies in this list</h2>
        </div>
      </v-col>
    </v-row>


    <router-link :to="{name:'movie_id', params:{id:movies.id}}"></router-link>
    <router-view></router-view>
  </v-container>
<br>
<!--  <MovieCreation @add-movie="add"/>-->

</div>
</template>

<script>


import Movie from "./Movie";
// import MovieCreation from "./MovieCreation";
import {EventBus} from "../event-bus";

export default {
  name: "Home",
  components: {
    Movie,
    // MovieCreation,
  },
  data: function () {
    return {
      selected: "",
      // add_movie: {
      //   title: '',
      //   image: '',
      //   genres: [],
      //   rating: '',
      //   review: '',
      //   description: '',
      //   checkbox: null,
      // },
      movies: [
        {
          id: 1,
          title: "Parasite",
          image: "https://img-4.linternaute.com/uVxdFzpRJ56EW2hYBCls8_5O9zE=/405x540/0156050d180a42b2a0cea23c262949e2/ccmcms-linternaute/175577.jpg",
          genres: ["comedy", "drama", "thriller"],
          rating: 9,
          review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
        },
        {
          id: 2,
          title: "Boyhood",
          genres: ["comedy", "drama", "thriller"],
          rating: 10,
          review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
        },
        {
          id: 3,
          title: "Francis Ha",
          genres: ["comedy", "drama", "thriller"],
          rating: 4,
          review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
        },
      ]
    };
  },

  methods: {
    add: function (newMovie) {

      this.movies.push({
        id: this.movies.length + 1,
        title: newMovie.title,
        genres: newMovie.genres,
        rating: parseInt(newMovie.rating),
        review: newMovie.review,
        description: newMovie.description

      });
    },
  },
  computed: {
    filter_movies: function () {
      if (this.selected === "") {
        return this.movies;
      } else {
        return this.movies.filter(movie => movie.genres.includes(this.selected));
      }
    },
    movies_length: function () {
      return this.filter_movies.length;
    },
  },
  mounted() {
    EventBus.$on('add-movie', (el) => {
      this.add(el)
      console.log(el)
    })
  }
}


</script>

<style lang="scss">

$primary-color: #58079c;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: $primary-color;

  &:hover {
    color: darken($primary-color, 30%);
  }
}

</style>
