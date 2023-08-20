const options = document.querySelector('.options');
const menu = document.querySelector('.menu');
const arrow = document.querySelector('.arrow');

options.addEventListener('click',()=>{
   
    arrow.classList.toggle("rotate-180");
    menu.classList.toggle('hidden');

});