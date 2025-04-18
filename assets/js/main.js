document.addEventListener("DOMContentLoaded", () => {
  // skillsForm;
  if (document.getElementById("skillsForm")) {
    import("./skillsForm.js").then((module) => module.initskillsForm());
  }
  if (document.getElementById("skillsForm2")) {
    import("./skillsForm2.js").then((module) => module.initskillsForm2());
  }
  if (document.getElementById("skillsForm2")) {
    import("./skillsForm2.js").then((module) => module.initskillsForm3());
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
      item.querySelector(".faq-icon").addEventListener("click", () => {
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

  if (document.getElementById("openFilter")) {
    document.getElementById("openFilter").addEventListener("click", () => {
      document.getElementById("filter").classList.add("open");
    });
    document.getElementById("closeFilter").addEventListener("click", () => {
      document.getElementById("filter").classList.remove("open");
    });
  }


// share
   if (document.querySelectorAll(".btn-project-details + a")) {
     let currentSharedUrl = "";
     document.querySelectorAll(".btn-project-details + a").forEach((btn) => {
       btn.addEventListener("click", function () {
         currentSharedUrl = "https://mostafasayedabdelwahab.github.io/Taahod/projectDetails.html";

         // لو المتصفح بيدعم Web Share API
         if (navigator.share) {
           navigator
             .share({
               title: document.title,
               text: "From Taahod",
               url: currentSharedUrl,
             })
             .then(() => console.log("تمت المشاركة"))
             .catch((err) => console.log("فشل المشاركة", err));
         } else {
           // لو مش بيدعم → تحديث روابط الشبكات الاجتماعية

           let shareDiv = document.getElementById("customShare");
           if (!btn.parentElement.parentElement.querySelector("#customShare")) {
             shareDiv = document.createElement("div");
             shareDiv.id = "customShare";
             btn.parentElement.parentElement.appendChild(shareDiv); // إضافة الـ div إلى الـ body
           }

           shareDiv.innerHTML = `
                             <a id="shareFb" class="faq-button text-dark" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                             <a id="shareLn" class="faq-button text-dark" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                             <a id="shareTt" class="faq-button text-dark" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
                             <a id="shareTw" class="faq-button text-dark" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                             <a id="shareSc" class="faq-button text-dark" target="_blank"> <i class="fa-brands fa-snapchat"></i> </a>
                             <a id="shareWa" class="faq-button text-dark" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                             <a id="shareIg" class="faq-button text-dark" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                             <a id="shareTg" class="faq-button text-dark" target="_blank"><i class="fa-brands fa-telegram"></i></a>
    
                             <button  class="faq-button text-dark" onclick="copySharedLink()"><i class="fa-solid fa-copy"></i></button>
                        `;

           // تحديث روابط التطبيقات
           document.getElementById(
             "shareFb"
           ).href = `https://www.facebook.com/sharer/sharer.php?u=${currentSharedUrl}`;
           document.getElementById(
             "shareLn"
           ).href = `https://www.linkedin.com/sharing/share-offsite/?url=${currentSharedUrl}`;
           document.getElementById(
             "shareTt"
           ).href = `https://www.tiktok.com/share?url=${currentSharedUrl}`;
           document.getElementById(
             "shareTw"
           ).href = `https://twitter.com/intent/tweet?url=${currentSharedUrl}&text=شوف الرابط ده!`;
           document.getElementById(
             "shareSc"
           ).href = `https://www.snapchat.com/scan?attachmentUrl=${currentSharedUrl}`;
           document.getElementById(
             "shareWa"
           ).href = `https://api.whatsapp.com/send?text=${currentSharedUrl}`;
           document.getElementById(
             "shareIg"
           ).href = `https://www.instagram.com/?url=${currentSharedUrl}`;
           document.getElementById(
             "shareTg"
           ).href = `https://t.me/share/url?url=${currentSharedUrl}&text=شوف الرابط ده!`;
         }
       });
     });

     // وظيفة نسخ الرابط
     function copySharedLink() {
       navigator.clipboard
         .writeText(currentSharedUrl)
         .then(() => {
           alert("تم نسخ الرابط ✅");
         })
         .catch(() => {
           alert("فشل النسخ ❌");
         });
     }
   }
});
