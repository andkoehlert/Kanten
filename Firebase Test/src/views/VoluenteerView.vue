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
      <li><RouterLink to="/about" class="hover:text-white"> ABOUT US</RouterLink></li>
      <li><RouterLink to="/merch" class="hover:text-white">MERCH</RouterLink>
  </li>
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

      <li><RouterLink to="/about" class="hover:text-white">ABOUT US</RouterLink></li>

      <span class="slash">\</span>

      <li><RouterLink to="/merch" class="hover:text-white"> MERCH</RouterLink></li>

      <span class="slash">\</span>

      <li> <RouterLink to="/gallery" class="hover:text-white">GALLERY</RouterLink></li>

      <span class="slash">\</span>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn" style="width: 160px; height: auto;"><img src="../assets/LogoKanten.png" alt="logotop" style="height: auto; width: 160px;"></a>
  </div>
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

</style>