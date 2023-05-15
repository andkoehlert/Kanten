<template>




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
  
    <input 
    v-model="newTodoDescription"
    class="input" 
    type="text" 
    placeholder="description">
  
    <input type="file" label="File input" @change="uploadImg">

    

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
  </div>

</template>

<script setup>

/* imports
*/
import { RouterLink, RouterView } from 'vue-router';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {ref as refVue, reactive, onMounted} from 'vue'
import { collection, onSnapshot, 
  addDoc, doc, deleteDoc, updateDoc,   
  query, orderBy,  
} from "firebase/firestore";

import { db } from '@/firebase';


// Add item data: title, description, image URL and have the button disabled until image is uploaded
let addItemData = reactive({
  imgURL: '',
})

const storage = getStorage();
 
// Firebase storage upload image + get download URL + enable button after image uploaded
const uploadImg = async(event) => {
  let file = event.target.files[0]; // get the file
  console.log("file", file)
// Create the file metadata
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = ref(storage, 'images/' + file.name);

const uploadTask = uploadBytesResumable(storageRef, file, metadata);
// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');       
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);

        addItemData.imgURL = downloadURL // update variable imgURL and put the image URL link in it. 
    });
  }  
);
}



/*
Firebase
*/

const todosCollectionRef = collection(db, 'todos')
const todosCollectionQuery = query(todosCollectionRef, orderBy('date', 'desc'))


/*
Todos*/


const todos = ref([
  /*{
    id: 'id1',
    content: 'shave my butt',
    done: false
  },
  {
    id: 'id2',
    content: 'wash my butt',
    done: true
  }*/
])





onMounted(() => {

onSnapshot(todosCollectionQuery, (querySnapshot) => {
  const fbTodos = [];
  querySnapshot.forEach((doc) => {
  const todo = {
    id: doc.id,
    content: doc.data().content,
    done: doc.data().done,
    title: doc.data().title,
    artist: doc.data().artist,
    time: doc.data().time,
    description: doc.data().description
  }

  fbTodos.push(todo)  
})
todos.value = fbTodos

})


})

const newTodoContent = refVue('')
const newTodoTitle = refVue('')
const newTodoArtist = refVue('')
const newTodoTime = refVue('')
const newTodoDescription = refVue('')
const addTodo =() => {
   addDoc(todosCollectionRef, {
      content: newTodoContent.value,
      done: false,
      date: Date.now(),
      title: newTodoTitle.value,
      artist: newTodoArtist.value,
      time: newTodoTime.value,
      description: newTodoDescription.value,
      imgURL: addItemData.imgURL
    });
  newTodoContent.value = ''
  newTodoTitle.value = ''
  newTodoArtist.value = ''
  newTodoTime.value = ''
  newTodoDescription.value = ''
}

/* 
Delete todo
*/

const deleteTodo = id => {
   deleteDoc(doc(todosCollectionRef, id));
}

const toggleDone = id => {
  const index = todos.value.findIndex(todo => todo.id
  === id)


 updateDoc(doc(todosCollectionRef, id), {
  done: !todos.value[index].done
});

}

</script>


<style>
@import 'bulma/css/bulma.min.css';


.badass-todo{
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}

.line-through{
  text-decoration: line-through;
}

</style>