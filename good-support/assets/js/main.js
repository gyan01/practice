const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: "auto",
    spaceBetween: 80,
    loop:true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    speed:600,
  });


