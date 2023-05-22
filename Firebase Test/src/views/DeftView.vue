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
          DEFT
        </h2>
      </div>
      
    </div>




   

    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
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
</script>