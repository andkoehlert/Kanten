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
  <li><RouterLink to="/about" class="hover:text-white"> ABOUT US</RouterLink></li>
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

      <li> <RouterLink to="/about" class="hover:text-white">ABOUT US</RouterLink></li>

      <span class="slash">\</span>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn" style="width: 160px; height: auto;"><img src="../assets/LogoKanten.png" alt="logotop" style="height: auto; width: 160px;"></a>
  </div>
</div>



<!-- HEADING--> 

<div class="flex justify-start gap-5 h-40 ps-20 text-white mt-6">
  <div>
    <h1 class="
    text-7xl font-bold transition cursor-pointer
     duration-150 border-b-8  
     border-purple-500">Gallery</h1>
  </div>
  
</div>

<!-- Filter-->

<div class="gallery_h2 flex justify-start gap-10 h-56 ps-20 text-white">
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


<!-- Photo Grid-->


<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img 
        class="h-auto max-w-full rounded-lg 
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
        " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="">
    </div>
    <div>
        <img 
        class="h-auto max-w-full rounded-lg 
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
    </div>
    <div>
        <img 
        class="h-auto max-w-full rounded-lg 
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105 " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
    </div>
    <div>
        <img 
        class="h-auto max-w-full rounded-lg 
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
    </div>
    <div>
        <img 
        class="h-auto max-w-full rounded-lg
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
        " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg 
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
        " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="">
    </div>
    <div>
        <img 
        class="h-auto max-w-full rounded-lg
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
        " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="">
    </div>
    <div>
        <img 
        class="h-auto max-w-full rounded-lg
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
        " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="">
    </div>
    <div>
        <img 
        class="h-auto max-w-full rounded-lg
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
        " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="">
    </div>
    <div>
        <img 
        class="h-auto max-w-full rounded-lg 
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
        " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="">
    </div>
    <div>
        <img 
        class="h-auto max-w-full rounded-lg
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
        " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="">
    </div>
    <div>
        <img 
        class="h-auto max-w-full rounded-lg 
        group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
        " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="">
    </div>
</div>

<div class="flex justify-center mt-20">
  <div>
    <a href="#" class="me-20 ms-20"><img class="hover:animate-bounce" src="../assets/instagram-icon.png" alt="instagram"></a>
  </div>
  <div>
    <a href="#" class="me-20 ms-20"><img class="hover:animate-bounce" src="../assets/discord-icon.png" alt="discord"></a>
  </div>
  <div> <a href="#" class="me-20 ms-20"><img class="hover:animate-bounce" src="../assets/facebook-icon.png" alt="facebook"></a></div>
</div>

<div class="flex justify-center me-6 mt-5 pb-20 animate-pulse hover:animate-none">
  <a href="#" class="mailKanten"> kanten@gmail.com </a>
</div>






</template>


<style>


body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #333;
    }
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

/* responsive */
@media screen and (max-width: 600px) {
  
  .gallery_h2 p{
font-size: 1em;
    
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
</script>