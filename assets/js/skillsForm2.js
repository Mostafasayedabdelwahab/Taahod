export function initskillsForm2() {
  document
    .getElementById("skillsForm2")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // يمنع الإرسال عند الضغط على Enter
      }
    });

  const skillsList = [
    "منطقة الحدود الشمالية",
    "منطقة تبوك",
    "منطقة الجوف",
    "منطقة حائل",
    "منطقة عسير",
    "المنطقة الشرقية",
    "منطقة المدينة المنورة",
    "منطقة مكة المكرمة",
    "منطقة الرياض",
    "منطقة القصيم",
    "منطقة جازان",
    "منطقة الباحة",
    "منطقة نجران",
  ];

  const inputField = document.getElementById("skillsInputField");
  const dropdownMenu = document.getElementById("skillsDropdown");
  const tagsContainer = document.getElementById("selectedTags");
  const skillsInput = document.getElementById("skillsInput");

  document.querySelectorAll("#skillsInputField").forEach((inputField) => {
    const dropdownMenu =
      inputField.parentElement.querySelector("#skillsDropdown");
    const tagsContainer =
      inputField.parentElement.querySelector("#selectedTags");
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
      if (
        !inputField.contains(event.target) &&
        !dropdownMenu.contains(event.target)
      ) {
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

export function initskillsForm3() {
  document
    .getElementById("skillsForm2")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // يمنع الإرسال عند الضغط على Enter
      }
    });

  const skillsList = [
    " العربات اليدوية (Wheelbarrows)  ",
    " الناقلات اليدوية الكهربائية الصغيرة (Mini Dumpers)  ",
    " الرافعات الشوكية الصغيرة (Small Forklifts)  ",
    " الشاحنات القلابة الصغيرة (Small Dump Trucks)  ",
    " اللودرات (Loaders)  ",
    " الرافعات البرجية أو المتحركة (Cranes)  ",
    " الشاحنات القلابة الكبيرة (Heavy Dump Trucks)  ",
    " الناقلات الخاصة أو المقطورات الثقيلة (Heavy Haul Trailers)",
  ];

  const inputField = document.getElementById("skillsInputField2");
  const dropdownMenu = document.getElementById("skillsDropdown2");
  const tagsContainer = document.getElementById("selectedTags2");
  const skillsInput = document.getElementById("skillsInput2");

  document.querySelectorAll("#skillsInputField2").forEach((inputField) => {
    const dropdownMenu =
      inputField.parentElement.querySelector("#skillsDropdown2");
    const tagsContainer =
      inputField.parentElement.querySelector("#selectedTags2");
    const skillsInput = inputField.parentElement.querySelector("#skillsInput2");
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
      if (
        !inputField.contains(event.target) &&
        !dropdownMenu.contains(event.target)
      ) {
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
