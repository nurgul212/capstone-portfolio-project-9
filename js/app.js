let header = document.querySelector('.header');
let menu = document.querySelector('#menu');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}



var swiper = new Swiper(".experience-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
          },
    },
});





