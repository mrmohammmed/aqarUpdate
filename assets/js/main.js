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
    } else {
      event.preventDefault(); // Prevent the default form submission for now

      // Show the modal
      const modal = document.getElementById("verificationModal");
      modal.style.display = "block";

      // Handle verification code input
      document
        .getElementById("confirmVerification")
        .addEventListener("click", function () {
          const inputs = document.querySelectorAll(".verification-code");
          let code = "";

          inputs.forEach((input) => {
            code += input.value;
          });

          const verificationError =
            document.getElementById("verificationError");

          if (code.length !== 6) {
            verificationError.textContent =
              "يجب أن يكون رمز التحقق مكون من 6 أرقام.";
          } else {
            verificationError.textContent = "";
            alert("تم تأكيد الرقم بنجاح!"); // Replace this with actual verification logic
            modal.style.display = "none"; // Hide the modal
            // You can now submit the form or proceed with your logic
            document.getElementById("loginForm").submit();
          }
        });
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
