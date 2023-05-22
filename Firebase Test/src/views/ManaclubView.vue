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
      <h1 class="text-xl">Events</h1>
    </div>
    <div class="flex justify-center ...">
      <div>
        <h2 class="x">
          MANA CLUB
        </h2>
      </div>
      
    </div>
    <div class="flex justify-center ...">
      <div>
        <button  id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white font-medium text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7"></path></svg></button>
    <!-- Dropdown menu -->
    <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
    </div>
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

