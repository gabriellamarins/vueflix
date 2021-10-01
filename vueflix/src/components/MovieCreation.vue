<template>

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
          <v-btn @click="add()"
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

</template>

<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'


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
  name: "MovieCreator",
  data() {
    return {
      add_movie: {
        // id: "",
        title: "",
        genres: [],
        rating: 0,
        review: "",
        description: "",
        checkbox: "",
      },
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    add: function () {

      this.movies2.push({
        id: this.movies2.length + 1,
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

  props: {
    movies2: Array,
  },
}

</script>
