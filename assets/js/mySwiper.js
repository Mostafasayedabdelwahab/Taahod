export function initSwiperes() {
  // Swiper
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
