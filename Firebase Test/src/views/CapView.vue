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
      <li><RouterLink to="/about" class="hover:text-white">ABOUT US</RouterLink>
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

      <li><RouterLink to="/voluenteer" class="hover:text-white">VOLUNTEER</RouterLink></li>

      <span class="slash">\</span>

      <li><RouterLink to="/about" class="hover:text-white"> ABOUT US</RouterLink></li>

      <span class="slash">\</span>

      <li> <RouterLink to="/gallery" class="hover:text-white">GALLERY</RouterLink></li>

      <span class="slash">\</span>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn" style="width: 160px; height: auto;"><img src="../assets/LogoKanten.png" alt="logotop" style="height: auto; width: 160px;"></a>
  </div>
</div>
  
<div class="flex justify-center mt-10 lg:justify-start lg:mt-6 lg:ms-20">
  <div class="flex-none ...">
    <h1 class="aboutHeader">
      <RouterLink to="/merch" class="aboutHeader">MERCH</RouterLink>
    </h1>
  </div>
  
</div>


<div class="flex flex-col lg:flex-row justify-around mt-20">
 
  <div class="shrink-0 h-auto">
    <div class="card card-compact ms-auto me-auto lg:me-0 lg:ms-0 w-96 p-0 bg-base-100 shadow-xl">
     
      <div class="w-96 carousel rounded-box me-auto ms-auto">
  <div class="carousel-item w-full">
    <img src="../assets/DeftCap.png" class="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div class="carousel-item w-full">
    <img src="../assets/ManaClubCap.png" class="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div class="carousel-item w-full">
    <img src="../assets/VertexCap.png" class="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div class="carousel-item w-full">
    <img src="../assets/XmassiveCap.png" class="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  
</div>
  
  <div class="card-body text-white bg-black">
    <h2 class="card-title text-white  font-bold transition cursor-pointer
     ">KANTEN CAP</h2>
    <p class="text-xs">DEFT, MANACLUB, VERTEX, X-MASSIVE DUB</p>
    <div class="card-actions justify-end">
    </div>
  </div>
  </div>
  </div>
  

  <div class="shrink-0 lg:mt-0 mt-10">
    <div class=" grid ">
        <h1 class="itemName  cursor-pointer lg:me-0 lg:ms-0  me-auto ms-auto">
          KANTEN CAP
        </h1>
        <p class="itemPrice lg:justify-end justify-center flex  lg:flex  ">
          100 DKK,-
      </p>

      <div class="flex justify-start lg:flex lg:me-0 lg:ms-0 me-auto ms-auto ">
              <button class="w-10 h-10 rounded-full 
                               m-3">
                               <img src="../assets/DeftLogo.png" alt="deftmerch">
                  
              </button>
              <button class="w-10 h-10 rounded-full 
                               m-3">
                              <img src="../assets/ManaLogo.png" alt="deftmerch">
              </button>
              <button class="w-10 h-10 rounded-full 
                               m-3">
                               <img src="../assets/VertexLogo.png" alt="deftmerch">
              </button>
              <button class="w-10 h-10 rounded-full
                               m-3">
                              <img src="../assets/XLogo.png" alt="deftmerch">
              </button>
      </div>

      
      
       
      <div class="flex  justify-center lg:justify-end mt-5 lg:mt-10  lg:ms-0 ms-0">
        <RouterLink to="/CheckOut"
            class="flex px-24 py-2 text-sm  font-medium  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 grid justify-center items-center"
            
            >BUY NOW</RouterLink>
      </div>
   </div>
  </div>
</div>





<!--
  <div class=" relative h-fit lg:flex items-center  justify-around">

  <div class="card card-compact ms-auto me-auto lg:me-0 lg:ms-0 w-96 p-0 bg-base-100 shadow-xl">
  <figure>
    <div class="carousel flex justify-around">
    
    <div class="carousel rounded-box w-96">
  <div class="carousel-item w-1/2">
    <img src="../assets/Cap.webp" class="w-full" />
  </div> 
  <div class="carousel-item w-1/2">
    <img src="../assets/Cap.webp" class="w-full" />
  </div> 
  <div class="carousel-item w-1/2">
    <img src="../assets/Cap.webp" class="w-full" />
  </div> 
  <div class="carousel-item w-1/2">
    <img src="../assets/Cap.webp" class="w-full" />
  </div> 
  <div class="carousel-item w-1/2">
    <img src="../assets/Cap.webp" class="w-full" />
  </div> 
  <div class="carousel-item w-1/2">
    <img src="../assets/Cap.webp" class="w-full" />
  </div> 
  <div class="carousel-item w-1/2">
    <img src="../assets/Cap.webp" class="w-full" />
  </div>
</div>
</div>
  
  </figure>
  
  <div class="card-body text-white bg-black">
    <h2 class="card-title text-white  font-bold transition cursor-pointer
     ">OUR CAP</h2>
    <p class="text-xs">SHOW SOME LOVE FOR YOUR FORVOURITE EVENT</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
     
   
   
   <div class="buy grid justify-around py-40">
     <h1 class="itemName flex  font-bold transition cursor-pointer
      ">
       KANTEN CAP
     </h1>
     <p class="py-2 itemPrice">
    100 DKK,-
  </p>
  <div class="flex gap-10 mb-3">
  
  <p class="cursor-pointer	sizeDisplay">  
    XL
    <p class="cursor-pointer	sizeDisplay">
    L
    </p>
<p class="cursor-pointer	sizeDisplay">
M
</p>
<p class="cursor-pointer sizeDisplay">
S
</p>
  </p>
     </div>
   
     <div class=" gap-4 flex py-2">
           <button class="w-10 h-10 rounded-full 
                          bg-blue-500 ">
               
           </button>
           <button class="w-10 h-10 rounded-full 
                          bg-red-500 ">
               
           </button>
           <button class="w-10 h-10 rounded-full 
                          bg-yellow-500 ">
               
           </button>
           <button class="w-10 h-10 rounded-full 
                          bg-white ">
               
           </button>
   </div>
   <div class="flex">
     <RouterLink to="/CheckOut"
         class="flex px-3 py-2 text-sm mt-6 font-medium  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 grid justify-center items-center"
         
         >BUY NOW</RouterLink>
   </div>
   </div>
   
   </div>
  -->

  <div class="flex justify-center mt-10 ">
  <div>
    <a href="https://www.instagram.com/kanten_esbjerg/" class="me-20 ms-20"><img class="hover:animate-bounce w-10" src="../assets/instagramkanten.png" alt="instagram"></a>
  </div>
  <div>
    
    <a href="https://discord.gg/BfEfEtq9" class="me-20 ms-20"><img class="hover:animate-bounce w-10" src="../assets/discord-icon.png" alt="discord"></a>
  </div>
  <div> <a href="https://www.facebook.com/kanten.esbjerg" class="me-20 ms-20"><img class="hover:animate-bounce w-10" src="../assets/facebook-icon.png" alt="facebook"></a></div>
</div>

<div class="flex justify-center me-6 mt-5 pb-20 animate-pulse hover:animate-none">
  <a href="#" class="mailKanten"> MusikforeningenKanten@gmail.com </a>
</div>

   
   
      </div>


 
   </template>
   
   
   <script>
   
   
   </script>
   
   <style scoped>
   .background{
  background-image: url("../assets/KANTENFOND.png");
}
   .image_wrapper {
  position: relative;
}

.overlay {
  position: absolute; 
  left: 0;
  top: 0;
}
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
     .itemName {
      color: #fff;
      font-size: 90px;
      text-shadow: 4px 4px #1838a1;
      font-family: MadeOkine;
     }
     .itemPrice {
      font-size: 30px;
      font-weight: 500;
      color: #ffffff;
      
      font-family: MadeOkine;
     }
     .sizeDisplay {
      font-size: 25px;
      font-weight: 500;
      color: #d4d4d4;
      font-family: MadeOkine;
     }  
    .sizeDisplay:hover {
      text-shadow: 4px 4px #1838a1;
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
     
    .itemName {
      font-size: 50px;
    }
   
   
   
  
   
     }
   
   
   
   
   </style>
     
   <script>
   
   
   </script>
   
   