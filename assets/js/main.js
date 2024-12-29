const navbar = document.querySelector('.navbar')
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const overLay = document.querySelector('.overlay')
const links = document.querySelectorAll('.link')
const topBtn = document.querySelector('.top-btn')

const toggleMenu = function(){
    navbar.classList.toggle('active')
    overLay.classList.toggle('active')
}

openMenu.addEventListener('click',toggleMenu)
closeMenu.addEventListener('click',toggleMenu)
overLay.addEventListener('click',toggleMenu)
links.forEach(function(link){
    link.addEventListener('click',toggleMenu)
})

//Header slide-in animation on scroll 
const header = document.querySelector('.header')
window.addEventListener('scroll',function(){
    if(this.scrollY > 100){
        header.classList.add('active')
        topBtn.classList.add('active')
    }else{
        header.classList.remove('active')
        topBtn.classList.remove('active')
    }
})

const date = document.querySelector('#date')

date.innerHTML = new Date().getFullYear();