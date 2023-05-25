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
    <a class="btn hover:animate-spin" style="width: 160px; height: auto;"><img src="../assets/LogoKanten.png" alt="logotop" ></a>
  </div>
</div>

<div class="flex justify-center mt-10 lg:justify-start lg:mt-6 lg:ms-20">
  <div class="flex-none ...">
    <h1 class="aboutHeader">
      VOLUNTEER
    </h1>
  </div>
</div>

<div class=" flex flex-col lg:grid lg:grid-flow-row-dense lg:grid-cols-3 lg:grid-rows-1 ...  mt-10 h-auto">
    <div class="col-span-2 ms-10 me-10  lg:ms-20">
      <div class="box-content h-auto w-auto p-4 border-0 drop-shadow-xl" style="background-color: #707070;">
    <h1 class="aboutTitle">
      WANT TO JOIN US?
    </h1>
    <p class="aboutParagraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, 
      nesciunt. Voluptas consequuntur dolores voluptatibus cum volu
      ptate quaerat molestiae maiores temporibus, ab praesentium eve
      niet consectetur accusamus asperiores, labore, eum ut nihil? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Dolorem, magni. Earum aliquam deserunt quasi eveniet cum
      saepe, quos sed mollitia hic id natus perferendis facere aut tempora provident veniam rem!</p>

    <h1 class="aboutTitle rightalign">
      BECOME A MEMBER
    </h1>
    <p class="aboutParagraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, 
      nesciunt. Voluptas consequuntur dolores voluptatibus cum volu
      ptate quaerat molestiae maiores temporibus, ab praesentium eve
      niet consectetur accusamus asperiores, labore, eum ut nihil? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Dolorem, magni. Earum aliquam deserunt quasi eveniet cum
      saepe, quos sed mollitia hic id natus perferendis facere aut tempora provident veniam rem!</p>
  </div>
    </div>
    
    <div class="me-10 ms-10 lg:me-20 lg:ms-10 mt-10 lg:mt-0">

      <div style="border-color: #ffffff55;" class="box-content h-auto w-auto pt-0 pe-4 ps-4  border-2 flex flex-col justify-center mt-1 lg:me-0 lg:ms-0 sm:me-32 sm:ms-32 me-0 ms-0">

        <h1 class="newsletterTitle w-82 me-auto ms-auto mt-10 lg:mt-10 animate-pulse">
          INTERESTED IN BECOMING A SUBSCRIBER?
        </h1>
       
        <button type="submit" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
        focus:ring-blue-300 font-medium rounded-3xl text-sm w-32 xl:w-56 2xl:w-64 me-auto ms-auto mt-10 mb-10 p-3  text-center dark:bg-blue-600 
        dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBSCRIBE</button>
        

      </div>

      <div class="box-content h-auto w-auto pt-0 pe-4 ps-4  border-0 flex flex-col justify-center ">

      <h1 class="newsletterTitle w-auto me-auto ms-auto mt-10 lg:mt-16">
       VISIT US ON LINKEDIN
      </h1>

      <div class="me-auto ms-auto mt-10">
    <a href="#" ><img src="../assets/linkedin (2).png" alt="linkedin" class="animate-bounce"></a>
  </div>


</div>


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