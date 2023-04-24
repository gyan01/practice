
// navbar
function toggleNavbarClass(method) {
  const navbar = document.getElementById("navbar");
  if (method === "add") {
    navbar.style.backgroundColor = "white";
    navbar.classList.remove("py-4");
    navbar.classList.add("py-2");
    navbar.classList.add("box-shadow-navbar");
  } else if (method === "remove") {
    navbar.style.backgroundColor = "transparent";
    navbar.classList.remove("py-2");
    navbar.classList.add("py-4");
    navbar.classList.remove("box-shadow-navbar");
  }
}
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  toggleNavbarClass("add");
}
window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    toggleNavbarClass("add");
  } else {
    toggleNavbarClass("remove");
  }
};


//  counter animation
let valueDisplays = document.querySelectorAll(".num-counter");
let interval = 100;
let duration = 20
let animateCounterComplete = false

const counterUpAnimation = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      if(!animateCounterComplete){
        valueDisplays.forEach((valueDisplay) => {
          let startValue = 0;
          let endValue = parseInt(valueDisplay.getAttribute("data-value"));
          let counter = setInterval(function () {
            startValue += Math.round(endValue/interval);
            valueDisplay.textContent = startValue;
            if (startValue >= endValue) {
              valueDisplay.textContent = endValue;
              clearInterval(counter);
              animateCounterComplete = true
            }
          }, duration);
        });
      }
      else return
    }
  })
});
counterUpAnimation.observe(valueDisplays[0]);

// banner-slider
let swiper = new Swiper(".home-swiper", {
  loop: true,
  direction: "vertical",
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  autoplay: {
    delay: 5000,
  },
});

// residental properties swiper
let residentalSwiper = new Swiper(".residental-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  autoplay: {
    delay: 8000,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

// Testimonial swiper
let testimonialSwiper = new Swiper(".testimonial-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});