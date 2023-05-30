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
  <li><RouterLink to="/about" class="hover:text-white"> ABOUT US</RouterLink></li>
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

      <li><RouterLink to="/about" class="hover:text-white"> ABOUT US</RouterLink></li>

      <span class="slash">\</span>

      <li> <RouterLink to="/gallery" class="hover:text-white">GALLERY</RouterLink></li>

      <span class="slash">\</span>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn" style="width: 160px; height: auto;"><img src="../assets/LogoKanten.png" alt="logotop" style="height: auto; width: 160px;"></a>
  </div>
</div>


<div class="flex justify-center mt-10 mb-10 lg:justify-start lg:mt-6 lg:ms-20">
  <div class="flex-none ...">
    <h1 class="aboutHeader">
      MERCH
    </h1>
  </div>
</div>


<div class="Merch_box w-full">


<div class="justify-center flex flex-col md:flex-row md:flex gap-10">
  <div>
    <div class="  me-auto ms-auto max-w-xs  p-4  mb-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
  <a href="#"
  class="justify-center items-center"
  >
        <img class="object-contain h-60 w-96 event_logo justify-center items-center	" src="../assets/DeftCap.png" 
        
        alt="" 
        
        
        />
    </a>
    <h1 class="mb-3 font-normal text-black grid justify-center items-center mt-6" style="font-family: 'MadeOkine';  ">BROWSE OUR BRAND CAPS</h1>
    <RouterLink to="/cap"
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 grid justify-center items-center"
      
      >See More</RouterLink>
  
</div>
</div>


  <div>
<div class="max-w-xs p-4  me-auto ms-auto  mb-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
  <a href="#"
  class="justify-center items-center	"
  >
        <img class="object-contain h-60 w-96  event_logo justify-center items-center	" src="../assets/manaclub kanten merch.png" 
        
        alt="" 
        
        
        />
    </a>
    <h1 class="mb-3 font-normal text-black grid justify-center items-center mt-6" style="font-family: 'MadeOkine';">BROWSE OUR BRAND T-SHIRTS</h1>
    
    <RouterLink to="/shirt"
      class="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 grid justify-center items-center"
      
      >See More</RouterLink>
    
</div>

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
/* CSS styles for the navigation */


.background{
  background-image: url("../assets/KANTENFOND.png");
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

.x{
font-size: 5em;
text-shadow: 2px 2px #648af3;

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
