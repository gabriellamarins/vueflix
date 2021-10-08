<template>
  <div id="home">
    <v-app>
      <h1> Liste de films préférés</h1>
      <p><strong> Nombre de films dans la liste:</strong> {{ films.length }}</p>
      <p><strong> Nombre de films sélectionnés:</strong> {{ nombreFilm }}</p>

      <form id="select" method="post">
        <div>
          <label for="typeFilm">Sélectionner un type de film: </label>

          <select name="typeFilm"
                  id="typeFilm"
                  v-model="selectTypeFilm"
                  required
          >
            <option v-for="genre in ApiGenres" :key="genre.id" :value="genre.id">
              {{ genre.name }}
            </option>
          </select>

        </div>
      </form>

      <div v-for="film in filteredFilms " :key="film.id" class="liste">
        <h2> Titre: {{ film.title }}</h2>

        <p><strong> Rating: </strong></p>
        <v-rating
            v-model="film.rating"
            background-color="grey"
            color="#DC9F50"
            length="10"
            size="57"
            value="10"
            hover
        ></v-rating>
        <p><strong>Genre:</strong></p>
        <div id="genres" v-for="genre in film.genres" v-bind:key="genre.id" :value="genre.id">
          <p>{{ filmGenre(genre).name }} </p>
        </div>
        <br>

        <router-link :to="{name: 'Movie', params: { id: film.id, film: film, filmGenre:filmGenre},}">
          <button id="btn" type="button">Info film</button>
        </router-link>
        <br>

      </div>


    </v-app>
  </div>

</template>

<script>

// import {EventBus} from "../plugins/event-bus";

import axios from "axios";

export default {

  name: 'Home',

  components: {},

  props: {
    movies: Array,
    // genres:Array,
  },

  data: function () {

    return {
      // errors: [],
      // title: "Bienvenue sur VueFlix !",
      // On peut rajouter nos films ici
      loading: false,
      ApiGenres: [],
      films: [
        {
          id: 1,
          title: "Parasite",
          genres: [35, 18, 53],
          rating: 9,
          review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
        },
        {
          id: 2,
          title: "Baby Boss 2",
          genres: [16, 35, 12, 10751],
          rating: 7.8,
          review: "Une suite très réussie , de l'humour de l'action du rythme bref on ne s'ennuie pas avec une petite touche de Philosophie de vie pour les plus grands , j'y suis allé avec mes filles tout le monde a apprécié",
          description: "Tim Templeton et son petit frère Ted, le fameux Baby Boss sont devenus adultes, ils vivent chacun de leur côté, Tim est devenu un père de famille rangé et Ted est à la tête d’un important fond spéculatif. Mais l’arrivée d’un nouveau Baby Boss, avec une toute nouvelle approche et une stratégie innovante, est sur le point de rassembler les frères ennemis… et inspirer un nouveau modèle dans les affaires familiales. "
        },
        {
          id: 3,
          title: "Infinite",
          genres: [16, 35, 12, 10751],
          rating: 7.4,
          review: "Film de science fiction de qualité, plans léchés, superbe photographie, on ne s'ennuie pas, trois étoiles.",
          description: "Hanté par des souvenirs d'endroits inconnus, Evan McCauley rejoint un groupe secret de guerriers ressuscités : les Infinis. Il part en quête de réponses dans ses souvenirs qui sont la clé pour empêcher la destruction de l'humanité. "

        },
        {
          id: 4,
          title: "Reminiscence",
          genres: [878, 53, 9648, 10749],
          rating: 7.1,
          review: "la showrunneuse de \"Westworld\" signe un film bien dans la lignée de ce qu'elle à fait avec son conjoint Jonathan Nolan à la télévision jusqu'à présent. Le temps et ses différents espaces dans lesquels nous pouvons nous enfuir. J'avais peur qu'il n'y ai pas d'intrigue à la vision des bandes annonces mais non ! tout y est ! un vrai bon film pour qui aime le genre ! un petit bémol sur les deux acteurs principaux qui font le job mais un casting haut de gamme aurait fait de ce film un classique. On retrouve quand même avec grand plaisir Thandy newton et Elsa Sarafyan avant la saison 4 de Westworld.",
          description: "Dans un futur proche, Miami a été submergé par les flots, suite aux effets du changement climatique. Un enquêteur privé, Nick Bannister, est engagé par des clients afin de retrouver leurs précieux souvenirs. Au cours de sa dernière affaire, il tombe éperdument amoureux de sa cliente. À sa disparition, le détective est désemparé et se lance à sa recherche. Il se retrouve alors perdu dans une boucle temporelle et découvre des aspects de sa personnalité qu'il ne connaissait pas auparavant. "

        },
      ],
      selectTypeFilm: '',

      // genres: ['action', 'comedy', 'animation', 'romance', 'drama', 'thriller', 'science fiction', 'mystery', 'adventure', 'family', 'music', 'horror', 'crime','documentary','fantasy', 'history', 'TV movie', 'war', 'western'],
      ratings: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      show: true,
    }
  },

  methods: {

    getGenres() {
      this.ApiGenres = [];
      axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=80d0dd074cbffeb2db4b0123882c7f44&language=en-US")
          .then(response => {
            // console.log(response.data.genres)
            this.ApiGenres = response.data.genres

          })
          .catch(error => {
            console.log(error);
          })

    },

    filmGenre(genre) {
      return this.ApiGenres.find(item => item.id === genre) ?? {genre: 'inconnus'} //'??' opérateur de coalescence des nulls renvoie l'opérande de droite quand celle de gauche vaut null ou undefined et qui renvoie son opérande de gauche sinon.

    },

  },


  computed: {

    filteredFilms() {
      if (this.selectTypeFilm === "") {
        return this.films;

      } else {
        return this.films.filter(film =>
            film.genres.includes(this.selectTypeFilm)); //La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.

      }


    },

    nombreFilm: function () {
      return this.filteredFilms.length
    },

  },

  watch: {
    nombreFilm: function (nouvelle_val, ancienne_val) {
      if (nouvelle_val> ancienne_val) {
        alert('valeur changée!')
      }
    },


  },
  beforeCreate() {
    console.log('Je ne suis pas encore  créé')
  },
  created() {
    console.log('Je suis créé !')
  },
  beforeMount() {
    console.log('Je vais bientôt être monté sur le DOM!')
  },
  // mounted() { console.log('Je suis monté sur le DOM!') },
  beforeDestroy() {
    console.log('Je suis sur le point de disparaître du DOM !')
  },
  destroyed() {
    console.log('Je suis supprimé')
  },


  mounted() {
    if (this.movies !== undefined) {
      this.films = this.movies

      // EventBus.$on('genres',function (data){
      //   this.getGenres(data);
      //   console.log(data)
      // })
    }
    this.getGenres()

  }

}


</script>