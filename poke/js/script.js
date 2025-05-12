const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.navbar');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-xmark');
    nav.classList.toggle('active');
});

window.onscroll = () => {
    menuBtn.classList.remove('fa-xmark');
    nav.classList.remove('active');

    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}