export function initchatBox() {
  let chatBox = document.getElementById("chatBox");
  let messageInput = document.getElementById("messageInput");
  let sendBtn = document.getElementById("sendBtn");

  function getCurrentTime() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function addMessage(text, type) {
    let messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container", type);
    // الحصول على مسار الصورة من العنصر في الهيدر
    const userImage = document.querySelector("#Mybox img").src;

    messageContainer.innerHTML = `


                       <div class="d-flex align-items-end gap-2">
                           <img src="${userImage}" alt="User">
                           <span class="message-time">${getCurrentTime()}</span>
                       </div>
       <div class="message ${type}">${text} </div>
   `;
    chatBox.appendChild(messageContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  sendBtn.addEventListener("click", function () {
    let messageText = messageInput.value.trim();
    if (messageText !== "") {
      addMessage(messageText, "sent");
      messageInput.value = "";
    }
  });
  document.getElementById("deleteChat").addEventListener("click", function () {
    if (confirm("هل أنت متأكد من حذف المحادثة؟")) {
      document.querySelector(".chat-box").innerHTML = "";
    }
  });

  document.getElementById("searchInput").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();
    let chatItems = document.querySelectorAll(
      ".chat-list .list-group-item span:first-child"
    );
    chatItems.forEach((item) => {
      if (item.textContent.toLowerCase().includes(searchValue)) {
        item.closest(".list-group-item").classList.add("d-flex");
        item.closest(".list-group-item").classList.remove("d-none");
      } else {
        item.closest(".list-group-item").classList.add("d-none");
        item.closest(".list-group-item").classList.remove("d-flex");
      }
    });
  });
}
