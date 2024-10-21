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

// Validation for phone number
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    const phone = document.getElementById("phone").value;
    const phoneRegex = /^05\d{8}$/;
    const phoneError = document.getElementById("phoneError");

    // Reset error message
    phoneError.textContent = "";

    if (!phoneRegex.test(phone)) {
      event.preventDefault(); // Prevent form submission
      phoneError.textContent = "رقم الجوال يجب أن يكون 10 أرقام ويبدأ بـ 05.";
    }
  });

// Validation for national identity number in modal
document
  .getElementById("nationalLoginForm")
  .addEventListener("submit", function (event) {
    const identityNumber = document.getElementById("identityNumber").value;
    const identityError = document.getElementById("identityError");

    // Reset error message
    identityError.textContent = "";

    if (identityNumber.length !== 10 || isNaN(identityNumber)) {
      event.preventDefault(); // Prevent form submission
      identityError.textContent =
        "الرقم الذي أدخلته غير صحيح، تأكد من رقم الهوية.";
    }
  });
