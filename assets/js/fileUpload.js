export function initfileUpload() {
  document.querySelectorAll("#fileInput").forEach((fileInput) => {
    fileInput.addEventListener("change", function (event) {
      const wrapper = event.target.closest(".upload-box-con"); // يحدد العنصر الأب الأقرب
      const fileList = wrapper.querySelector("#fileList"); // يحدد قائمة الملفات الخاصة بهذا الإدخال
      handleFiles(event.target.files, fileList); // تمرير قائمة الملفات الخاصة به
    });
  });

  function handleFiles(files, fileList) {
    const maxFileSize = 10 * 1024 * 1024; // 10MB
    const allowedExtensions = ["pdf", "doc", "docx", "jpg", "jpeg", "png"];

    Array.from(files).forEach((file) => {
      let fileExtension = file.name.split(".").pop().toLowerCase();
      let fileSize = (file.size / 1024 / 1024).toFixed(2); // تحويل الحجم إلى MB

      if (!allowedExtensions.includes(fileExtension)) {
        alert(
          `❌ الملف "${file.name}" غير مسموح به! يُسمح فقط بـ PDF, DOC, DOCX, JPG, JPEG, PNG.`
        );
        return;
      }

      if (file.size > maxFileSize) {
        alert(
          `❌ الملف "${file.name}" كبير جدًا! الحد الأقصى المسموح به هو 10MB.`
        );
        return;
      }

      let iconClass =
        fileExtension === "pdf"
          ? "fa-solid fa-file-pdf text-danger"
          : ["jpg", "jpeg", "png"].includes(fileExtension)
          ? "fa-solid fa-file-image text-primary"
          : ["doc", "docx"].includes(fileExtension)
          ? "fa-solid fa-file-word text-primary"
          : "fa-solid fa-file text-secondary";

      let fileItem = document.createElement("div");
      fileItem.classList.add("file-item", "col-12", "col-md-5");
      fileItem.innerHTML = `
        <div class="file-info d-flex justify-content-between align-items-center">
            <i class="${iconClass} file-icon"></i>
            <div class="overflow-hidden flex-grow-1 ms-2">
                <p class="m-0 nameOfFile">${file.name}</p>
                <div class="d-flex gap-3 align-items-center">
                    <small class="text-muted">${fileSize} ميجا</small>
                    <p class="m-0 status-text d-flex gap-1 align-items-center" data-status>
                        <i class="fa-solid fa-spinner"></i> جاري الرفع...
                    </p>
                </div>
            </div>
            <button class="delete-btn btn btn-danger btn-sm">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <div class="progress mt-1">
            <div class="progress-bar bg-success" role="progressbar" style="width: 0%;" data-progress></div>
        </div>
      `;

      fileList.appendChild(fileItem);

      let progressBar = fileItem.querySelector("[data-progress]");
      let statusText = fileItem.querySelector("[data-status]");

      simulateUpload(file, progressBar, statusText);

      // حذف الملف عند الضغط على زر الحذف
      fileItem
        .querySelector(".delete-btn")
        .addEventListener("click", function () {
          fileItem.remove();
        });
    });
  }

  function simulateUpload(file, progressBar, statusText) {
    let reader = new FileReader();

    reader.onloadstart = () => {
      progressBar.style.width = "0%";
    };

    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        let percent = (event.loaded / event.total) * 100;
        progressBar.style.width = percent + "%";
      }
    };

    reader.onloadend = () => {
      progressBar.style.width = "100%";
      statusText.innerHTML = `<span class="d-flex gap-1 align-items-center"><i class="fa-solid fa-check"></i> مكتمل</span>`;
    };

    reader.readAsDataURL(file);
  }
}
