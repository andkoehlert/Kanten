


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

      <li><RouterLink to="/about" class="hover:text-white"> ABOUT US</RouterLink></li>
     
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


<div class=" justify-center md:flex gap-10">
  <div>
    <div class="max-w-sm p-10 mx-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
  <a href="#"
  class="justify-center items-center	"
  >
        <img class="event_logo h-48 w-48 justify-center items-center	" src="../assets/DeftLogo.png" 
        
        alt="" 
        
        
        />
    </a>
    <h1 class="mb-3 font-normal text-white grid justify-center items-center mt-6">DEFT</h1>
    <RouterLink to="/deft"
      class="inline-flex items-center px-3 py-2 text-sm mt-6 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 grid justify-center items-center"
      
      >Read more</RouterLink>
  
</div>
</div>
  <div>
<div class="max-w-sm p-10 mx-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
  <a href="#"
  class="justify-center items-center	"
  >
        <img class="event_logo h-48 w-48 justify-center items-center	" src="../assets/VertexLogo.png" 
        
        alt="" 
        
        
        />
    </a>
    <h1 class="mb-3 font-normal text-white grid justify-center items-center mt-6">VERTEX</h1>
    <RouterLink to="/vertex"
      class="inline-flex items-center px-3 py-2 text-sm mt-6 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 grid justify-center items-center"
      
      >Read more</RouterLink>

</div>
</div>
</div>
<div class=" justify-center md:flex gap-10">
  <div>
    <div class="max-w-sm p-10 mx-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
  <a href="#"
  class="justify-center items-center	"
  >
  <img class="event_logo h-48 w-48 justify-center items-center	" src="../assets/XLogo.png" 
        
        alt="" 
        
        
        />
    </a>
    
    <h1 class="mb-3 font-normal text-white grid justify-center items-center mt-6">X-MASSIVE-DUB</h1>
      <RouterLink to="/xmassive"
      class="inline-flex items-center px-3 py-2 text-sm mt-6 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 grid justify-center items-center"
      
      >Read more</RouterLink>

    
</div>
</div>
  <div>
<div class="max-w-sm p-10 mx-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
  <a href="#"
  class="justify-center items-center	"
  >
        <img class="event_logo h-48 w-48 justify-center items-center	" src="../assets/ManaLogo.png" 
        
        alt="" 
        
        
        />
    </a>
    <h1 class="mb-3 font-normal text-white grid justify-center items-center mt-6">MANA CLUB</h1>
    <RouterLink to="/manaclub"
      class="inline-flex items-center px-3 py-2 text-sm mt-6 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 grid justify-center items-center"
      
      >Read more</RouterLink>
    
</div>
</div>
</div>



<!--<div class="grid grid-cols-6 gap-4 mb-20">
  <div class="col-start-2  ...">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">X-MASSIVE-DUB</h5>
        </a>
        <h1 class="mb-3 font-normal text-gray-700 dark:text-gray-400">description</h1>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">X-MASSIVE-DUB is a new.......</p>

        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
  </div>
  <div class="col-start-5">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">X-MASSIVE-DUB</h5>
        </a>
        <h1 class="mb-3 font-normal text-gray-700 dark:text-gray-400">description</h1>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">X-MASSIVE-DUB is a new.......</p>

        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
  </div>
  <div class="col-start-2  ...">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">X-MASSIVE-DUB</h5>
        </a>
        <h1 class="mb-3 font-normal text-gray-700 dark:text-gray-400">description</h1>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">X-MASSIVE-DUB is a new.......</p>

        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
  </div>
  <div class="col-start-5">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">X-MASSIVE-DUB</h5>
        </a>
        <h1 class="mb-3 font-normal text-gray-700 dark:text-gray-400">description</h1>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">X-MASSIVE-DUB is a new.......</p>

        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
  </div>
</div>
 -->
<!-- Dropdown menu -->
<div  class=" py-4 flex items-center justify-center  overflow-hidden"
>

<svg
  class="h-5 w-5"
  fill="currentColor"
  style="color: #fff"
  viewbox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  fill-rule="evenodd"
  clip-rule="evenodd">
  <path
    d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
</svg>

<!-- Facebook -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-5 w-5"
  fill="currentColor"
  style="color: #fff"
  viewBox="0 0 24 24">
  <path
    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-5 w-5"
  fill="currentColor"
  style="color: #fff"
  viewBox="0 0 24 24">
  <path
    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
</svg>


 </div>

 
 <div class="relative flex items-center justify-center text-white  overflow-hidden">
<h1>
  kanten@gmail.com
</h1>
</div>

        </div>
</template>

<style>
 .background{
  background-image: url("../assets/KANTENFOND.png");
}

    /* CSS styles for the navigation */
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #181717;
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


    .x{
    font-size: 5em;
  text-shadow: 2px 2px #648af3;

    }

.event_logo{

}

       
   /* responsive */
   @media screen and (max-width: 600px) {
     
  .event_logo{
  padding-left: 3em;
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
