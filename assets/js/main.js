// منع فتح الدروب داون عند الكليك
if (document.querySelector(".dropdown-toggle")) {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-toggle").forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault(); // منع السلوك الافتراضي
        event.stopPropagation(); // منع الحدث من الوصول لـ Bootstrap
      });
    });
  });
}
// Swiper
if (document.querySelector(".mySwiper")) {
  var swiper2 = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 5000, // يغير الصورة كل 5 ثواني
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mySwiper-swiper-pagination",
      clickable: true,
    },
    slidesPerView: 4, // يعرض 4 كروت افتراضيًا
    spaceBetween: 20, // المسافة بين الكروت
    navigation: {
      // أزرار التنقل
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: { slidesPerView: 1 }, // موبايل: يعرض كارد 1 فقط
      600: { slidesPerView: 2 }, // تابلت: يعرض 2 كارد
      1024: { slidesPerView: 4 }, // ديسكتوب: يعرض 4 كروت أو أكثر
    },
  });
}

// footer
if (document.getElementById("Copy_year")) {
  document.getElementById("Copy_year").textContent = new Date().getFullYear();
}
// footer button
if (document.querySelector(".faq-button")) {
  document.querySelectorAll(".faq-button").forEach((e) => {
    let data_color = e.getAttribute("data-color");
    e.addEventListener("mouseenter", () => {
      e.style.color = data_color;
      document.querySelectorAll(".tooltip").forEach((el) => {
        el.style.backgroundColor = data_color;
      });
    });
    e.addEventListener("mouseleave", () => {
      e.style.color = "#fff";
    });
  });
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

//togglePassword
if (document.querySelector(".togglePassword")) {
  document.querySelectorAll(".togglePassword").forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", function () {
      const passwordInput =
        this.closest(".position-relative").querySelector(".password");
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
      this.querySelector(".eyePassword").classList.toggle("fa-eye");
      this.querySelector(".eyePassword").classList.toggle("fa-eye-slash");
      // عند الضغط على الزر
      this.addEventListener("mousedown", function (event) {
        event.preventDefault(); // يمنع التحديد أثناء الضغط
        document.body.style.userSelect = "none"; // تعطيل تحديد النص مؤقتًا
      });

      // عند رفع الضغط عن الزر
      this.addEventListener("mouseup", function () {
        document.body.style.userSelect = "auto"; // إعادة التحديد لحالته الطبيعية
      });

      // لو خرج المستخدم بالماوس أثناء الضغط يرجّع التحديد طبيعي
      this.addEventListener("mouseleave", function () {
        document.body.style.userSelect = "auto";
      });
    });
  });
}
// modal Login
if (document.getElementById("modalLoginOverlay")) {
  function openModalLogin() {
    document.getElementById("modalLoginOverlay").classList.add("active");
  }

  function closeModalLogin() {
    document.getElementById("modalLoginOverlay").classList.remove("active");
  }

  function toggleModal() {
    let modalOverlay = document.getElementById("modalLoginOverlay");

    if (modalOverlay.classList.contains("active")) {
      closeModalLogin();
    } else {
      openModalLogin();
    }
  }

  function selectAccount(type, element) {
    let link = "";
    // تحديد الرابط بناءً على النوع المختار
    if (type === "engineer") {
      link = "registerEngineer.html";
    } else if (type === "contractor") {
      link = "registerContractor.html";
    } else if (type === "individual") {
      link = "registerIndividual.html";
    }

    // تحديث رابط زر "إنشاء حساب"
    document.getElementById("createAccountBtn").href = link;

    // إزالة التحديد من جميع الأزرار ثم تفعيل الزر المختار
    document
      .querySelectorAll(".optionsAccount button")
      .forEach((btn) => btn.classList.remove("active"));
    element.classList.add("active");
  }

  // إغلاق المودال عند الضغط خارج الصندوق
  document
    .getElementById("modalLoginOverlay")
    .addEventListener("click", closeModalLogin);

  //  زر الفتح
  document
    .getElementById("openModalLogin")
    .addEventListener("click", toggleModal);
}
// modal send
if (document.getElementById("modalSendOverlay")) {
  function openModal() {
    document.getElementById("modalSendOverlay").classList.add("active");
    let modal = document.getElementById("modalSending");
    modal.style.display = "block"; // فتح المودال

    let loader = document.getElementById("loader");
    let canClose = false;

    setTimeout(() => {
      document.querySelectorAll(".dot").forEach((dot, index) => {
        let angle = index * (360 / 4);
        dot.style.transform = `rotate(${angle}deg) translate(20px)`;
        if (index >= 4) {
          dot.style.opacity = "0";
        }
        loader.style.transform = "scale(1) rotate(180deg)";
        loader.style.opacity = "1";
      });
    }, 200);

    setTimeout(() => {
      document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.style.opacity = "1";
        let angle = index * (360 / 8);
        dot.style.transform = `rotate(${angle}deg) translate(25px)`;
        if (index >= 8) {
          dot.style.opacity = "0";
        }
      });
    }, 400);

    setTimeout(() => {
      document.querySelectorAll(".dot").forEach((dot, index) => {
        loader.style.animationName = "spin";
        if (index >= 8) {
          dot.style.opacity = "1";
        }
        let angle = index * (360 / 12);
        dot.style.transform = `rotate(${angle}deg) translate(35px)`;
      });
    }, 640);

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transform = "scale(0) rotate(180deg)";
    }, 2000);

    setTimeout(() => {
      loader.style.display = "none";
      document.getElementById("status-text").style.display = "none";
      document.getElementById("success").style.transform = "scale(1)";
      document.getElementById("success").style.opacity = "1";
      document.getElementById("success-text").style.transform = "scale(1)";
      document.getElementById("success-text").style.opacity = "1";
      document.getElementById("success").style.position = "relative";
      document.getElementById("success-text").style.position = "relative";
      document.querySelector(".closemodalSending").style.opacity = "1";
    }, 2400);

    setTimeout(() => {
      canClose = true;
    }, 3000);

    document
      .getElementById("closemodalSending")
      .addEventListener("click", function () {
        if (canClose) {
          document
            .getElementById("modalSendOverlay")
            .classList.remove("active");
          modal.style.display = "none";
        }
      });

    // أغلق المودال عند الضغط خارج المحتوى
    window.addEventListener("click", function (event) {
      let modalContent = document.querySelector(".modalSending");
      if (event.target !== modal) {
        if (canClose) {
          document
            .getElementById("modalSendOverlay")
            .classList.remove("active");
          modalContent.style.display = "none";
        }
      }
    });
  }
  // فتح المودال عند الضغط على الزر
  if (document.getElementById("open-modalSending")) {
    document
      .getElementById("open-modalSending")
      .addEventListener("click", openModal);
  }

  // صفحة نفاذ فتح المودال تلقائيًا إذا كنا في
  if (document.getElementById("timerNavaz")) {
    window.onload = function () {
      if (window.location.href.includes("IndividualSinupnvaz2.html")) {
        setTimeout(() => {
          openModal();
        }, 5000);
      }
      setTimeout(function () {
        window.location.href = "IndividualSinupPassword.html"; // استبدلURL بالرابط المطلوب
      }, 8500); // 10000 ميلي ثانية = 10 ثواني
    };
  }
}

// تفعيل مكتبة intl-tel-input
if (document.querySelector("#phoneWithCode")) {
  let input = document.querySelector("#phoneWithCode");
  let iti = window.intlTelInput(input, {
    initialCountry: "sa",
    preferredCountries: [
      "sa",
      "eg",
      "ae",
      "dz",
      "ma",
      "iq",
      "jo",
      "sy",
      "kw",
      "qa",
      "bh",
      "om",
      "lb",
      "sd",
      "ly",
      "tn",
      "ye",
      "ps",
    ],

    separateDialCode: true,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  if (window.getComputedStyle(document.body).direction === "ltr") {
    document.querySelector(".phoneCon").classList.add("flagenglish");
    document.getElementById("phoneWithCode").classList.add("paddingInput");
  }
}

// timerNavaz
if (document.getElementById("timerNavaz")) {
  let timeLeft = document.getElementById("timerNavaz").textContent;
  const timerElement = document.getElementById("timerNavaz");

  function countdown() {
    if (timeLeft > 0) {
      timeLeft--;
      timerElement.textContent = timeLeft;
    }
  }

  setInterval(countdown, 1000);
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
// fileUpload
if (document.querySelector(".fileUpload")) {
if (document.querySelector(".fileUpload")) {
  document.body.addEventListener("change", function (event) {
    if (event.target.matches('input[type="file"]')) {
      const fileInput = event.target;
      const file = fileInput.files[0];
      const uploadText = fileInput
        .closest(".upload-container")
        .querySelector(".upload-text");

      if (file) {
        const fileName = file.name.toLowerCase();
        const fileType = file.type;
        let allowedExtensions = [];

        // تحديد الأنواع بناءً على الـ id
        switch (fileInput.id) {
          case "fileLease":
            allowedExtensions = ["image/png" ,"image/jpg"];
            break;
          case "file_Employment_contract":
            allowedExtensions = [
              "application/pdf",
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ]; // تصحيح امتداد docx
            break;
          case "file_Purchase_Contract":
            allowedExtensions = ["application/pdf", "image/jpeg"]; // تصحيح امتداد jpg إلى jpeg
            break;
        }

        // التحقق من النوع
        const isValid = allowedExtensions.some(
          (ext) => fileType === ext || fileName.endsWith(ext.split("/").pop())
        );

        if (!isValid) {
          alert("نوع الملف غير مسموح!");
          fileInput.value = ""; // مسح الملف المختار
          
        } else {
          uploadText.textContent = fileName; // تحديث اسم الملف فقط إذا كان مسموحًا
        }
      }
    }
  });
}

}
