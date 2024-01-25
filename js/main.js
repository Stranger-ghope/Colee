// hamburger
// window.addEventListener("scroll", function (){
//   var scrollWhite = document.querySelector("section");
//   scrollWhite.classList.toggle("sticky", window.scrollY > 0);
// })

// 

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.links');
const search = document.querySelector('.header-search');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  search.classList.toggle("none");
})

document.querySelectorAll(".links").forEach(n => n.addEventListener ("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      search.classList.remove("none");
}))




new Swiper('.clients-content', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});



new Swiper('.cards', {
  speed: 600,
  loop: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false
  // },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    800: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});

// 
// Top sticky nav
window.addEventListener("scroll", function (){
  var scrollWhite = document.querySelector("header");
  scrollWhite.classList.toggle("sticky", window.scrollY > 0);
})