const button = document.querySelector('button');/*me permite selecionar os dois elementos  */
const nav    = document.querySelector('nav');

button.addEventListener('click',()=>{
  nav.classList.toggle('activo')
})