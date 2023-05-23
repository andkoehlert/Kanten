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
    <div class="col-start-2 m-20">
      <h1 class="text-xl  text-white text-2xl font-bold border-b-8  
     border-purple-500">Events</h1>
    </div>
    <div class="flex justify-center ...">
      <div>
        <h2 class="x text-white ">
          VERTEX
        </h2>
      </div>
      
    </div>
   
   <!-- 
    <div class="flex  w-full justify-center items-center">
    <img src="../assets/LogoKanten.png">
  </div>
   --> 
   <div class="block flex justify-center px-40">
<h1 class="text-white">UPCOMING EVENTS</h1>

</div>
<div class="block flex justify-center px-40 py-6">
   <div class=" bg-gray-500 text-white rounded-lg py-20 px-20">
   <p class="block px-4 py-2 text-white-800 ">X-Massive DUB takes you back to the roots on the 2nd of December! 

On this evening in cold December, we celebrate everything about 
dancehall, reggae, dub and its sound system culture.
We've assembled a team of DJ selectors who will spin all the vinyl you didn't know you loved.

The event is FREE, so let's get together and enjoy a good evening of bass together.
 It will be nothing less than smoking hot, despite the time of year. 

PROGRAM:
19:00 - 20:00: DOORS OPEN
20:00 - 21:00: PAPASKRALD & MIKE PINTO
21:00 - 22:30: SELEKTA PUPA IHRHAMM
22:30 - 00:30: RAS MONEY (RASKE PENGE)
00:30 - 02:00: JALIX SOUND</p>
   </div>

</div>
   




<div class="block flex justify-center px-40">
<h1 class="text-white">PAST EVENTS</h1>

</div>
    <div class="block flex justify-center px-40 py-6">
   <div class=" bg-gray-500 text-white rounded-lg py-20 px-20">
   <p class="block px-4 py-2 text-white-800 ">X-Massive DUB takes you back to the roots on the 2nd of December! 

On this evening in cold December, we celebrate everything about 
dancehall, reggae, dub and its sound system culture.
We've assembled a team of DJ selectors who will spin all the vinyl you didn't know you loved.

The event is FREE, so let's get together and enjoy a good evening of bass together.
 It will be nothing less than smoking hot, despite the time of year. 

PROGRAM:
19:00 - 20:00: DOORS OPEN
20:00 - 21:00: PAPASKRALD & MIKE PINTO
21:00 - 22:30: SELEKTA PUPA IHRHAMM
22:30 - 00:30: RAS MONEY (RASKE PENGE)
00:30 - 02:00: JALIX SOUND</p>
   </div>

</div>
   


    
    
    
    </template>

<style>

body{
}
body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #111010;
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
    width: 120px;
    height: auto;
    margin-right: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    }
    
    /* CSS styles for the toggle button */
    .navbar .icon {
      display: none;
    }
.logo{
}

    .x {
    font-size: 5em;
    text-shadow: 2px 2px #648af3;
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



  }




</style>
  
<script>
// JavaScript function to toggle the responsive class on the navigation



// Initialization for ES Users
import {
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Dropdown, Ripple });
</script>

