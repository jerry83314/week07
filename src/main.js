import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import $ from 'jquery'
import App from './App.vue'
import router from './router'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

window.$ = $

Vue.use(Loading)

Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
