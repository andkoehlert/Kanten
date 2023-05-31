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
      <div class="box-content h-auto w-auto p-4 border-0 drop-shadow-xl" style="background-color: #70707066;">
    <h1 class="aboutTitle">
      WANT TO JOIN US?
    </h1>
    <p class="aboutParagraph"> Our ambition is to create an alternative platform for the youth community in Esbjerg, where the music program features a diverse selection of subgenres across genders and identities. On the first floor of Huset Esbjerg's premises, we are creating a youth cultural center and fostering a cultural community among young people. </p>

    <h1 class="aboutTitle rightalign">
      BECOME A MEMBER
    </h1>
    <p class="aboutParagraph">
      The venue "Kanten" is operated by the Kanten Association, a community of young people from Esbjerg and newcomers, who aim to establish a volunteer-driven association with membership opportunities through the opening of Kanten. All types of individuals are welcome, and through music and art events, we aim to enhance the cultural life in Esbjerg.
    </p>
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
    <a href="#" ><img src="../assets/linkedin2.png" alt="linkedin" class="animate-bounce"></a>
  </div>


</div>


    </div>
    
  
</div>

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
}

</style>