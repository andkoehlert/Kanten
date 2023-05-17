<template> 

<nav class="navbar" id="myNavbar">
    <div class="nav-tab">
        <span class="slash">\</span>
    <a href="#events">EVENTS</a>
    <span class="slash">\</span>
    <a href="#volunteer">VOLUNTEER</a>
    <span class="slash">\</span>
    <a href="#merch">MERCH</a>
    <span class="slash">\</span>
    <a href="#gallery">GALLERY</a>
    <span class="slash">\</span>
    </div>
    
    <a href="javascript:void(0);" class="icon" onclick="toggleNavbar()">
        <i class="fa-sharp fa-solid fa-bars"></i>
    </a>
    <div class="kanten-logo">
            <img src="../assets/Logo Standart.png" alt="shit">
           </div>
</nav>

  



<!--
<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
  
  <div class="flex md:order-2">
    <div class="kanten-logo">
            <img src="../assets/Logo Standart.png" alt="shit">
           </div>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

-->

<!--
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <nav class="subpage-nav" id="navigation">
        <a href="javascript:void(0);" class="navbar-icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
    </a>
            <ul>
                <span class="slash">\</span>
                <li><a  class="nav-link" href="#">EVENTS</a></li>
                <span class="slash">\</span>
                <li><a class="nav-link" href="#">VOLOUNTEER</a></li>
                <span class="slash">\</span>
                <li><a class="nav-link" href="#">MERCH</a></li>
                <span class="slash">\</span>
                <li><a class="nav-link" href="#">GALLERY</a></li>
                <span class="slash">\</span>
            </ul>
           <div class="kanten-logo">
            <img src="../assets/Logo Standart.png" alt="shit">
           </div>
      </nav>

    -->
  </template>




  <!--
  <style>
@font-face {
  font-family: goodTimes;
  src: url(../assets/good\ times\ rg.otf);
}
body {
    background-color: #2A2A2A;
}
  .subpage-nav {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }
  .navbar-icon {
    display: none;
    background-color: aliceblue;
    width: 25px;
    height: 25px;
    margin-left: 20px;
  }
  ul {
    display: flex;
    gap: 30px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
  }
  .slash {
  font-size: 35px;
  margin-top: -15px;
  color: #ffffff;
}

  .nav-link {
    text-decoration: none;
    list-style: none;
    color: rgb(255, 255, 255);
    font-family: goodTimes;
    font-size: 20px;
  }
  .nav-link:hover {
    color: rgb(70, 70, 92);
  }
  .kanten-logo {
    width: 120px;
    height: auto;
    margin-right: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media screen and (max-width:1000px) {
    .subpage-nav ul {
        scale: 80%;
    }
  }
  @media screen and (max-width:800px) {
    .subpage-nav {
        justify-content: center;
    }
    .subpage-nav ul {
    gap: 20px;
    }
    .subpage-nav .kanten-logo {
        height: fit-content;
    }
  }
  @media screen and (max-width:700px) {
   
    .subpage-nav ul {
    display: block;
    }
    
    .subpage-nav .slash {
        display: none;
    }
    .subpage-nav .kanten-logo {
        height: fit-content;
    }
    .subpage-nav .responsive {position: relative;}

  .subpage-nav .responsive ul li .nav-link .navbar-icon {
    position: absolute;
    right: 0;
    top: 0;
  }

.subpage-nav ul li .nav-link:not(:first-child) {display: none;}

  .subpage-nav a.navbar-icon {
    float: left;
    display: block;
  }
  .subpage-nav.responsive ul li .nav-link {
    float: none;
    display: block;
    text-align: left;
  }
  }
  </style>


<script>
function myFunction() {
  var x = document.getElementById("navigation");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>  -->
<style>
    /* CSS styles for the navigation */
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
