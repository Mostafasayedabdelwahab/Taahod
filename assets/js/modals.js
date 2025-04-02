export function initModals() {
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
}