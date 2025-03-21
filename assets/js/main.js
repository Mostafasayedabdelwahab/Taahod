// منع فتح الدروب داون عند الكليك
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dropdown-toggle").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // منع السلوك الافتراضي
      event.stopPropagation(); // منع الحدث من الوصول لـ Bootstrap
    });
  });
});

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