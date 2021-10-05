import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from "vue-router";
import Movie from "./components/Movie";
import MovieCreation from "./components/MovieCreation";
import Home from "./components/Home";
import NavBar from "./components/NavBar";


Vue.use(VueRouter)

Vue.config.productionTip = false



const routes = [ //aqui entram todas as rotas
  { path: '/', name:'home',component: Home },
  { path: '/movie', name:'Movie',component: Movie },
  { path: '/admin', name: 'MovieCreation', component: MovieCreation},
  { path: '/navbar', name: 'navbar', component: NavBar},
]

const router = new VueRouter({
  routes // raccourci pour `routes: routes`
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')




