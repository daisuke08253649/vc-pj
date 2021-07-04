import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'


Vue.config.productionTip = false

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBz5Woe-tWurj58_qyyJnkI-_DnDhaUhRA",
    authDomain: "vc-pj-17ac8.firebaseapp.com",
    projectId: "vc-pj-17ac8",
    storageBucket: "vc-pj-17ac8.appspot.com",
    messagingSenderId: "528186125702",
    appId: "1:528186125702:web:79fe08eeb93acb25581007"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

