<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="data:image/jpeg;base64,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"
          transition="scale-transition"
          width="40"
        />
              <v-btn
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
                target="_blank"
                text>
                <span class="mr-2">THE CRAZY CAT</span>


                <v-img
                alt="Vuetify Name"
                class="shrink mt-1 hidden-sm-and-down"
                contain
                min-width="20"
                src="https://img.icons8.com/ios-filled/50/ffffff/clapperboard.png"
                width="20"/>
                </v-btn>
      </div>
    </v-app-bar>

    <v-main>
    </v-main>

    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
              src="./assets/cat_dir.jpg"
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

            <div v-for="movie in  filtermovies" :key="movie.id">
              <h1>{{ movie.id }} - {{ movie.title }} </h1>
              <h3>Genres: <div v-for="genre in movie.genres" v-bind:key="genre.id">
                {{genre}}</div></h3>
<!--              <h3>Rate : {{ movie.rating }}</h3>-->
               <v-rating
                  v-model="movie.rating"
                  background-color="orange lighten-3"
                  color="orange"
                  large
              ></v-rating>
            </div>
            <br>
    <h2> There are {{moviesLength}} movies in this list</h2>

<!--            <Movie v-for="movie in movies" v-bind:key="movie.id"-->
    <Movie />
<!--            :id="movie.id"-->
<!--            :title="movie.title"-->
<!--            :genres="movie.genres"-->
<!--            :rating="movie.rating"/>-->
          </div>
        </v-col>
      </v-row>
    </v-container>
    <br>

    <MovieCreator/>

    <v-container>
      <h2 class="text-center">Would you like to add a movie to this list?</h2>
    <validation-observer
        ref="observer"
        v-slot="{ invalid }"
    >
      <form @submit.prevent="submit">
        <validation-provider
            v-slot="{ errors }"
            name="Name"
            rules="required"
        >
          <v-text-field
              v-model="add_movie.title"
              :counter="30"
              :error-messages="errors"
              label="Title"
              required
          >
          </v-text-field>
        </validation-provider>

          <v-checkbox
              v-model="add_movie.genres"
              value="Comedy"
              label="Comedy"
              type="checkbox"
          ></v-checkbox>
          <v-checkbox
              v-model="add_movie.genres"
              value="Drama"
              label="Drama"
              type="checkbox"

          ></v-checkbox>
          <v-checkbox
              v-model="add_movie.genres"
              value="Thriller"
              label="Thriller"
              type="checkbox"

          ></v-checkbox>
          <v-checkbox
            v-model="add_movie.genres"
            value="Adventure"
            label="Adventure"
            type="checkbox"

        ></v-checkbox>
          <v-checkbox
            v-model="add_movie.genres"
            value="Action"
            label="Action"
            type="checkbox"

        ></v-checkbox>
          <v-checkbox
            v-model="add_movie.genres"
            value="Science-fiction"
            label="Science-fiction"
            type="checkbox"

        ></v-checkbox>
          <v-checkbox
            v-model="add_movie.genres"
            value="Fantasy"
            label="Fantasy"
            type="checkbox"

        ></v-checkbox>

        <validation-provider
            v-slot="{ errors }"
            name="Name"
            rules="required"
        >
          <v-text-field
              v-model="add_movie.review"
              :counter="300"
              :error-messages="errors"
              label="Your Review"
              required
          ></v-text-field>
        </validation-provider>

        <validation-provider
            v-slot="{ errors }"
            name="Name"
            rules="required"
        >
          <v-text-field
              v-model="add_movie.description"
              :counter="300"
              :error-messages="errors"
              label="Description"
              required
          ></v-text-field>
        </validation-provider>

        <v-rating
            v-model="add_movie.rating"
            label="Rate"
            background-color="orange lighten-3"
            color="orange"
            large
        ></v-rating>
        <br>
        <v-btn @click="add"
            class="mr-4"
            type="Add"
            :disabled="invalid"
        >
          submit
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </form>
    </validation-observer>


    </v-container>

     </v-app>
</template>

<script>
import Movie from './components/Movie.vue'
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
// import MovieCreator from "./components/MovieCreator";

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
})

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})



export default {
  name: 'App',
  components: {
    Movie,
    // MovieCreator,
    ValidationProvider,
    ValidationObserver,
  },
  data: function () {
    return {
      selected: "",
      search: '',
      add_movie: {
      // id: 0,
      title: '',
      genres: [],
      rating: '',
      review: '',
      description: '',
      checkbox: null,
    },

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

  methods: {
    add: function () {

      this.movies.push({
        id: this.movies.length + 1,
        title: this.add_movie.title,
        genres: this.add_movie.genres,
        rating: this.add_movie.rating,
        review: this.add_movie.review,
        description: this.add_movie.description
      });
    },
    submit () {
      this.$refs.observer.validate()
    },
    clear () {
      this.title = ''
      this.review = ''
      this.description = ''
      this.checkbox = null
      this.rating = null
      this.$refs.observer.reset()
    },
  },
  computed: {
    filtermovies: function () {
      if (this.selected === "") {
        return this.movies;
      } else {
        return this.movies.filter(movie => movie.genres.includes(this.selected));
      }
    },
    moviesLength: function () {
      return this.filtermovies.length;
    },
  }
}

</script>

<style lang="scss" >

$primary-color: #58079c;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  color: $primary-color;
  &:hover {
    color: darken($primary-color, 30%);
  }
}

</style>