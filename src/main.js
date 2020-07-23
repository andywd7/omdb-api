import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery'
import 'bootstrap'

import 'popper.js'
import 'bootstrap/dist/css/bootstrap.css'
window.$ = window.jQuery = jQuery

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
