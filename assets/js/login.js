export function initlogin() {
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



  if (document.getElementById("username")) {
    document.getElementById("username").addEventListener("input", function () {
      validateUsername();
    });
  
    function validateUsername() {
      const usernameInput = document.getElementById("username");
      const errorMessage = document.querySelector(".rules");
      const username = usernameInput.value.trim();
      const regex = /^(?!.*\s)[a-zA-Z0-9]{6,20}$/;
  
      if (!regex.test(username)) {
        usernameInput.classList.add("is-invalid");
        usernameInput.classList.remove("is-valid");
        errorMessage.style.color = "red";
        return false;
      } else {
        usernameInput.classList.add("is-valid");
        usernameInput.classList.remove("is-invalid");
        errorMessage.style.color = "#6c757d";
        return true;
      }
    }
  
    // منع إرسال الفورم إذا لم يكن الإدخال صحيحًا
      document
        .getElementById("userForm")
        .addEventListener("submit", function (event) {
          if (!validateUsername()) {
            event.preventDefault(); // يمنع الإرسال إذا لم يكن الإدخال صحيحًا
          }
          else{
            this.submit();
          }
        });
  }
  }


if (document.getElementById("fileInputForImage")) {
  document
    .getElementById("fileInputForImage")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("ImgForprofilePic").src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
}