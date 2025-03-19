// منع فتح الدروب داون عند الكليك
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dropdown-toggle").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // منع السلوك الافتراضي
      event.stopPropagation(); // منع الحدث من الوصول لـ Bootstrap
    });
  });
});
