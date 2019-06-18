import Vue from 'vue'
import App from './App.vue'

import router from './router'
import axios from 'axios'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
/* font awesome component */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.prototype.$http = axios

library.add(faCoffee,faSearch)
Vue.component('icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
