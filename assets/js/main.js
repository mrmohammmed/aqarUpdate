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
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    // Check if the form exists
    loginForm.addEventListener("submit", function (event) {
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
            if (
              input.value.length === 1 &&
              index < verificationInputs.length - 1
            ) {
              verificationInputs[index + 1].focus();
            }

            input.addEventListener("keydown", function (e) {
              if (e.key === "Backspace" && input.value === "" && index > 0) {
                verificationInputs[index - 1].focus();
              }
            });
          });
        });

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
              modal.hide();
              document.getElementById("loginForm").submit();
            }
          });
      }
    });
  }
});

// Validation for national identity number in modal
document.addEventListener("DOMContentLoaded", function () {
  const nationalLoginForm = document.getElementById("nationalLoginForm");

  // Check if the form exists before adding the event listener
  if (nationalLoginForm) {
    nationalLoginForm.addEventListener("submit", function (event) {
      const identityNumber = document.getElementById("identityNumber").value;
      const identityError = document.getElementById("identityError");

      // Reset error message
      identityError.textContent = "";

      // Validate that the identity number is exactly 10 digits and is numeric
      if (identityNumber.length !== 10 || isNaN(identityNumber)) {
        event.preventDefault(); // Prevent form submission
        identityError.textContent =
          "الرقم الذي أدخلته غير صحيح، تأكد من رقم الهوية.";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const chooseAccountFirst = document.querySelector(".chooseAccountFirst");
  const tabLinks = document.querySelectorAll(".tabItem");

  tabLinks.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Hide the .chooseAccountFirst div when a tab is selected
      if (chooseAccountFirst) {
        chooseAccountFirst.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all file input elements
  const fileInputs = document.querySelectorAll("[id^='fileInput']");

  // Loop through each file input and add event listener
  fileInputs.forEach((fileInput) => {
    fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];

      // Get the unique ID number from the fileInput's ID
      const idSuffix = fileInput.id.replace("fileInput", "");
      const imagePreview = document.getElementById("imagePreview" + idSuffix);
      const cameraIcon = document.getElementById("cameraIcon" + idSuffix);

      // Check if a file is selected and if it's an image
      if (file && file.type.startsWith("image/")) {
        // Limit file size to 2 MB
        if (file.size > 2 * 1024 * 1024) {
          alert("الصورة يجب أن تكون أقل من 2 ميجا بايت");
          return;
        }

        // Display the selected image
        const reader = new FileReader();
        reader.onload = function (e) {
          imagePreview.src = e.target.result;
          cameraIcon.style.display = "none"; // Hide the camera icon
        };
        reader.readAsDataURL(file);
      }
    });
  });
});

document.querySelectorAll(".dropdown-menu").forEach((menu) => {
  menu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
