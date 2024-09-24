

var SLIDER = {
  slideBannerIndex: function () {
    const swiperBanner = new Swiper(".slide-banner__index", {
      slidesPerView: 1,
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 8,
      watchSlidesProgress: true,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: ".pagination-banner",
        clickable: true,
      },
      navigation: {
        nextEl: ".banner-next",
        prevEl: ".banner-prev",
      },
    });
  },
  slideProductIndex: function () {
    const swiperProduct = new Swiper(".swiperProduct", {
      slidesPerView: 4.5,
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 8,
      watchSlidesProgress: true,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      autoplay: {
        delay: 3000,
      },
    });
  },

  slideComment: function () {
    const swiperComment = new Swiper(".swiperComment", {
      slidesPerView: 1,
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 8,
      watchSlidesProgress: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".publications-pagination",
        clickable: true,
      },
    });
  },

  slidePartnerIndex: function () {
    const swiperPartner = new Swiper(".swiperPartner", {
      loop: true,
      slidesOffsetAfter: 0,
      spaceBetween: 8,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  },

  slideAchieveIndex: function () {
    const swiperBanner = new Swiper(".swiperAchieve", {
      slidesPerView: 3,
      disableOnInteraction: true,
      speed: 600,
      spaceBetween: 32,
      watchSlidesProgress: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: ".pagination-achieve",
        clickable: true,
      },
      
    });
  },

  slideResource: function () {
    const swiperResource = new Swiper(".Resource", {
      loop: true,
      spaceBetween: 8,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: ".pa-resource",
        clickable: true,
      },
    });
  },

  slideNews: function () {
    const swiperNews = new Swiper(".swiperNews", {
      loop: true,
      spaceBetween: 8,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  },
  init: function () {
    SLIDER.slideBannerIndex();
    SLIDER.slideProductIndex();
    SLIDER.slideComment();
    SLIDER.slidePartnerIndex();
    SLIDER.slideAchieveIndex();
    SLIDER.slideResource();
    SLIDER.slideNews();

  },
};
document.addEventListener("DOMContentLoaded", function () {
  SLIDER.init();
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const content = document.getElementById('content');
  
  toggleButton.addEventListener('click', () => {
      content.classList.toggle('hihi');
      content.classList.toggle("visible");
  });
  });

// function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
//     let currentNumber = startNumber
//     const interval = window.setInterval(updateNumber, 17)
//     function updateNumber() {
//       if (currentNumber >= finalNumber) {
//         clearInterval(interval)
//       } else {
//         let inc = Math.ceil(finalNumber / (duration / 17))
//         if (currentNumber + inc > finalNumber) {
//           currentNumber = finalNumber
//           clearInterval(interval)
//         } else {
//           currentNumber += inc
//         }
//         callback(currentNumber)
//       }
//     }
//   }
