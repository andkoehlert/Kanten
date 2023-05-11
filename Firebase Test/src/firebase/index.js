import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDGcpW5HQjhRoQ7jOZWAWVq9T0BsmSmN64',
  authDomain: 'badass-todo-c4965.firebaseapp.com',
  projectId: 'badass-todo-c4965',
  storageBucket: 'badass-todo-c4965.appspot.com',
  messagingSenderId: "107307060778",
  appId: '1:107307060778:web:8b7fb743fc71b4d4b37d53'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);


export{
    db
}