export function initfileUpload() {
        document.getElementById("fileInput").addEventListener("change", function (event) {
            handleFiles(event.target.files);
          });
  function handleFiles(files) {

    const fileList = document.getElementById("fileList");
    const maxFileSize = 10 * 1024 * 1024; // 10MB بالبايت
    // قائمة الامتدادات المسموح بها
    const allowedExtensions = ["pdf", "doc", "docx", "jpg", "jpeg", "png"];

    Array.from(files).forEach((file) => {
      let fileExtension = file.name.split(".").pop().toLowerCase();
      let fileSize = (file.size / 1024 / 1024).toFixed(2); // تحويل الحجم إلى MB

      // التحقق من نوع الملف
      if (!allowedExtensions.includes(fileExtension)) {
        alert(
          `❌ الملف "${file.name}" غير مسموح به! يُسمح فقط بـ PDF, DOC, DOCX , JPG, JPEG, PNG.`
        );
        return; // الخروج ومنع الإضافة
      }

      // التحقق من حجم الملف
      if (file.size > maxFileSize) {
        alert(
          `❌ الملف "${file.name}" كبير جدًا! الحد الأقصى المسموح به هو 10MB.`
        );
        return; // الخروج ومنع الإضافة
      }

      // تحديد الأيقونة المناسبة
      let iconClass =
        fileExtension === "pdf"
          ? "fa-solid fa-file-pdf text-danger"
          : ["jpg", "jpeg", "png", "gif", "webp"].includes(fileExtension)
          ? "fa-solid fa-file-image text-primary"
          : ["doc", "docx"].includes(fileExtension)
          ? "fa-solid fa-file-word text-primary"
          : "fa-solid fa-file text-secondary";

      // إنشاء العنصر الخاص بالملف
      let fileItem = document.createElement("div");
      fileItem.classList.add("file-item");
      fileItem.classList.add("col-12");
      fileItem.classList.add("col-md-5");
      fileItem.innerHTML = `
            <div class="file-info">
                <i class="${iconClass} file-icon"></i>
                <div class = "overflow-hidden" >
                    <p class="m-0 nameOfFile">${file.name}</p>
                    <div class="d-flex gap-3 align-items-center">
                        <small class="text-muted">${fileSize} ميجا</small>
                        <p class="m-0  status-text d-flex gap-1 align-items-center " data-status> <i class="fa-solid fa-spinner"></i> جاري الرفع...</p>
                    </div>
                    </div>
                    <button class="delete-btn" onclick="this.parentElement.parentElement.remove()">
                    <i class="fa-solid fa-trash"></i>
                    </button>
                    </div>
                    <div class="progress mt-1">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 0%;" data-progress></div>
                    </div>
        `;

      fileList.appendChild(fileItem);

      // تحديد العناصر داخل العنصر الجديد
      let progressBar = fileItem.querySelector("[data-progress]");
      let statusText = fileItem.querySelector("[data-status]");

      simulateUpload(file, progressBar, statusText);
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
      statusText.innerHTML = `<span class = "d-flex gap-1 align-items-center"> <i class="fa-solid fa-check"></i> مكتمل</span>`;
    };

    reader.readAsDataURL(file); // قراءة الملف لمحاكاة الرفع
  }
}