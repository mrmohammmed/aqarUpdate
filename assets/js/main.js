document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.swiper-container', {
      loop: true, // Enable loop mode
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      slidesPerView: 3, // Show one slide at a time
      spaceBetween: 10, // Space between slides
  });
});