import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChkTF3zkERyMyemxgfgVs3p-JD_rsTKBs",
  authDomain: "vue-calendario-prueba.firebaseapp.com",
  databaseURL: "https://vue-calendario-prueba.firebaseio.com",
  projectId: "vue-calendario-prueba",
  storageBucket: "vue-calendario-prueba.appspot.com",
  messagingSenderId: "1004799299379",
  appId: "1:1004799299379:web:721ca8fb71a47afdecb846"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
