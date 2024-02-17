let allBoxes = document.querySelectorAll(".box"),
  addBox = document.querySelector(".wrapper .add"),
  popupBox = document.querySelector(".popup-box"),
  titleTag = popupBox.querySelector("header h4"),
  addBtn = popupBox.querySelector("button"),
  descTag = popupBox.querySelector(".desc p"),
  descTxt = popupBox.querySelector(".desc textarea"),
  titleTxt = popupBox.querySelector(".title input"),
  closeIcon = popupBox.querySelector(".popup header i");

const notes = JSON.parse(localStorage.getItem("notes") || "[]");
let isUpdate = false;
let updateId;
const months = [
  "Jan,",
  "Feb,",
  "Mar,",
  "Apr,",
  "May,",
  "Jun,",
  "Jul,",
  "Aug,",
  "Sep,",
  "Oct,",
  "Nov,",
  "Dec,",
];

const closePopup = () => {
  isUpdate = false;
  titleTxt.value = descTxt.value = "";
  popupBox.classList.remove("show");
};

closeIcon.addEventListener("click", () => {
  closePopup();
});

addBox.addEventListener("click", () => {
  titleTag.innerText = "Add New Note";
  addBtn.innerText = "Add Note";
  popupBox.classList.toggle("show");
});

const showNotes = () => {
  if (!notes) return;
  document.querySelectorAll(".note").forEach((note) => note.remove());

  notes.forEach((note, id) => {
    let liTag = `<li class="note box">
        <div class="details">
          <h4 class="title">${note.title}</h4>
          <div class="desc">
            <p>${note.desc}
            </p>
          </div>
        </div>
        <div class="bottom">
          <span>${note.date}</span>
          <div class="setting">
            <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
            <ul class="menu">
              <li onclick="editNote(${id})"><i class="uil uil-pen"></i>Edit</li>
              <li onclick="deleteNote(${id})"><i class="uil uil-trash"></i>Delete</li>
            </ul>
          </div>
        </div>
      </li>`;
    addBox.insertAdjacentHTML("afterend", liTag);
  });
};

const deleteNote = (id) => {
  let confirmDel = confirm("Are you sure you want to delete?");
  if (!confirmDel) return;
  notes.splice(id, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
};

const showMenu = (elem) => {
  elem.parentElement.classList.add("show");
  document.addEventListener("click", (e) => {
    if (e.target.tagName != "I" || e.target != elem) {
      elem.parentElement.classList.remove("show");
    }
  });
};

const editNote = (id) => {
  updateId = id;
  isUpdate = true;
  addBox.click();
  titleTxt.value = notes[id].title;
  descTxt.value = notes[id].desc;
  titleTag.innerText = "Update Note";
  addBtn.innerText = "Update";
};
addBtn.addEventListener("click", () => {
  let title = titleTxt.value.trim(),
    desc = descTxt.value.trim();
  console.log(title, desc);
  if (title || desc) {
    let date = new Date(),
      month = months[date.getMonth()],
      day = date.getDate(),
      year = date.getFullYear();

    let noteInfo = { title, desc, date: `${month} ${day} ${year}` };

    if (!isUpdate) {
      notes.push(noteInfo);
    } else {
      isUpdate = false;
      notes[updateId] = noteInfo;
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
    closePopup();
  }
});
showNotes();
