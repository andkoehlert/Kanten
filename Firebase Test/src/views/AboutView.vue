<template> 

<nav class="navbar" id="myNavbar">
    <div class="nav-tab">
      <ul>
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
      </ul>
        
    </div>
    
    <div class="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </div>
        
    
    <div class="kanten-logo">
            <img src="../assets/LogoKanten.png" alt="shit">
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
    .hamburger {
    margin-top: 55px;
    margin-left: 30px;
    cursor: pointer;
    display: none;
}
    .hamburger div {
    width: 30px;
    height: 2px;
    margin: 6px 0;
    background: #fff;
}
    
    @media screen and (max-width: 1000px) {
        .nav-tab {
            margin-left: 0px;
            margin-right: 0px;
            float: left;
            scale: 80%;
        }
        .navbar a {
            margin-left: 10px;
            padding: 14px 6.5px;
        }
    }
   
    @media screen and (max-width: 700px) {
      .hamburger {
        display: block;
        float: left;
      }
      
    }
  </style>
  
  <script>
        hamburger = document.querySelector(".hamburger");
        nav = document.querySelector("nav-tab");
        hamburger.onclick = function() {
            nav.classList.toggle("active");
        }
    </script>
