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
  <li><RouterLink to="/merch" class="hover:text-white">MERCH</RouterLink>
</li>
<li><RouterLink to="/about" class="hover:text-white"> ABOUT US</RouterLink></li>
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


  <li><RouterLink to="/merch" class="hover:text-white"> MERCH</RouterLink></li>


  <span class="slash">\</span>


  <li> <RouterLink to="/about" class="hover:text-white">ABOUT US</RouterLink></li>


  <span class="slash">\</span>
</ul>
</div>
<div class="navbar-end">
<a  class="btn" style="width: 160px; height: auto;"><img src="../assets/LogoKanten.png" alt="logotop" style="height: auto; width: 160px;">

</a>


</div>
</div>






<!-- HEADING-->


<div class="flex justify-center mt-10 mb-20 lg:justify-start lg:mt-6 lg:ms-20">
<div class="flex-none ...">
<h1 class="aboutHeader">
  GALLERY
</h1>
</div>

</div>


<!-- Filter-->
<!--
<div class="gallery_h2 flex justify-start  gap-10 h-10 ms-20 text-white mb-5 mt-20">
<div>
<p class=" filterGallery cursor-pointer" >ALL</p>
</div>
<div>
<p class="filterGallery cursor-pointer" >PHOTOS</p>
</div>
<div>
<p class="filterGallery cursor-pointer" >VIDEOS</p>
</div>
</div>
-->




<!-- Photo Grid-->




<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 " id="imageDisplay" >
<li v-for="image in images" :key="image.img">
    <img :src="image.img" alt="image.img"
    class="h-auto max-w-full rounded-lg
    group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
    " >
</li>

<div>
    <img
    class="h-auto max-w-full rounded-lg
    group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105" src="../assets/img1.jpg" alt="">
</div>
<div>
    <img
    class="h-auto max-w-full rounded-lg
    group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105 " src="../assets/img2.jpg" alt="">
</div>
<div>
    <img
    class="h-auto max-w-full rounded-lg
    group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105" src="../assets/img3.jpg" alt="">
</div>
<div>
    <img
    class="h-auto max-w-full rounded-lg
    group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
    " src="../assets/img4.jpg" alt="">
</div>
<div>
    <img class="h-auto max-w-full rounded-lg
    group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
    " src="../assets/img5.jpg" alt="">
</div>
<div>
    <img
    class="h-auto max-w-full rounded-lg
    group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-105
    " src="../assets/img6.jpg" alt="">
</div>


</div>


<div class="socialss flex justify-center mt-10 ">
  <div>
    <a href="https://www.instagram.com/kanten_esbjerg/" class="me-20 ms-20"><img class="hover:animate-bounce w-10" src="../assets/instagramkanten.png" alt="instagram"></a>
  </div>
  <div>
    
    <a href="https://discord.gg/BfEfEtq9" class="me-20 ms-20"><img class="hover:animate-bounce w-10" src="../assets/discord-icon.png" alt="discord"></a>
  </div>
  <div> <a href="https://www.facebook.com/kanten.esbjerg" class="me-20 ms-20"><img class="hover:animate-bounce w-10" src="../assets/facebook-icon.png" alt="facebook"></a></div>
</div>

<div class="flex justify-center me-6 mt-5 pb-20 animate-pulse hover:animate-none">
  <a href="mailto: MusikforeningenKanten@gmail.com" class="mailKanten"> MusikforeningenKanten@gmail.com </a>
</div>











  </div>
</template>




<style scoped>
@font-face {
font-family: 'MadeOkine';
src: url('../assets/MADEOkineSansPERSONALUSE-Black.otf') format('woff2');

}
.background{
background-image: url("../assets/KANTENFOND.png");
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
.aboutTitle {
font-weight: 600;
font-size: 30px;
color: #fff;
margin: 20px 40px;
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


.filterGallery {
font-size: 30px;
color: #fff;
font-family: MadeOkine;
}
.filterGallery:hover {
border-bottom: 4px solid #1838a1;
}
.active {
border-bottom: 4px solid #1838a1;
}


/* responsive */
@media screen and (max-width: 600px) {

.filterGallery p{
font-size: 1em;

}




.mailKanten {
font-size: 18px;
text-decoration: none;
color: #fff;
}
.socials{
  margin-left: 2em;
}

}








</style>

<script>



</script>
