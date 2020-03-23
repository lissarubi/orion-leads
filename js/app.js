window.onload = function(){
const startForm = document.querySelector('button#startForm')
const toggleButton = document.querySelector('a.toggle-button')
const navlinks = document.querySelector('div.navlinks')
 
// Hamburger Menu
toggleButton.addEventListener('click', ()=>{
    navlinks.classList.toggle('active')
})

startForm.addEventListener('click', function(){
    const formBox = document.querySelector('div#formBox')
    formBox.style.display = 'block'
    startForm.scrollIntoView()
})  
}
