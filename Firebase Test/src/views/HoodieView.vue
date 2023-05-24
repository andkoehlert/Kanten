<template>
 <nav class="navbar" id="myNavbar">
    <div class="nav-tab">
      <span class="slash">\</span>
        <RouterLink to="/">Home</RouterLink>
        <span class="slash">\</span>
        <RouterLink to="/event">Event</RouterLink>
    <span class="slash">\</span>
    <RouterLink to="/voluenteer">Voluenteer</RouterLink>
    <span class="slash">\</span>
    <RouterLink to="/merch">Merch</RouterLink>
    <span class="slash">\</span>
    <RouterLink to="/gallery">Gallery</RouterLink>
    <span class="slash">\</span>
    </div>
    
    <a href="javascript:void(0);" class="icon" onclick="toggleNavbar()">
        <i class="fa-sharp fa-solid fa-bars"></i>
    </a>
    <div class="kanten-logo">
            <img src="../assets/LogoKanten.png" alt="shit">
           </div>
</nav>


<div class="relative h-screen md:flex items-center justify-center justify-around  overflow-hidden">
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
    <h2 class="card-title text-white ">OUR HOODIE</h2>
    <p class="text-xs">SHOW SOME LOVE FOR YOUR FORVOURITE EVENT</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
 


<div class="buy grid justify-around py-40">
  <h1 class="x flex">
    KANTEN - HOODIE
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
  <RouterLink to="/vertex"
      class="flex px-3 py-2 text-sm mt-6 font-medium  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 grid justify-center items-center"
      
      >BUY NOW</RouterLink>
</div>
</div>

</div>



</template>


<script>


</script>

<style>


body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #0f0e0e;
  margin: 0px;
   min-height: 100vh;
   color: #fff;
}
.navbar {
  background-color: #333;
  overflow: hidden;
  justify-content: space-between;
}
    .nav-tab {
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
    }
    .slash {
  font-size: 35px;
  color: #ffffff;
  float: left;
  margin-left: 20px;
}
    .navbar a {
      float: left;
      display: block;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      margin-left: 20px;
    }
    
    .navbar a:hover {
      background-color: #ddd;
      color: black;
    }
    
    .kanten-logo {
        float: right;
    width: 60px;
    height: auto;
    margin-right: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    }

    .x {
    font-size: 5em;
    text-shadow: 2px 2px #648af3;
}
    
    /* CSS styles for the toggle button */
    .navbar .icon {
      display: none;
    }

    @media screen and (max-width: 1000px) {
        .nav-tab {
            margin-left: 0px;
            margin-right: 0px;
            float: left;
            scale: 80%;
        }
        .navbar a {
            margin-left: 11px;
            padding: 14px 8px;
        }
    }
   
    @media screen and (max-width: 700px) {
      .navbar a:not(:first-child) {
        display: none;
      }
    
      .navbar a.icon {
        float: left;
        display: block;
      }
      .slash {
        display: none;
      }
    }
    @media screen and (max-width: 700px) {
      .navbar.responsive {
        position: relative;
      }
    
      .navbar.responsive .icon {
        position: absolute;
        right: 0;
        top: 0;
      }
    
      .navbar.responsive a {
        float: none;
        display: block;
        text-align: left;
      }
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

