<template> 

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-primary lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li> 
        <RouterLink to="/event">Event</RouterLink>
      </li>
      <li>
    <RouterLink to="/voluenteer">Voluenteer</RouterLink>
  </li>
      <li><RouterLink to="/merch">Merch</RouterLink>
  </li>
  <li> 
    <RouterLink to="/gallery">Gallery</RouterLink>
  </li>
      </ul>
    </div>
   
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">

      <li>
        <span class="slash">\</span>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li> <span class="slash">\</span>
        <RouterLink to="/event">Event</RouterLink>
      </li>
      <li><span class="slash">\</span>
    <RouterLink to="/voluenteer">Voluenteer</RouterLink>
    <span class="slash">\</span>
  </li>
      <li><RouterLink to="/merch">Merch</RouterLink>
    <span class="slash">\</span>
  </li>
  <li> <RouterLink to="/gallery">Gallery</RouterLink>
    <span class="slash">\</span>
  </li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn" style="width: 160px; height: auto;"><img src="../assets/LogoKanten.png" alt="logotop" style="height: auto; width: 160px;"></a>
  </div>
</div>





  </template>


<style>
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
}
li:hover {
  color: #d4dbff;
  text-shadow: 3px 3px #1838a1;
}
.menu {
  background-color: #333;
}

   
  </style>
  
  <script>
  
  
</script>
