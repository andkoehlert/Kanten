<template>

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
    
    
    
    
      <div class="badass-todo">
    
    <div class="title has-text-centered">
    ADD EVENT</div>
    
    <form @submit.prevent="addTodo">
      
      
      
      
      
      <div class="field is-grouped mb-10 ">
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
    class="card mb-5 " 
    :class="{'has-background-success-light ' : todo.done}"
    
    >
    <div class="card-content has-text-centered">
          <div class="align-center justify-center">
      
            <div class="columns is-mobile is-vcentered  ">
        <div class="column"
        :class="{'has-text-success line-through' : 
        todo.done}"
        
        >
        <img :src="todo.imgURL" alt=""  >
        <p class="py-6">
        {{ todo.content }}    
      
      
        </p>
          <p class="py-6">
          {{ todo.title }}    
      
          </p>
            <p class="py-6">
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
    <div class="column  ">
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
    
    
    const todosCollectionRef = collection(db, 'AdminDeft')
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
    @import 'bulma/css/bulma.min.css';
    
    
    
    .navbar {
      background-color: #333;
    }
    .btn {
      background-color: #333;
      border: none;
    }
    .btn:hover {
      background-color: #333;
    }
    li {
      color: white;
      margin: 0px 10px 0px 10px;
    }
    li:hover {
      text-shadow: 4px 4px #1838a1;
    }
    .slash {
      font-size: 30px;
      color: #fff;
      margin-top: 2px;
    }
    .menu {
      background-color: #333;
    }
        
    
    /* Dropdown Button */
    .dropbtn {
      background-color: #3498DB;
      color: white;
      padding: 16px;
      font-size: 16px;
      border: none;
      cursor: pointer;
    }
    
    /* Dropdown button on hover & focus */
    .dropbtn:hover, .dropbtn:focus {
      background-color: #2980B9;
    }
    
    /* The container <div> - needed to position the dropdown content */
    .dropdown {
      position: relative;
      display: inline-block;
    }
    
    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    
    /* Links inside the dropdown */
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    
    .title{
      color: #fff;
    }
      
    .badass-todo{
      max-width: 400px;
      padding: 40px;
      margin: 0 auto;
    }
    
    .line-through{
      text-decoration: line-through;
    }
    
    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {background-color: #ddd;}
    
    /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
    .show {display:block;}
    
    
    
    .card-content{
    }
       
    </style>