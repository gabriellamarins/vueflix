import Vue from 'vue'
import App from './App.vue'
import {IconsPlugin} from "bootstrap-vue";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
