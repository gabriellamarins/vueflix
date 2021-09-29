<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/cat_dir.jpg" style="width: 40%">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1> The Crazy Cat Movie Reviwer </h1>
    <br>
    <h4>Last Rated Movies</h4>
   <div v-for="movie in movies"  :key="movie">
     <div class="mt-4">

       <b-card>
         <b-card-text>
           <h2>  {{movie.id}} - {{movie.title}} </h2>
           Genres: <div v-for="genre in movie.genres" v-bind:key="genre.id">
            {{genre}}
                   </div>
           <br>
           Rating: {{movie.rating}}
         </b-card-text>
       </b-card>
     <br>
    </div>
    <br>
   </div>
    <h3> Total of Movies in this list: {{movies.length}}</h3>
<br>

    <h2>Add a movie to the list</h2>
    <div id="form_add_movie">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
            id="input-group-1"
            label="Title:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
        >
          <b-form-input
              id="input-1"
              v-model="movies.id"
              type=""
              placeholder="ID"
              required
          ></b-form-input>


          <b-form-input
              id="input-1"
              v-model="movies.title"
              type="text"
              placeholder="What is the movie's name?"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
              v-model="movies.genres"
              id="checkboxes-4"
              :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me">Comedy</b-form-checkbox>
            <b-form-checkbox value="that">Drama</b-form-checkbox>
            <b-form-checkbox value="that">Thriller</b-form-checkbox>
            <b-form-checkbox value="that">Horror</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
              id="input-2"
              v-model="movies.review"
              placeholder="Tell us your impressions?"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Food:" label-for="input-3">
          <b-form-input
              id="input-2"
              v-model="movies.description"
              placeholder="Enter name"
              required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
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
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won.",

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
      ],
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true

    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }

  }


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
