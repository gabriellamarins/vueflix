<template>

    <v-container class="add_movie">




      <br>
      <br>
      <h2 class="text-center" >Would you like to add a movie to this list?</h2>
      <br>

      <v-text-field type = "text" v-model = "teste">
<!--      <h2><input type = "text" v-model = "teste" style="border: #000088"></h2>-->
      </v-text-field>
<br>

      <div>
          <v-text-field
              v-model="add_movie.id"
              :counter="30"
              label="Movie Id"
              required
          >
          </v-text-field>

          <v-text-field
                v-model="add_movie.title"
                :counter="30"
                label="title"
                required
                @keyup="getResult()"
           >
          </v-text-field>

        <v-autocomplete
          v-model="add_movie"
          :items="getting_movies"
          item-text="title"
          :counter="100"
          label="Title"
          solo
          return-object
          >
        </v-autocomplete>

        <v-img
            v-model="add_movie.poster_path"
            :label="add_movie.poster_path"
            required
        ></v-img>


    <div v-for="genre in genres_api" :key="genre.id">
          <v-checkbox
              v-model="add_movie.genre_ids"
              :value="genre.id"
              :label="genre.name">
          </v-checkbox>
      </div>

            <v-text-field
                v-model="add_movie.overview"
                :counter="300"
                label="Review"
                required
            ></v-text-field>

          <v-rating
              v-model="add_movie.vote_average"
              label="Rate"
              background-color="orange lighten-3"
              color="orange"
              large
              length="10"
          ></v-rating>
          <br>
<!--          event @click to trigger the action of the adding function -->
          <v-btn @click="add_movie_creation"
                 class="mr-4"
                 type="Add"
          >
            submit
          </v-btn>
        </div>
    </v-container>
</template>

<script>
import axios from "axios";
import {EventBus} from "../event-bus";

export default {
  name: "MovieCreation",
  props: {
    // movies2: Array,
    add: Function,
  },
  data() {
    return {
      teste: "",
      teste2: 0,
      errors: null,
      loading: false,
      getting_movies: [],
      genres_api: [],
      add_movie: {
        id: 0,
        title: "",
        genre_ids: [],
        vote_average: 0,
        overview: "",
        description: "",
        original_title: "",
        poster_path: "",
      },
      show: true,
    }
  },
  methods: {
    add_movie_creation() {
      // console.log(this.add_movie)
      EventBus.$emit('add-movie', this.add_movie)
      // this.$emit('add-movie', this.add_movie)
      // this.add(this.add_movie)
    },

    getResult() {
      console.log(this.add_movie)
      this.loading = true;
      this.getting_movies = [];

      if (this.add_movie.title !== "") {
        axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=80d0dd074cbffeb2db4b0123882c7f44&query=""' + this.add_movie.title)
            .then(response => {
              console.log(response.data.results)

              this.getting_movies = response.data.results;
            })
            .catch(function (error) {
              this.error = error;
              console.log(error);
            })
      }
    },

    getGenres() {
      this.genres_api = [];
      axios
          .get('https://api.themoviedb.org/3/genre/movie/list?api_key=80d0dd074cbffeb2db4b0123882c7f44&language=en-US')
          .then(response => {
            console.log(response.data.genres)
            this.genres_api = response.data.genres
          })
          .catch(function (error) {
            console.log(error);
          })
    },
  },

  mounted() {
    this.getGenres()
  },


  watch: {

    // teste: function (val ) {
    //    this.teste = val;
    //    console.log(val)
    //   this.teste2 = val * 100;
    //   // if (val > val2) {
    //   //   alert('valeur changée!')
    //   // }
    //
    // },

    teste: function (val ) {
      this.teste = val;
      console.log(val)
      if (val === 'No' || val === 'no') {
        alert('Are you sure?')
      } if (val === "Yes" || val === "yes") {
        alert ('Go ahead!')
      }
    },
    //
    // teste2: function (val) {
    //   this.teste = val/100;
    //   this.teste2 = val;
    // },
 },
}





</script>


