// let menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');

// menu.onclick = () => {
//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');
// }

const nav = document.querySelector('.nav');
const navOpen = document.querySelector('.nav_open');

// 마우스가 nav 전체 안에 들어오면 열기
nav.addEventListener('mouseenter', () => {
  navOpen.style.display = 'grid';
});

// 마우스가 nav를 벗어나면 닫기
nav.addEventListener('mouseleave', () => {
  navOpen.style.display = 'none';
});


let section = document.querySelectorAll('section');

window.onscroll = () => {
  // menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    header.classList.add('active');
    nav.classList.add('active');
  } else {
    header.classList.remove('active');
    nav.classList.remove('active');
  }
}

document.querySelector('#search-icons').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
  // spaceBetween : 30,
  // centeredSlides : true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
});



var swiper = new Swiper(".review-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  autoHeight: false,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  centeredSlides: false, // ← false로 변경
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


// 로딩 아이콘
function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');

}

function FadeOut() {
  setInterval(loader, 2000);

}

window.onload = FadeOut;