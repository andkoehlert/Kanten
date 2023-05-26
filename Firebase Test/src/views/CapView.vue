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
  

  <div class=" relative h-screen md:flex items-center justify-center justify-around">

  <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
    <div class="carousel flex justify-around">
    
    <div class="carousel rounded-box w-96">
  <div class="carousel-item w-1/2">
    <img src="../assets/Cap.webp" class="w-full" />
  </div> 
  <div class="carousel-item w-1/2">
    <img src="../assets/Cap.webp" class="w-full" />
  </div> 
  <div class="carousel-item w-1/2">
    <img src="../assets/Cap.webp" class="w-full" />
  </div> 
  <div class="carousel-item w-1/2">
    <img src="../assets/Cap.webp" class="w-full" />
  </div> 
  <div class="carousel-item w-1/2">
    <img src="../assets/Cap.webp" class="w-full" />
  </div> 
  <div class="carousel-item w-1/2">
    <img src="../assets/Cap.webp" class="w-full" />
  </div> 
  <div class="carousel-item w-1/2">
    <img src="../assets/Cap.webp" class="w-full" />
  </div>
</div>
</div>
  
  </figure>
  
  <div class="card-body text-white bg-black">
    <h2 class="card-title text-white  font-bold transition cursor-pointer
     border-purple-500">OUR CAP</h2>
    <p class="text-xs">SHOW SOME LOVE FOR YOUR FORVOURITE EVENT</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
     
   
   
   <div class="buy grid justify-around py-40">
     <h1 class="x flex text-7xl font-bold transition cursor-pointer
     duration-150 border-b-8  
     border-purple-500">
       KANTEN - CAP
     </h1>
     <p class="py-2">
    100 DKK,-
  </p>
  <div class="flex gap-6">
  
  <p class="cursor-pointer	">  
    XL
    <p class="cursor-pointer	">
    L
    </p>
<p class="cursor-pointer	">
M
</p>
<p class="cursor-pointer	">
S
</p>
  </p>
     </div>
   
     <div class=" gap-4 flex py-2">
           <button class="w-5 h-5 rounded-full 
                          bg-blue-500 ">
               
           </button>
           <button class="w-5 h-5 rounded-full 
                          bg-red-500 ">
               
           </button>
           <button class="w-5 h-5 rounded-full 
                          bg-yellow-500 ">
               
           </button>
           <button class="w-5 h-5 rounded-full 
                          bg-white ">
               
           </button>
   </div>
   <div class="flex">
     <RouterLink to="/CheckOut"
         class="flex px-3 py-2 text-sm mt-6 font-medium  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 grid justify-center items-center"
         
         >BUY NOW</RouterLink>
   </div>
   </div>
   
   </div>
   
   
   
      </div>


 
   </template>
   
   
   <script>
   
   
   </script>
   
   <style scoped>
   .background{
  background-image: url("../assets/KANTENFOND.png");
}
   .image_wrapper {
  position: relative;
}

.overlay {
  position: absolute; 
  left: 0;
  top: 0;
}
   body {
     margin: 0;
     padding: 0;
     font-family: Arial, sans-serif;
     background-color: #333;
     margin: 0px;
      min-height: 100vh;
      color: #fff;
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
       .x {
       font-size: 5em;
       text-shadow: 2px 2px #648af3;
   }
       
       /* CSS styles for the toggle button */
       .navbar .icon {
         display: none;
       }
   
     
   
   /* responsive */
   @media screen and (max-width: 600px) {
     
     .gallery_h2 p{
   font-size: 1em;
       
     }
   
   .buy{
     padding: 1em;
   }
   
   .x{
     font-size: 3em;
   }
   .carousel{
     padding-top: 1em;
     padding: 2em;
   }
     }
   
   
   
   
   </style>
     
   <script>
   // JavaScript function to toggle the responsive class on the navigation
   function toggleNavbar() {
     var navbar = document.getElementById("myNavbar");
     if (navbar.className === "navbar") {
       navbar.className += " responsive";
     } else {
       navbar.className = "navbar";
     }
   }
   
   
   // Initialization for ES Users
   import {
     Dropdown,
     Ripple,
     initTE,
   } from "tw-elements";
   
   initTE({ Dropdown, Ripple });
   </script>
   
   