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

// Show the modal using Bootstrap's API
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

      // Show the modal using Bootstrap's modal method
      const modal = new bootstrap.Modal(
        document.getElementById("verificationModal")
      );
      modal.show();

      // Automatically move to next input field when typing
      const verificationInputs =
        document.querySelectorAll(".verification-code");
      verificationInputs.forEach((input, index) => {
        input.addEventListener("input", function () {
          // Move to the next input if a number is entered
          if (
            input.value.length === 1 &&
            index < verificationInputs.length - 1
          ) {
            verificationInputs[index + 1].focus();
          }

          // If backspace is pressed and input is empty, move to the previous input
          input.addEventListener("keydown", function (e) {
            if (e.key === "Backspace" && input.value === "" && index > 0) {
              verificationInputs[index - 1].focus();
            }
          });
        });
      });

      // Handle verification code confirmation
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
            // Show error message if code is not 6 digits or empty
            verificationError.textContent =
              "يجب أن يكون رمز التحقق مكون من 6 أرقام.";
          } else {
            verificationError.textContent = "";
            modal.hide(); // Hide the modal using Bootstrap's modal method
            document.getElementById("loginForm").submit(); // You can now submit the form or proceed with your logic
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
