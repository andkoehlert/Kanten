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
        <RouterLink to="/about" class="hover:text-white">ABOUT US</RouterLink>
      </li>
      <li>
    <RouterLink to="/voluenteer" class="hover:text-white">VOLUNTEER</RouterLink>
  </li>
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

      <li>  <RouterLink to="/about" class="hover:text-white">ABOUT US</RouterLink> </li>
     
      <span class="slash">\</span>

      <li><RouterLink to="/voluenteer" class="hover:text-white">VOLUNTEER</RouterLink></li>

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

 
     <div class="col-start-2 m-20 borderEvent">
       <RouterLink to="/event" class="pb-1 eventBack">EVENTS</RouterLink>
     </div>
     <div class="flex justify-center">
       <div>
         <h2 class=" mt-0 eventHeader">
           DEFT
         </h2>
       </div>
       
     </div>
     <div class="flex justify-center py-4">
  <img class="logo w-48 h-48" src="../assets/DeftLogo.png" alt="">

</div>
    <!-- 
     <div class="flex  w-full justify-center items-center">
     <img src="../assets/LogoKanten.png">
   </div>
    --> 
    <div class="block flex justify-start py-4 md:px-40">
<h1 class="eventTitles">PAST EVENTS</h1>

</div>
<div class="block1 block flex justify-center px-40     ">
   <div class="  text-white rounded-lg    " style="background-color: #1838a166;">
   <p class="eventText block  text-white-800 p-8  ">X-Massive DUB takes you back to the roots on the 2nd of December! 

On this evening in cold December, we celebrate everything about 
dancehall, reggae, dub and its sound system culture.
We've assembled a team of DJ selectors who will spin all the vinyl you didn't know you loved.

The event is FREE, so let's get together and enjoy a good evening of bass together.
 It will be nothing less than smoking hot, despite the time of year. 




</p>
<div class=" grid justify-center">
  <h1 class="py-2 eventText">PROGRAM:</h1>
 <p class="py-1 eventText"> 19:00 - 20:00: DOORS OPEN
</p>

<p class="py-1 eventText"> 20:00 - 21:00: PAPASKRALD & MIKE PINTO
</p>
<p class="¨py-1 eventText"> 21:00 - 22:30: SELEKTA PUPA IHRHAMM
</p>
<p class="py-1 eventText"> 22:30 - 00:30: RAS MONEY (RASKE PENGE)
</p>
<p class="pt-1 pb-10 eventText"> 00:30 - 02:00: JALIX SOUND
</p> 

 </div>
   </div>

</div>
   




<div class=" block flex justify-end py-4 sm:px-40">
<h1 class="eventTitles">UPCOMING EVENTS</h1>

</div>
<div class="block1 block flex justify-center     ">
   <div class="text-white rounded-lg " style="background-color: #1838a166;">
   <p class="block  text-white-800 p-8  eventText">Unfortunately they are no upcoming events.
Follow us on Instagram and Facebook for future updates! 
</p>
   </div>

</div>
   
<div class="flex justify-center mt-20">
  <div>
    <a href="#" class="me-20 ms-20"><img class="hover:animate-bounce" src="../assets/instagram-icon.png" alt="instagram"></a>
  </div>
  <div>
    <a href="#" class="me-20 ms-20"><img class="hover:animate-bounce" src="../assets/discord-icon.png" alt="discord"></a>
  </div>
  <div> <a href="#" class="me-20 ms-20"><img class="hover:animate-bounce" src="../assets/facebook-icon.png" alt="facebook"></a></div>
</div>

<div class="flex justify-center me-6 mt-5 pb-20 animate-pulse hover:animate-none">
  <a href="#" class="mailKanten"> kanten@gmail.com </a>
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
.eventHeader {
  color: #fff;
  font-size: 90px;
  text-shadow: 4px 4px #1838a1;
  font-family: MadeOkine;
}
.eventBack {
  font-size: 30px;
  color: #fff;
  font-family: MadeOkine;
  text-shadow: 4px 4px #1838a1;
}
.borderEvent {
border-bottom: 4px solid #1838a1;
}  
 .logo{
  color: #111010;
 }
 
 .eventTitles {
  color: #fff; 
  font-family: MadeOkine;
  font-size: 25px;
 }  
 .eventText {
  font-family: "mundial", sans-serif;
  text-align: justify;

 }   
 
 .mailKanten {
  font-size: 25px;
  text-decoration: none;
  color: #fff;
}
.mailKanten:hover {
  color: #c7c7c7;
}
 /* responsive */
 @media screen and (max-width: 600px) {
   
   .gallery_h2 p{
 font-size: 1em;
     
   }
 
 .block1{
  padding: 1em;
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
 
 