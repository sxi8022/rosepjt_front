import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'bootstrap/dist/js/bootstrap'
import 'bootstrap'

import firebase from 'firebase'

// import plugins individually - require exports-loader
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/tooltip'

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'

// jquery
global.$ = $

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAUxHgNSqYd6WYhzb0owjslkN-AE27udTY',
  authDomain: 'rosepjt-b8b4b.firebaseapp.com',
  databaseURL: 'https://rosepjt-b8b4b.firebaseio.com',
  projectId: 'rosepjt-b8b4b',
  storageBucket: 'rosepjt-b8b4b.appspot.com',
  messagingSenderId: '257903675918'
}
firebase.initializeApp(config)
