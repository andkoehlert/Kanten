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
        
    </a>
    <div class="kanten-logo">
            <img src="../assets/Logo Standart.png" alt="shit">
           </div>
</nav>

  
  </template>


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
      color: #d4dbff;
      text-shadow: 3px 3px #1838a1;
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
        font-size: 40px;
        z-index: 0;
      }
      .slash {
        display: none;
      }
    }
    @media screen and (max-width: 700px) {
      .navbar.responsive {
        position: relative;
      }
    
      .navbar.responsive a.icon {
        
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
