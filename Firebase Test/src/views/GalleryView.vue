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



<!-- HEADING-->

<div class="flex justify-center mt-10 mb-20 lg:justify-start lg:mt-6 lg:ms-20">
  <div class="flex-none ...">
    <h1 class="aboutHeader">
      GALLERY
    </h1>
  </div>
  
</div>

<!-- Filter-->
<!--
<div class="gallery_h2 flex justify-start  gap-10 h-10 ms-20 text-white mb-5 mt-20">
  <div>
    <p class="
    text-5xl font-bold transition cursor-pointer
     duration-150 border-b-8 border-transparent 
     hover:border-purple-500">
All</p>
  </div>
  <div>
    <p class="
    text-5xl font-bold transition cursor-pointer
     duration-150 border-b-8 border-transparent 
     hover:border-purple-500">Photos</p>
  </div>
  <div>
    <p class="
    text-5xl font-bold transition cursor-pointer
     duration-150 border-b-8 border-transparent 
     hover:border-purple-500">Videos</p>
  </div>
</div>
-->


<!-- Photo Grid-->


<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img 
class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 " id="imageDisplay" >
    <li v-for="image in images" :key="image.img">
        <img :src="image.img" alt="image.img"
        class="h-auto max-w-full rounded-lg 
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
        " >
    </li>
 
    <div>
        <img 
        class="h-auto max-w-full rounded-lg 
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105" src="../assets/IMG_8721.JPG" alt="">
    </div>
    <div>
        <img 
        class="h-auto max-w-full rounded-lg 
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105 " src="../assets/IMG_8722.JPG" alt="">
    </div>
    <div>
        <img 
        class="h-auto max-w-full rounded-lg 
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105" src="../assets/IMG_8728.JPG" alt="">
    </div>
    <div>
        <img 
        class="h-auto max-w-full rounded-lg
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
        " src="../assets/IMG_8754.JPG" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg 
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
        " src="../assets/IMG_8783.JPG" alt="">
    </div>
    <div>
        <img 
        class="h-auto max-w-full rounded-lg
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
        " src="../assets/IMG_8828.JPG" alt="">
    </div>
    
   
</div>

<!-- Buttons socials-->


<div class="container m-auto flex grid grid-cols-1 content-around">
           
           <div class=" flex items-center justify-center h-40">
              
<!-- Buttons socials-->
<div class="flex justify-center mt-20">
  <div>
    <a href="https://www.instagram.com/kanten_esbjerg/" class="me-20 ms-20"><img class="hover:animate-bounce" src="../assets/instagram-icon.png" alt="instagram"></a>
  </div>
  <div>
    <a href="#" class="me-20 ms-20"><img class="hover:animate-bounce" src="../assets/discord-icon.png" alt="discord"></a>
  </div>
  <div> <a href="https://www.facebook.com/kanten.esbjerg" class="me-20 ms-20"><img class="hover:animate-bounce" src="../assets/facebook-icon.png" alt="facebook"></a></div>
</div>
           </div>
                </div>

<!-- socials-->

                 <div class="container m-auto flex grid grid-cols-1 content-around text-white">
           
            <div class=" flex items-center justify-center">
               
 <!--  socials-->
 kanten@gmail.com
            
            
            </div>
           
            

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


       
  
/* responsive */
@media screen and (max-width: 600px) {
  
  .gallery_h2 p{
font-size: 1em;
    
  }



  }




</style>
  
<script>

<<<<<<< HEAD

// JavaScript function to toggle the responsive class on the navigation
function toggleNavbar() {
  var navbar = document.getElementById("myNavbar");
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
}
=======
  
>>>>>>> 031b38bedd489fda57163c7097d94950bf44f5ae
</script>