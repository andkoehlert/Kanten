<script>


</script>


<template>
    
  <div class="">
    
    <div class="relative">
   
        <video autoplay muted loop id="myVideo">
  <source src="../assets/4k.mp4" type="video/mp4">
</video>
        <div class="absolute text-5xl  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            
            <div class="logo ml-60   mix-blend-mode: overlay;" style="  mix-blend-mode: overlay;
">
    <img src="../assets/Kanten.png" class="logo ml-20 h-56 w-56 object-scale-down	" style="mix-blend-mode: overlay;
" alt="">
  </div>
            <hr>
            <ul class="flex items-center gap-[10vw]  ">
    <li>
      <a class="hover:text-red-500 text-white text-lg" href="#">Home</a>
    </li>
    <li>
      <a class="hover:text-red-500 text-white text-lg" >Events</a>
    </li>
    <li>
      <a class="hover:text-red-500 text-white text-lg" href="#">Gallery</a>
    </li>
    <li>
      <a class="hover:text-red-500 text-white text-lg" href="#">About us</a>
    </li>
    <li>
      <a class="hover:text-red-500 text-white text-lg" href="#">Contact</a>
    </li>
  </ul>
        <hr>
        <div class="container m-auto flex grid grid-cols-1 content-around">
           
            <div class=" flex items-center justify-center">
                <button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  class="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  style="background-color: #1877f2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
</button>
<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  class="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  style="background-color: #1877f2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
</button>
<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  class="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  style="background-color: #1877f2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
</button>
            </div>
           
            

        </div>
        
        </div>
        <div class="absolute text-3xl text-amber-400 bottom-3 left-1/2 -translate-x-1/2"> 





        </div>
        <h3 class="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3>
        <div class="absolute text-2xl text-green-300 bottom-5 right-5">

            
        </div>
    </div>
  </div>
</template>


<style>

@import 'bulma/css/bulma.min.css';

#myVideo {
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  
}

.social-icons{
    
}

.social-icons img{
    
}

#myVideo {

}

/* Add some content at the bottom of the video/page */


/* Style the button used to pause/play the video */



.logo{
  mix-blend-mode: overlay;

}




/* responsive */
@media screen and (max-width: 600px) {
  
  .logo{
    width: 1em;
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