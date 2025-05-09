
const popup = document.querySelector(".popup");
const openBtn = document.querySelector(".box");
const closeBtn = document.querySelector(".popup .fa-xmark");
const header = document.querySelector('.header .flex');

window.onscroll = () =>{

    /* 스크롤 내릴 시 header에 active 추가 */
    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}


// 팝업 바깥 클릭 시 닫기
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});

// ESC 키 누르면 닫기
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popup.classList.remove("active");
  }
});

  // 모든 .box에 클릭 이벤트 추가
  document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        const title = box.dataset.title;
        const desc = box.dataset.desc;
        const img = box.dataset.img;
        const tag = box.dataset.tag;
        const link = box.dataset.link;

        document.querySelector('.popup_title').textContent = title;
        document.querySelector('.popup_tag').textContent = tag;
        document.querySelector('.page_btn').href = link;

        document.querySelector('.popup_desc').textContent = desc;
        document.querySelector('.popup_img').src = img;

        document.querySelector('.popup').classList.add('active');

        requestAnimationFrame(() => {
          document.querySelector('.popup_content').scrollTop = 0;
        });
    });
});

// 팝업 닫기
document.querySelector('.close_btn').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('active');
});
