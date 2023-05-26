<script>


</script>


<template>
<header
  class="relative h-screen flex items-center justify-center  overflow-hidden"
>
  <div
    class="relative z-30 p-5 text-2xl text-white  bg-opacity-50 rounded-xl "
  >
  <div class="logo content-center relative flex items-center justify-center mb-12  ">
    
    <img src="../assets/Kanten.png" class="logo  h-56 w-56 object-scale-down bg-blend-screen 	;
" alt="">

  </div>
  <hr class="line sm:invisible md:visible ">

 <nav class="navbar_2">
  <ul class="home_nav md:flex	 items-center gap-10	  ">
    <hr class="md:invisible">

    <li>
      <RouterLink  to="/voluenteer" class="hover:text-white text-white text-2xl font-bold transition
     duration-150 border-b-8 border-transparent 
     hover:border-purple-500" >VOLUNTEER</RouterLink>
    </li>
    <hr  class="line_1 md:invisible ">
    <li>
      <RouterLink to="/event"
      class="hover:text-white text-white text-2xl font-bold transition
     duration-150 border-b-8 border-transparent 
     hover:border-purple-500"
      
      
      >EVENTS</RouterLink>

    
    </li>
    <hr  class="line_1 md:invisible">
    <li>
      <RouterLink to="/gallery"
      class="hover:text-white text-white text-2xl font-bold transition
     duration-150 border-b-8 border-transparent 
     hover:border-purple-500"
      >GALLERY</RouterLink>

     
    </li>
    <hr  class="line_1 md:invisible">
    <li>
      <RouterLink to="/about"
      class="hover:text-white text-white text-2xl font-bold transition
     duration-150 border-b-8 border-transparent 
     hover:border-purple-500"
      >ABOUT</RouterLink>

      
    </li>
    <hr  class="line_1 md:invisible">
    <li>
      <RouterLink to="/merch"
      class="hover:text-white text-white text-2xl font-bold transition
     duration-150 border-b-8 border-transparent 
     hover:border-purple-500"
      >MERCH</RouterLink>

    
    </li>
    <hr  class="line_1 md:invisible">
  </ul>
 </nav>

 
  <hr class="line_1 sm:invisible md:visible">
 
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



  <video
    autoplay
    loop
    muted
    class="video absolute z-10 w-auto"
  > 
    <source
      src="../assets/4k.mp4"
    />
  </video>
</header>




</template>


<style>

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



/* medieQ*/
@media screen and (max-width: 1200px) {
  
 

  .video{
  max-width: none;
  }

  }

  


@media screen and (max-width: 600px) {
  
  

  .line_1{
  width: 250px;
}

.line{
  display: none;
}
  .navbar_2 ul li a{

padding-left: 2.7em;

  }

  .video{
  max-width: none;
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