<script>


</script>


<template>
    <div class="background">

<header
  class="relative h-screen flex items-center justify-center  overflow-hidden"
>
  <div
    class="relative z-30 p-5 text-2xl text-white  bg-opacity-50 rounded-xl "
  >
  <div class="logo content-center relative flex items-center justify-center mb-12 ">
    
    <img src="../assets/Kanten.png" class="logo_home mt-32 h-56 w-56 object-scale-down bg-blend-screen 	;
" alt="">

  </div>

 <nav class="navbar_2 ">
  <ul class="home_nav md:flex	 items-center gap-10	  ">

    <li class="vol my-4">
      <RouterLink  to="/voluenteer" class=" hover:text-white text-white text-2xl font-bold transition
     duration-150 border-b-8 border-transparent 
     sm:hover:border-blue-800" >VOLUNTEER</RouterLink>
    </li>
    <li class="my-4">
      <RouterLink to="/event"
      class="hover:text-white text-white text-2xl font-bold transition
     duration-150 border-b-8 border-transparent 
     sm:hover:border-blue-800"
      
      
      >EVENTS</RouterLink>

    
    </li>
    <li class="my-4">
      <RouterLink to="/gallery"
      class="hover:text-white text-white text-2xl font-bold transition
     duration-150 border-b-8 border-transparent 
     sm:hover:border-blue-800"
      >GALLERY</RouterLink>

     
    </li>
    <li class="my-4">
      <RouterLink to="/about"
      class="hover:text-white text-white text-2xl font-bold transition
     duration-150 border-b-8 border-transparent 
     sm:hover:border-blue-800"
      >ABOUT</RouterLink>

      
    </li>
    <li class="my-4">
      <RouterLink to="/merch"
      class=" hover:text-white text-white text-2xl font-bold transition
     duration-150 border-b-8 border-transparent 
    sm: hover:border-blue-800"
      >MERCH</RouterLink>

    
    </li>
  </ul>
 </nav>

 
 
 <div class="socialss flex justify-center  ">
  <div>
    <a href="https://www.instagram.com/kanten_esbjerg/" class="me-20 ms-20"><img class="hover:animate-bounce w-10" src="../assets/instagramkanten.png" alt="instagram"></a>
  </div>
  <div>
    
    <a href="https://discord.gg/BfEfEtq9" class="me-20 ms-20"><img class="hover:animate-bounce w-10" src="../assets/discord-icon.png" alt="discord"></a>
  </div>
  <div> <a href="https://www.facebook.com/kanten.esbjerg" class="me-20 ms-20"><img class="hover:animate-bounce w-10" src="../assets/facebook-icon.png" alt="facebook"></a></div>
</div>

<div class="flex justify-center   pb-20 animate-pulse hover:animate-none">
  <a href="mailto: MusikforeningenKanten@gmail.com" class="mailKanten"> MusikforeningenKanten@gmail.com </a>
</div>


</div>



  <video
  id="background-video"
  md:autoplay  
  autoplay
    loop
    muted
    class="video absolute z-10 w-100"
  > 
    <source
      src="../assets/4k.mp4"
    />
  </video>
</header>



    </div>
</template>


<style setup>

@import 'bulma/css/bulma.min.css';

@font-face {
  font-family: 'MadeOkine';
  src: url('../assets/MADEOkineSansPERSONALUSE-Black.otf') format('woff2');
  
  
}

body {
  margin: 0;
  padding: 0;
  font-family: MadeOkine;
  margin: 0px;
   min-height: 10vh;
}




/* Add some content at the bottom of the video/page */
.content {
  position: absolute;
  bottom: 0;
  width: 100%;

}
.content h1, .content h2{
  color: #ddd;
}
/* Style the button used to pause/play the video */


#myBtn:hover {
  background: #ddd;
  color: black;
}

.logo{
  mix-blend-mode:difference;
}

.content h1, .content h2{
  color: white;
}

.mailKanten {
  font-size: 25px;
  text-decoration: none;
  color: #fff;
}
.mailKanten:hover {
  color: #c7c7c7;
}

/* medieQ*/
@media screen and (max-width: 1200px) {
  
  .logo_home{
 width: 150px;
 margin-right: 40px;
 padding-top: 80px;
}

  .video{
  max-width: none;
  }
  .background{
  background-image: url("../assets/KANTENFOND.png");
}
.video{
  display: none;
}
  }

  


@media screen and (max-width: 600px) {
  
  .background{
  background-image: url("../assets/KANTENFOND.png");
}

.logo_home{
 width: 150px;
 margin-left: 70px;
 padding-top: 80px;
}

.video{
  display: none;
}
  
 

  .line_1{
  width: 250px;
}

.line{
  display: none;
}
  .navbar_2 ul li a{

padding-left: 4em;

  }

.socialss{
  margin-left: 2em;
}

  .video{
  max-width: none;
  }
  .mailKanten {
font-size: 18px;
text-decoration: none;
color: #fff;
}
  }

  


</style>

<script>


// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


</script>