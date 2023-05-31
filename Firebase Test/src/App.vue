<template>
  <div>
 <!-- 

<nav class="nav">
        <RouterLink to="/">/Home</RouterLink>
        <RouterLink to="/admin">/Admin</RouterLink>
        <RouterLink to="/about">/About</RouterLink>
        <RouterLink to="/voluenteer">/Voluenteer</RouterLink>
        <RouterLink to="/merch">/Merch</RouterLink>
        <RouterLink to="/gallery">/Gallery</RouterLink>
        <br>
        <RouterLink to="/event">/Event</RouterLink>
        <RouterLink to="/xmassive">/Xmassive</RouterLink>
        <RouterLink to="/manaclub">/Manaclub</RouterLink>
        <RouterLink to="/vertex">/vertex</RouterLink>
        <RouterLink to="/hoodie">/hoodie</RouterLink>
        <RouterLink to="/signin">/hoodie</RouterLink>


      </nav>


 --> 
  
<RouterView-view />
      <div class="body-content">
        <RouterView />
      </div>

    </div>



<!-- 
  <div class="badass-todo">

<div class="title has-text-centered">
Badass todo
</div>

<form @submit.prevent="addTodo">
  
  
  
  
  
  <div class="field is-grouped mb-5 ">
  <p class="control is-expanded">
    <input 
    v-model="newTodoContent"
    class="input" 
    type="text" 
    placeholder="Add a todo">
  
    <input 
    v-model="newTodoTitle"
    class="input" 
    type="text" 
    placeholder="Add a Todo Title">
  
    <input 
    v-model="newTodoArtist"
    class="input" 
    type="text" 
    placeholder="Artist">
  
    <input 
    v-model="newTodoTime"
    class="input" 
    type="text" 
    placeholder="Time">
  
    <input 
    v-model="newTodoDescription"
    class="input" 
    type="text" 
    placeholder="description">
  

  </p>
  <p class="control">
    <button 
    :disabled="!newTodoContent"
    class="button is-info">
      Add
    </button>
  </p>
</div>
</form>

  



<div 
v-for="todo in todos"
class="card mb-5" 
:class="{'has-background-success-light' : todo.done}"

>
  <div class="card-content">
    <div class="content">

<div class="columns is-mobile is-vcentered">
  <div class="column"
  :class="{'has-text-success line-through' : 
  todo.done}"
  
  >
  <p>
  {{ todo.content }}    


  </p>
    <p>
    {{ todo.title }}    

    </p>
      <p>
      {{ todo.artist }}    

      </p>
        <p>
         {{ todo.time }}    

        </p>
          <p>
            {{ todo.description }}    

          </p>
  


  </div>
  <div class="column is-5 has-text-right">
    <button 
    @click="toggleDone(todo.id)"
    class="button"
    :class="todo.done ? 'is-success' :
    
    'is-light'"
    
    
    >
  &check; 
</button>
<button
@click="deleteTodo(todo.id
)"
class="button is-danger ml-2">
  &cross; 
</button>
  </div>
</div>


</div>
  </div>
</div>
  </div> -->

</template>

<script setup>

import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { onMounted, ref } from 'vue';

const isLogedIn = ref(false);


/*

Addtodo doesn't work with this:

let auth;
onMounted(() => {
auth = getAuth();
onAuthStateChanged(auth, (user) =>{
  if (user) {
    isLoggedIn.value = true;
  } else {
    isLoggedIn.value = false;
  }
})
});

const handleSignOut = () => {
signOut(auth).then(()=>{
  router.push("/");
})
};
*/
/* imports
*/

import { RouterLink, RouterView } from 'vue-router';

import { initFlowbite } from 'flowbite'
import router from './router';

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

// import {ref, onMounted} from 'vue'
// import { collection, onSnapshot, 
//   addDoc, doc, deleteDoc, updateDoc,   
//   query, orderBy,  
// } from "firebase/firestore";

// import { db } from '@/firebase';


// /*
// Firebase
// */

// const todosCollectionRef = collection(db, 'todos')
// const todosCollectionQuery = query(todosCollectionRef, orderBy('date', 'desc'))


// /*
// Todos*/


// const todos = ref([
//   /*{
//     id: 'id1',
//     content: 'shave my butt',
//     done: false
//   },
//   {
//     id: 'id2',
//     content: 'wash my butt',
//     done: true
//   }*/
// ])





// onMounted(() => {

// onSnapshot(todosCollectionQuery, (querySnapshot) => {
//   const fbTodos = [];
//   querySnapshot.forEach((doc) => {
//   const todo = {
//     id: doc.id,
//     content: doc.data().content,
//     done: doc.data().done,
//     title: doc.data().title,
//     artist: doc.data().artist,
//     time: doc.data().time,
//     description: doc.data().description
//   }

//   fbTodos.push(todo)  
// })
// todos.value = fbTodos

// })


// })

// const newTodoContent = ref('')
// const newTodoTitle = ref('')
// const newTodoArtist = ref('')
// const newTodoTime = ref('')
// const newTodoDescription = ref('')
// const addTodo =() => {
//    addDoc(todosCollectionRef, {
//       content: newTodoContent.value,
//       done: false,
//       date: Date.now(),
//       title: newTodoTitle.value,
//       artist: newTodoArtist.value,
//       time: newTodoTime.value,
//       description: newTodoDescription.value
//     });
//   newTodoContent.value = ''
//   newTodoTitle.value = ''
//   newTodoArtist.value = ''
//   newTodoTime.value = ''
//   newTodoDescription.value = ''
// }

// /* 
// Delete todo
// */

// const deleteTodo = id => {
//    deleteDoc(doc(todosCollectionRef, id));
// }

// const toggleDone = id => {
//   const index = todos.value.findIndex(todo => todo.id
//   === id)


//  updateDoc(doc(todosCollectionRef, id), {
//   done: !todos.value[index].done
// });

// }




</script>


<style>
@import 'bulma/css/bulma.min.css';
@font-face {
  font-family: "mundial";
  src: local("mundial"),
   url(../src/fonts/mundial.otf) format("truetype");
}


.background{
  overflow-y: hidden;
}

.badass-todo{
  max-width: 1000px;
  padding: 50px;
  margin: 0 auto;
}

.line-through{
  text-decoration: line-through;
}
 


.nav{
  position: absolute;
    float: right;
    z-index: 1;
}
</style>