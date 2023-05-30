<template>
  <div class="background">
 <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-primary lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
        <RouterLink to="/" class="hover:text-white">HOME</RouterLink>
      </li>
      <li> 
        <RouterLink to="/event" class="hover:text-white">EVENTS</RouterLink>
      </li>
      <li>
    <RouterLink to="/voluenteer" class="hover:text-white">VOLUNTEER</RouterLink>
  </li>
      <li><RouterLink to="/merch" class="hover:text-white">MERCH</RouterLink>
  </li>
  <li> 
    <RouterLink to="/gallery" class="hover:text-white">GALLERY</RouterLink>
  </li>
      </ul>
    </div>
   
  </div>

  
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">

      <span class="slash">\</span>

      <li> <RouterLink to="/" class="hover:text-white">HOME</RouterLink> </li>

      <span class="slash">\</span>

      <li>  <RouterLink to="/event" class="hover:text-white">EVENTS</RouterLink> </li>
     
      <span class="slash">\</span>

      <li><RouterLink to="/voluenteer" class="hover:text-white">VOLUNTEER</RouterLink></li>

      <span class="slash">\</span>

      <li><RouterLink to="/merch" class="hover:text-white"> MERCH</RouterLink></li>

      <span class="slash">\</span>

      <li> <RouterLink to="/gallery" class="hover:text-white">GALLERY</RouterLink></li>

      <span class="slash">\</span>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn" style="width: 160px; height: auto;"><img src="../assets/LogoKanten.png" alt="logotop" style="height: auto; width: 160px;"></a>
  </div>
</div>


<div class="col-start-2 m-20 borderEvent">
       <RouterLink to="/event" class="pb-1 eventBack">EVENTS</RouterLink>
     </div>
     <div class="flex justify-center">
       <div>
         <h2 class=" mt-0 eventHeader">
VERTEX         </h2>
       </div>
       
     </div>
     <div class="flex justify-center py-4">
  <img class="logo w-48 h-48" src="../assets/VertexLogo.png" alt="">

</div>
    <!-- 
     <div class="flex  w-full justify-center items-center">
     <img src="../assets/LogoKanten.png">
   </div>
    --> 
   
<div class="badass-todo">

<div class="title has-text-centered">
NEW EVENT</div>




<div 
v-for="todo in todos"
class=" text-white mb-5 " 
:class="{' ' : todo.done}"

>
<div class=" has-text-centered" >
<div class="align-center justify-center">

<div class="columns is-mobile is-vcentered"  style="background-color: #1838a166;" >
<div class="column"
:class="{'has-text-success line-through' : 
todo.done}"

>
<img :src="todo.imgURL" alt="" class=" has-text-centered"  style="max-width: ;">
<p class="eventHeader  py-6">
{{ todo.content }}    


</p>
<p class="eventHeader  py-6">
{{ todo.title }}    

</p>
  <p class="  py-6">
  {{ todo.artist  }}    

  </p>
    <p>
     {{ todo.time }}    

    </p>
      <p>
        {{ todo.description }}    

      </p>



</div>

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


const todosCollectionRef = collection(db, 'AdminVertex')
const todosCollectionQuery = query(todosCollectionRef, orderBy('date', 'desc'))

/*
Todos*/


let todos = refVue([
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
imgURL: doc.data().imgURL,
time: doc.data().time,
description: doc.data().description
}

fbTodos.push(todo)  
})
todos.value = fbTodos
console.log("test", todos.value)



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


</script>


<style scoped>

.title{
color: #fff;
}


.eventHeader {
color: #fff;
font-size: 90px;
text-shadow: 4px 4px #24f611;
font-family: MadeOkine;
}
.eventBack {
font-size: 30px;
color: #fff;
font-family: MadeOkine;
text-shadow: 4px 4px #10e713;
}
.borderEvent {
border-bottom: 4px solid #10e713;
}  
.logo{
color: #111010;
}

.eventTitles {
color: #fff; 
font-family: MadeOkine;
font-size: 25px;
}  
.eventText {
font-family: "mundial", sans-serif;
text-align: justify;

}   

.mailKanten {
font-size: 25px;
text-decoration: none;
color: #fff;
}
.mailKanten:hover {
color: #c7c7c7;
}

 .background{
  background-image: url("../assets/KANTENFOND.png");
}

    /* CSS styles for the navigation */
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #181717;
    }
    
    @font-face {
  font-family: 'MadeOkine';
  src: url('../assets/MADEOkineSansPERSONALUSE-Black.otf') format('woff2');
  
}



.navbar {
  background-color: #33333300;
}
.btn {
  background-color: #33333300;
  border: none;
}
.btn:hover {
  background-color: #33333300;
}
li {
  background-color: #33333300;
  color: white;
  margin: 0px 10px 0px 10px;
  font-family: MadeOkine;
}
li:hover {
  text-shadow: 4px 4px #1838a1;
}
.slash {
  font-size: 30px;
  color: #fff;
  margin-top: 2px;
  font-family: MadeOkine;
}
.menu {
  background-color: #33333300;
}
.aboutHeader {
  color: #fff;
  font-size: 50px;
  text-shadow: 4px 4px #1838a1;
  font-family: MadeOkine;
}
.mailKanten {
  font-size: 25px;
  text-decoration: none;
  color: #fff;
}
.mailKanten:hover {
  color: #c7c7c7;
}

.eventName {
  font-family: "mundial", sans-serif;
}


       
  
  
   
   
       
@media screen and (max-width: 600px) {
  
  .background{
  background-image: url("../assets/KANTENFOND.png");
}


.eventHeader {
color: #fff;
font-size: 40px;
text-shadow: 4px 4px #24f611;
font-family: MadeOkine;
}
.borderEvent{
  margin-left: 20px;
}

  }
   
  </style>