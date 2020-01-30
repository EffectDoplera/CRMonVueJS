import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'


import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.component('Loader', Loader)


firebase.initializeApp({
  apiKey: "AIzaSyBTuK4w21aKJAtAUCKJ1P1YEyZ0RSjX330",
  authDomain: "vue-crm-af610.firebaseapp.com",
  databaseURL: "https://vue-crm-af610.firebaseio.com",
  projectId: "vue-crm-af610",
  storageBucket: "vue-crm-af610.appspot.com",
  messagingSenderId: "701603142264",
  appId: "1:701603142264:web:af0637239304346f0b2b8d",
  measurementId: "G-87XZ27YGJT"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})



