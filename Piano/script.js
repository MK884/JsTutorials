let keyCheckBox = document.querySelector(".keyD input"),
  allKeys = document.querySelectorAll(".piano .key"),
  voulmeTag = document.querySelector('.volumD input'),
  pianoTag = document.querySelector(".piano");

let allKey = [],
  tune = new Audio();

keyCheckBox.addEventListener("click", () => {
  pianoTag.classList.toggle("hide");
});

const playTune = (key) => {
  tune.src = `tunes/${key}.wav`;
  tune.play();

  const keyTag = document.querySelector(`[data-key= "${key}"]`);
  keyTag.classList.add("active");
  setTimeout(() => {
    keyTag.classList.remove("active");
  }, 150);
};

allKeys.forEach((key) => {
  allKey.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressKey = (e) => {
  if (allKey.includes(e.key)) playTune(e.key);
};


voulmeTag.addEventListener("input", (e) =>{
    tune.volume = voulmeTag.value;
})
document.addEventListener("keydown", pressKey);
