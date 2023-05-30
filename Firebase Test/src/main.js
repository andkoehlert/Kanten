import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App) 

app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGcpW5HQjhRoQ7jOZWAWVq9T0BsmSmN64",
  authDomain: "badass-todo-c4965.firebaseapp.com",
  projectId: "badass-todo-c4965",
  storageBucket: "badass-todo-c4965.appspot.com",
  messagingSenderId: "107307060778",
  appId: "1:107307060778:web:8b7fb743fc71b4d4b37d53"
};
initializeApp(firebaseConfig);

// Initialize Firebase
