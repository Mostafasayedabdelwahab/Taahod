export function initheadAndFooter() {
  // منع فتح الدروب داون عند الكليك
  if (document.querySelector("header nav .dropdown-toggle")) {
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".dropdown-toggle").forEach((button) => {
        button.addEventListener("click", function (event) {
          event.preventDefault(); // منع السلوك الافتراضي
          event.stopPropagation(); // منع الحدث من الوصول لـ Bootstrap
        });
      });
    });
  }
  // navForLogin;
  if (document.querySelector(".navForLogin")) {
    if (window.matchMedia("(max-width: 991px)").matches) {
      const element = document.getElementById("navbarNav");
      const referenceNode = document.getElementById("Mybox");

      referenceNode.after(element);
    }
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
}
