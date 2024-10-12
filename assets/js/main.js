document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    loop: true, // Enable loop mode
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3, // Show 3 slides at a time
    spaceBetween: 20, // Space between slides
  });
});
// When the link is clicked, show the sidebar
document
  .querySelector(".link-style-small2")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".bodySidebar").classList.add("show");
  });

// When the close button is clicked, hide the sidebar
document
  .querySelector(".close-services")
  .addEventListener("click", function () {
    document.querySelector(".bodySidebar").classList.remove("show");
  });

// When clicking outside the side-menu, hide the sidebar
document.querySelector(".bodySidebar").addEventListener("click", function (e) {
  if (!e.target.closest(".side-menu")) {
    document.querySelector(".bodySidebar").classList.remove("show");
  }
});
