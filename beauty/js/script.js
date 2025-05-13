let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  // 메뉴버튼 클릭 시 fa-time, active 클래스를 추가 
}

// 변수 
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  // 스크롤 내렸을때 해당 영역으로 스크롤 했을 경우
  // 그 영역의 nav에 active 추가해서 색깔 변경
  section.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 100;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      let activeLink = document.querySelector('header .navbar a[href*=' + id + ']');
      // 만약 있다면 active 넣기!! 이거 추가해주기 if로 항상 있는지 없는지 체크하기
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
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