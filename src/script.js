let menu = document.getElementById('menu');
let close = document.getElementById('close-btn');
let navitem = document.getElementById('nav-items');
let theme = document.getElementById('theme');
let section = document.getElementById('home');
const header = document.querySelector('#header');

const nav_link = document.querySelectorAll('.nav-link');

nav_link.forEach((link)=>{
    navitem.addEventListener('click',()=>{
        navitem.classList.toggle('hidden');
    })
})

menu.addEventListener('click',()=>{
    navitem.classList.remove('hidden');
    section.style.opacity = 0.2;
})

close.addEventListener('click',function(){
    navitem.classList.add('hidden');
    section.style.opacity=1;
})


