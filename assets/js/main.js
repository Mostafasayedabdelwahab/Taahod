
document.addEventListener("DOMContentLoaded", () => {
  // skillsForm;
  if (document.getElementById("skillsForm")) {
    import("./skillsForm.js").then((module) => module.initskillsForm());
  }
  
  // تفعيل مكتبة intl-tel-input
  if (document.querySelector("#phoneWithCode")) {
    import("./intl-tel-input.js").then((module) => module.initintltelinput());
  }

  // login-section
  if (document.querySelector(".login-container")) {
    import("./login.js").then((module) => module.initlogin());
  }

  // fileUpload
  if (document.querySelector(".upload-box")) {
    import("./fileUpload.js").then((module) => module.initfileUpload());
  }

  // Swiper;
  if (document.querySelector(".swiper")) {
    import("./mySwiper.js").then((module) => module.initSwiperes());
  }

  // Modals;
  if (
    document.getElementById("modalSendOverlay") ||
    document.getElementById("modalLoginOverlay")
  ) {
    import("./modals.js").then((module) => module.initModals());
  }
  // headAndFooter;
  if (document.querySelector(" nav")) {
    import("./headAndFooter.js").then((module) => module.initheadAndFooter());
  }
  // chatBox;
  if (document.getElementById("chatBox")) {
    import("./chatBox.js").then((module) => module.initchatBox());
  }

  // faq-item
  if (document.querySelector(".faq-item ")) {
    document.querySelectorAll(".faq-item ").forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
        item.querySelector(".fa-plus ").classList.toggle("d-none");
      });
    });
  }

  //date calendar
  if (document.querySelector(".date-container")) {
    const textInput = document.getElementById("dateText");
    const dateInput = document.getElementById("dateInput");
    // جعل أي ضغطة على العنصر تفتح التقويم
    document
      .querySelector(".date-container")
      .addEventListener("click", function () {
        dateInput.showPicker ? dateInput.showPicker() : dateInput.focus();
      });
    // عند اختيار تاريخ، يتم وضعه في input النصي
    dateInput.addEventListener("input", function () {
      textInput.value = dateInput.value;
    });
  }
});
