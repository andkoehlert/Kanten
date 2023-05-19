<template>

<!-- Navbar-->

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
        <i class="fa-sharp fa-solid fa-bars"></i>
    </a>
    <div class="kanten-logo">
            <img src="../assets/Logo Standart.png" alt="shit">
           </div>
</nav>




<!-- HEADING-->

<div class="flex justify-start gap-5 h-40 ps-20 text-white mt-6">
  <div>
    <h1 class="
    text-7xl font-bold transition cursor-pointer
     duration-150 border-b-8  
     border-purple-500">Gallery</h1>
  </div>
  
</div>

<!-- Filter-->

<div class="gallery_h2 flex justify-start gap-10 h-56 ps-20 text-white">
  <div>
    <p class="
    text-5xl font-bold transition cursor-pointer
     duration-150 border-b-8 border-transparent 
     hover:border-purple-500">
All</p>
  </div>
  <div>
    <p class="
    text-5xl font-bold transition cursor-pointer
     duration-150 border-b-8 border-transparent 
     hover:border-purple-500">Photos</p>
  </div>
  <div>
    <p class="
    text-5xl font-bold transition cursor-pointer
     duration-150 border-b-8 border-transparent 
     hover:border-purple-500">Videos</p>
  </div>
</div>


<!-- Photo Grid-->


<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg group-hover:opacity-50 transition duration-300 ease-in-out hover:scale-110
        " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="">
    </div>
</div>

<!-- Buttons socials-->


<div class="container m-auto flex grid grid-cols-1 content-around">
           
           <div class=" flex items-center justify-center h-40">
              
<!-- Buttons socials-->
            
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
  style="background-color: #c13584">
  <svg
  xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
</button>
  <button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  class="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  style="background-color: #1769ff">
  <svg
  xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
    d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
  </svg>
</button>
           </div>
                </div>

<!-- socials-->

                 <div class="container m-auto flex grid grid-cols-1 content-around text-white">
           
            <div class=" flex items-center justify-center">
               
 <!--  socials-->
 kanten@gmail.com
            
            
            </div>
           
            

        </div>






</template>


<style>

body{
    background-color: black;
}
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
      background-color: #ddd;
      color: black;
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
      }
      .slash {
        display: none;
      }
    }
    @media screen and (max-width: 700px) {
      .navbar.responsive {
        position: relative;
      }
    
      .navbar.responsive .icon {
        position: absolute;
        right: 0;
        top: 0;
      }
    
      .navbar.responsive a {
        float: none;
        display: block;
        text-align: left;
      }
    }

/* responsive */
@media screen and (max-width: 600px) {
  
  .gallery_h2 p{
font-size: 1em;
    
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