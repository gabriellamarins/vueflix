<template>
<div>
  <br>
  <br>
<h1 style="font-family:Roboto,sans-serif; color:cornflowerblue">The most miaawwsome movie reviewer of the internet </h1>

  <v-container class="cont_filter">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img class="cat"
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
          <div v-for="movie in filter_movies" :key="movie.id">
            <router-link :to="{name:'movie_id', params:{id:movie.id, movie:movie}}" style="text-decoration: none">
              <h1>{{movie.id}} - {{movie.title}}</h1>
            </router-link>
            <img :src="movie.image" alt="x" style="width: 50%" height="50%">
            <h4>Genre:</h4>
            <div v-for="genre in movie.genres" v-bind:key="genre.id">
              {{genre}} </div>
            <h4>Rate: {{movie.rating}}</h4>
            <v-rating
                v-model="movie.rating"
                background-color="orange lighten-3"
                color="orange"
                large
            ></v-rating>
          </div>
          <h2> There are {{ movies_length }} movies in this list</h2>
        </div>
      </v-col>
    </v-row>

    <router-view></router-view>

  </v-container>
<br>
<!--  <MovieCreation @add-movie="add"/>-->

</div>
</template>

<script>
import {EventBus} from "../event-bus";

export default {
  name: "Home",
  components: {
  },
  data: function () {
    return {
      selected: "",
      movies: [
        {
          id: 1,
          title: "Parasite",
          image: "https://www.grignoux.be/upload/grignoux/films/844/parasite_oscarrr.jpg",
          genres: ["comedy", "drama", "thriller"],
          rating: 9,
          review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
        },
        {
          id: 2,
          title: "Boyhood",
          image: "https://retourverslecinema.com/wp-content/uploads/2014/07/boyhood.jpg",
          genres: ["comedy", "drama", "thriller"],
          rating: 10,
          review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
        },
        {
          id: 3,
          title: "Francis Ha",
          image: "https://thecinephiliac.files.wordpress.com/2014/11/frances-ha-poster.jpg",
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

.cat {
  margin-top: 0;
  margin-bottom: 0;
}

.cont_filter {
  margin-top: 0;
}


.add_movie {
  color: $primary-color;
}



</style>
