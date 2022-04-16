let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");
let Menu = document.querySelectorAll(".N");

// let body = document.querySelector("body");
// console.log(Menu1)

menuBtn.onclick = function(){
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
    // body.style.overflow = "hidden";
}

// Menu.onclick = function(){
//     console.log(Menu[0])
//     navBar.classList.add("navbar-hide")
// }
for (let i = 0; i < Menu.length; i++) {
     Menu[i].onclick=function(){
        navBar.classList.remove("active")
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
     }
  }
cancelBtn.onclick = function(){
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
    // body.style.overflow = "auto";
}

// sticky
let nav = document.querySelector("nav");
let val;
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}


