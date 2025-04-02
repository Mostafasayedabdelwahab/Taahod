export function initskillsForm() {
document.getElementById("skillsForm").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // يمنع الإرسال عند الضغط على Enter
  }
});

const skillsList = [
  "تصميم داخلي",
  "ديكور منزل",
  "تخطيط الحدائق",
  "إضاءة فنية",
  "تجديد المساحات الداخلية",
  "تصميم مطابخ حديثة",
  "تصميم مكاتب مريحة",
  "تنظيم المساحات الصغيرة",
  "اختيار الألوان والتنسيق",
  "أثاث مخصص حسب الطلب",
];



    const inputField = document.getElementById("skillsInputField");
    const dropdownMenu = document.getElementById("skillsDropdown");
    const tagsContainer = document.getElementById("selectedTags");
    const skillsInput = document.getElementById("skillsInput");

document.querySelectorAll("#skillsInputField").forEach((inputField) => {
  const dropdownMenu = inputField.parentElement.querySelector("#skillsDropdown");
  const tagsContainer = inputField.parentElement.querySelector("#selectedTags");
  const skillsInput = inputField.parentElement.querySelector("#skillsInput");
  let selectedSkills = [];

  function updateDropdown(filter = "") {
    dropdownMenu.innerHTML = "";
    const filteredSkills = skillsList.filter((skill) =>
      skill.toLowerCase().includes(filter.toLowerCase())
    );
    if (filteredSkills.length > 0) {
      filteredSkills.forEach((skill) => {
        const listItem = document.createElement("li");
        listItem.classList.add("dropdown-item");
        listItem.textContent = skill;
        listItem.addEventListener("click", function () {
          if (!selectedSkills.includes(skill)) {
            selectedSkills.push(skill);
            updateTags();
          }
          inputField.value = "";
          dropdownMenu.classList.remove("show");
        });
        dropdownMenu.appendChild(listItem);
      });
      dropdownMenu.classList.add("show");
    } else {
      dropdownMenu.classList.remove("show");
    }
  }

  inputField.addEventListener("input", function () {
    updateDropdown(this.value);
  });

  inputField.addEventListener("focus", function () {
    updateDropdown(this.value);
    dropdownMenu.classList.add("show");
  });

  document.addEventListener("click", function (event) {
    if (!inputField.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove("show");
    }
  });

  function updateTags() {
    tagsContainer.innerHTML = "";
    selectedSkills.forEach((skill) => {
      const tag = document.createElement("div");
      tag.classList.add("tag");
      tag.innerHTML = `${skill} <span><i class="fa-solid fa-xmark"></i></span>`;
      tag.querySelector("span").addEventListener("click", function () {
        selectedSkills = selectedSkills.filter((s) => s !== skill);
        updateTags();
      });
      tagsContainer.appendChild(tag);
    });
    skillsInput.value = selectedSkills.join(",");
  }
});
}
