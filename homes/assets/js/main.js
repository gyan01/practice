// banner-slider
let swiper = new Swiper(".swiper", {
  loop:true,
    direction:"vertical",
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    autoplay:{
      delay:5000
    }
  });

// navbar
window.onscroll = ()=>{
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("navbar").style.backgroundColor = "white"
      document.getElementById("navbar").classList.remove("py-4")
      document.getElementById("navbar").classList.add("py-2")
      document.getElementById("navbar").classList.add("box-shadow-navbar")
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent"
      document.getElementById("navbar").classList.remove("py-2")
      document.getElementById("navbar").classList.add("py-4")
      document.getElementById("navbar").classList.remove("box-shadow-navbar")

    }
}
