let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar')

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
}

//Typing the text

const typed = new Typed(".multiple-text", {
    strings: ['Physical Fitness', 'Weight Gain','Fat loss','Strength Training','Weight Lifting','Cardio'],
    typeSpeed: 60,
    backSpeed:60,
    backDelay:1000,
    loop:true,
  });