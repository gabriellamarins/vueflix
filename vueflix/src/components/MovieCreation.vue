<template>

    <v-container class="add_movie">
      <br>
      <br>
      <h2 class="text-center" >Would you like to add a movie to this list?</h2>
      <br>
      <div>
          <v-text-field
              v-model="add_movie.id"
              :counter="30"
              label="Movie Id"
              required
              @keyup="getResult"
          >
          </v-text-field>


            <v-text-field
                v-model="add_movie.title"
                :counter="30"
                label="Title"
                required

            >
            </v-text-field>

        <v-autocomplete


          v-model="add_movie"
          :items="gettingmovies"
          item-text="title"
          :counter="30"
          label="Title"

          solo
          return-object
          >
        </v-autocomplete>


          <v-checkbox v-for="genre in genres" :key="genre"
              v-model="add_movie.genres"
              :value="genre"
              :label="genre"
              type="checkbox"
          ></v-checkbox>


            <v-text-field
                v-model="add_movie.review"
                :counter="300"
                label="Your Review"
                required
            ></v-text-field>


            <v-text-field
                v-model="add_movie.description"
                :counter="300"
                label="Description"
                required
            ></v-text-field>

          <v-rating
              v-model="add_movie.rating"
              label="Rate"
              background-color="orange lighten-3"
              color="orange"
              large
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
  data() {
    return {
      genres: [
          'Comedy', 'Drama', 'Thriller', 'Adventure', 'Action', 'Science-fiction', 'Fantasy'
      ],
      add_movie: {
        id: 0,
        title: "",
        genres: [],
        rating: 0,
        review: "",
        description: "",

        original_title: "",
        gettingmovies: [],

      },


    }
  },
  methods: {
    add_movie_creation() {
      // console.log(this.add_movie)
      EventBus.$emit('add-movie', this.add_movie)
      // this.$emit('add-movie', this.add_movie)
      // this.add(this.add_movie)
    },

    getResult () {
console.log(this.add_movie)
      this.gettingmovies = [];

      if (this.add_movie.title !== "") {
      axios
      .get('https://api.themoviedb.org/3/search/movie?api_key=80d0dd074cbffeb2db4b0123882c7f44&query=' + this.add_movie.title)
      .then (response => {
        console.log(response.data.results)

        this.gettingmovies = response.data.results;
      })
          .catch(function (error) {
            this.error = error;
          })
    }
  },

  // props: {
  //   // movies2: Array,
  //   add: Function,
  //
  // },
}}

</script>


