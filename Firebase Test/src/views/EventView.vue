


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
        <RouterLink to="/about" class="hover:text-white">ABOUT US</RouterLink>
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

      <li><RouterLink to="/about" class="hover:text-white"> ABOUT US</RouterLink></li>
     
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

<div class="flex justify-center mt-10 lg:justify-start lg:mt-6 lg:ms-20">
  <div class="flex-none ...">
    <h1 class="aboutHeader">
      EVENTS
    </h1>
  </div>
  
</div>


<div class="xl:flex xl:justify-center">

<!--BOX ONE CONTAINING TWO EVENTS-->

  <div class=" justify-center lg:flex gap-10">
  <div>
    <div class="me-auto ms-auto  max-w-sm p-10 mx-8 bg-none border-0  rounded-lg  mt-10">
  <a href="#"
  class="justify-center items-center	"
  >
        <img class="event_logo h-48 w-48  me-auto ms-auto	" src="../assets/DeftLogo.png" 
        
        alt="" 
        
        
        />
    </a>
    <h1 class="eventName  mb-3 font-normal bg-none border-0  text-white grid justify-center items-center mt-6">DEFT</h1>
    <RouterLink to="/deft"
      class="inline-flex items-center px-3 py-2 text-sm mt-6 font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 grid justify-center items-center"
      
      >Read more</RouterLink>
  
</div>
</div>
  <div>
    <div class="me-auto ms-auto  max-w-sm p-10 mx-8 bg-none border-0  rounded-lg  mt-10">
  <a href="#"
  class="justify-center items-center	"
  >
        <img class="event_logo h-48 w-48  me-auto ms-auto	" src="../assets/VertexLogo.png" 
        
        alt="" 
        
        
        />
    </a>
    <h1 class="eventName  mb-3 font-normal bg-none border-0  text-white grid justify-center items-center mt-6">VERTEX</h1>
    <RouterLink to="/vertex"
      class="inline-flex items-center px-3 py-2 text-sm mt-6 font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 grid justify-center items-center"
      
      >Read more</RouterLink>
  
</div>
</div>
</div>

<!--BOX TWO CAONTAINING TWO EVENTS-->

<div class=" justify-center lg:flex gap-10">
  <div>
    <div class="me-auto ms-auto  max-w-sm p-10 mx-8 bg-none border-0  rounded-lg  mt-10">
  <a href="#"
  class="justify-center items-center	"
  >
        <img class="event_logo h-48 w-48  me-auto ms-auto	" src="../assets/XLogo.png" 
        
        alt="" 
        
        
        />
    </a>
    <h1 class="eventName  mb-3 font-normal bg-none border-0  text-white grid justify-center items-center mt-6">X-MASSIVE-DUB</h1>
    <RouterLink to="/Xmassive"
      class="inline-flex items-center px-3 py-2 text-sm mt-6 font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 grid justify-center items-center"
      
      >Read more</RouterLink>
  
</div>
</div>
  <div>
    <div class="me-auto ms-auto  max-w-sm p-10 mx-8 bg-none border-0  rounded-lg  mt-10">
  <a href="#"
  class="justify-center items-center	"
  >
        <img class="event_logo h-48 w-48  me-auto ms-auto	" src="../assets/ManaLogo.png" 
        
        alt="" 
        
        
        />
    </a>
    <h1 class="eventName  mb-3 font-normal bg-none border-0  text-white grid justify-center items-center mt-6">MANA CLUB</h1>
    <RouterLink to="/Manaclub"
      class="inline-flex items-center px-3 py-2 text-sm mt-6 font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 grid justify-center items-center"
      
      >Read more</RouterLink>
  
</div>
</div>
</div>
</div>

<div class="mt-10 flex flex-col lg:ms-32 md:me-16 md:ms-16 lg:me-32 ms-8 me-8">
     
    

    <form class="mt-4" @submit.prevent="addComment">
      <div class="flex items-center justify-center mb-2">
        <input v-model="username" class="w-96 mr-2 p-2 border-2 rounded-xl border-black-300 text-white" type="text" placeholder="Enter your username" style="background-color: #70707066;"/>
      </div>
      <div class="flex flex-col items-center">
        <textarea v-model="newComment" class="w-96 mr-2 p-2 border-2 rounded-xl border-black-300 text-white" rows="3" placeholder="give us your feedback!" style="background-color: #70707066;"></textarea>
        <button type="submit" class="py-2 px-6 bg-blue-600 text-white rounded-xl my-5">Add Comment</button>
      </div>
    </form>
    
    <div class="mt-4 flex flex-col flex-wrap">
      <div v-for="(comment, index) in comments" :key="index" class="mb-4 p-4 text-white rounded-xl w-full lg:w-1/2" style="background-color: #70707066;" >
        <h3 class="font-bold italic" style="text-shadow: 4px 4px #1838a1;">{{ comment.username }}</h3>
        <p class="whitespace-pre-wrap eventName">{{ comment.comment }}</p>
        <button @click="deleteComment(index)" class="mt-2 py-1  rounded-xl text-white"><img src="../assets/delete.png" alt="bin"></button>
      </div>
    </div>
  </div>







<div class="flex justify-center mt-20">
  <div>
    <a href="https://www.instagram.com/kanten_esbjerg/" class="me-20 ms-20"><img class="hover:animate-bounce" src="../assets/instagram-icon.png" alt="instagram"></a>
  </div>
  <div>
    <a href="#" class="me-20 ms-20"><img class="hover:animate-bounce" src="../assets/discord-icon.png" alt="discord"></a>
  </div>
  <div> <a href="https://www.facebook.com/kanten.esbjerg" class="me-20 ms-20"><img class="hover:animate-bounce" src="../assets/facebook-icon.png" alt="facebook"></a></div>
</div>

<div class="flex justify-center me-6 mt-5 pb-20 animate-pulse hover:animate-none">
  <a href="#" class="mailKanten"> kanten@gmail.com </a>
</div>

 

</div>
</template>

<style scoped>
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

#text {
  font-size: 30px;
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


       
  
  
   
   
    
   
  </style>
  
  <script>
 export default {
  data() {
    return {
      comments: [],
      newComment: "",
      username: ""
    };
  },
  created() {
    this.fetchComments();
  },
  methods: {
    fetchComments() {
      const storedComments = localStorage.getItem("comments");
      if (storedComments) {
        this.comments = JSON.parse(storedComments);
      }
    },
    addComment() {
      if (this.newComment.trim() !== "") {
        const comment = {
          username: this.username,
          comment: this.newComment
        };
        this.comments.push(comment);
        this.saveComments();
        this.newComment = "";
        this.username = "";
      }
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
      this.saveComments();
    },
    saveComments() {
      localStorage.setItem("comments", JSON.stringify(this.comments));
    }
  }
};
</script>
