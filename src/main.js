import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA7TNdX2rbAX97KyfthS6cLAfjJzG93W2c",
  authDomain: "portafolio-ab9ce.firebaseapp.com",
  projectId: "portafolio-ab9ce",
  storageBucket: "portafolio-ab9ce.appspot.com",
  messagingSenderId: "669529064156",
  appId: "1:669529064156:web:f8faedd416a72f83f36a19"
};

firebase.initializeApp(firebaseConfig);

//Bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

//Fontawesome
import {library} from '@fortawesome/fontawesome-svg-core'
import { faMobileAlt, faChartLine} from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faSass, faJsSquare, faVuejs, faBootstrap, faGitAlt} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHtml5, faCss3Alt, faSass, faJsSquare, faVuejs, faBootstrap, faGitAlt, faMobileAlt, faChartLine)

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

