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
  </template>
  