<template> 
<link rel="stylesheet" href="https://use.typekit.net/rlp2nwr.css">
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

<div class="flex justify-center mt-10 lg:justify-start lg:mt-6 lg:ms-20">
  <div class="flex-none ...">
    <h1 class="aboutHeader">
      ABOUT US
    </h1>
  </div>
  
</div>

<div class=" flex flex-col lg:grid lg:grid-flow-row-dense lg:grid-cols-3 lg:grid-rows-1 ...  mt-10 h-auto">
    <div class="col-span-2 ms-10 me-10  lg:ms-20">
      <div class="box-content h-auto w-auto p-4 border-0 drop-shadow-xl" style="background-color: #70707066;">
    <h1 class="aboutTitle">
      WHO ARE WE?
    </h1>
    <p class="aboutParagraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, 
      nesciunt. Voluptas consequuntur dolores voluptatibus cum volu
      ptate quaerat molestiae maiores temporibus, ab praesentium eve
      niet consectetur accusamus asperiores, labore, eum ut nihil? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Dolorem, magni. Earum aliquam deserunt quasi eveniet cum
      saepe, quos sed mollitia hic id natus perferendis facere aut tempora provident veniam rem!</p>

    <h1 class="aboutTitle rightalign">
      OUR LOCAL DJS
    </h1>
    <p class="aboutParagraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, 
      nesciunt. Voluptas consequuntur dolores voluptatibus cum volu
      ptate quaerat molestiae maiores temporibus, ab praesentium eve
      niet consectetur accusamus asperiores, labore, eum ut nihil? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Dolorem, magni. Earum aliquam deserunt quasi eveniet cum
      saepe, quos sed mollitia hic id natus perferendis facere aut tempora provident veniam rem!</p>
  </div>
    </div>
    
    <div class="me-10 ms-10 lg:me-20 lg:ms-10">
      <div class="box-content h-auto w-auto pt-0 pe-4 ps-4  border-0 ... ">
        <h1 class="newsletterTitle w-64 me-auto ms-auto mt-10 lg:mt-0 animate-pulse">
          SIGN UP FOR OUR NEWSLETTER
        </h1>
        <form style="border-color: #ffffff55;" class="newsletterForm  ms-4 me-4 sm:ms-32 sm:me-32 lg:ms-auto lg:me-auto mt-8 border-2 xl:p-4 p-auto  flex flex-col justify-center ">
          

        <input type="text" id="email" class="m-4 rounded-2xl p-3" placeholder="First Name" required>
        <input type="text" id="email" class="m-4 rounded-2xl p-3" placeholder="Last Name" required>
        <input type="email" id="email" class="m-4 rounded-2xl p-3" placeholder="E-mail" required>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
        focus:ring-blue-300 font-medium rounded-3xl text-sm w-32 xl:w-56 2xl:w-64 me-auto ms-auto mt-10 mb-10 p-3  text-center dark:bg-blue-600 
        dark:hover:bg-blue-700 dark:focus:ring-blue-800">SIGN IN</button>
        </form>

      </div>
    </div>

    <div class="col-span-3 mt-20 sm:me-28 me-0">
      <h1 class="locationtag">
        FIND US HERE 
      </h1>
    </div>

    <div class="col-span-3">
      <div class="relative w-full h-96 mt-10">
    <iframe class="absolute top-0 left-0 w-full h-full"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10417.211223456492!2d8.450884727933229!3d55.46840642455781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b212b863b9f21%3A0xda996a903b7c0df7!2sFinsensgade%201%2C%206700%20Esbjerg!5e0!3m2!1sen!2sdk!4v1685091990244!5m2!1sen!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
    </iframe>
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
.rightalign {
  text-align: end;
}
.aboutParagraph {
  font-size: 18px;
  margin: 40px;
  color: #fff;
  text-align: justify;
  font-family: "mundial", sans-serif;
  font-weight: 100;
  font-style: normal;
}
.newsletterTitle {
  text-align: center;
  color: #fff;
  font-size: 25px;
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
.locationtag {
  font-size: 45px;
  font-weight: 400;
  text-align: end;
  color: #fff;
  text-shadow: 4px 4px #1838a1;
  font-family: MadeOkine;
}
@media screen and (max-width:650px) {
  .aboutTitle {
    text-align: center;
    font-size: 20px;
  }
  .aboutTitle .rightalign {
    text-align: center;
  }
  .aboutParagraph {
    font-size: 12px;
  }
  .locationtag {
    text-align: center;
    font-size: 35 px;
  }
}
  </style>
  
 


<!--
   <div class="me-10 ms-10 lg:me-20 lg:ms-10">
      <div class="box-content h-auto w-auto pt-0 pe-4 ps-4  border-0 ... ">
        <h1 class="newsletterTitle w-64 me-auto ms-auto mt-10 lg:mt-0 animate-pulse">
          SIGN UP FOR OUR NEWSLETTER
        </h1>
        <form style="border-color: #ffffff55;" class="newsletterForm  ms-4 me-4 sm:ms-32 sm:me-32 lg:ms-auto lg:me-auto mt-8 border-2 xl:p-4 p-auto  flex flex-col justify-center ">
          

        <input type="text" id="email" class="m-4 rounded-2xl p-3" placeholder="First Name" required>
        <input type="text" id="email" class="m-4 rounded-2xl p-3" placeholder="Last Name" required>
        <input type="email" id="email" class="m-4 rounded-2xl p-3" placeholder="E-mail" required>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
        focus:ring-blue-300 font-medium rounded-3xl text-sm w-32 xl:w-56 2xl:w-64 me-auto ms-auto mt-10 mb-10 p-3  text-center dark:bg-blue-600 
        dark:hover:bg-blue-700 dark:focus:ring-blue-800">SIGN IN</button>
        </form>

      </div>
    </div>
-->