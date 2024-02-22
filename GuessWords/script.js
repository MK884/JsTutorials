let restartBtn = document.querySelector(".btn"),
  inputTag = document.querySelector(".inputs"),
  remGuess = document.querySelector(".rem-guess span"),
  WrgGuess = document.querySelector(".wr-guess span"),
  userInput = document.querySelector(".user-words"),
  hintBox = document.querySelector(".hint span");

let word,
  maxGuesses,
  wrongWords = [],
  correctWords = [];

const genRanWords = () => {
  let wordObj = wordList[Math.floor(Math.random() * wordList.length)],
    hint = wordObj.hint;
  word = wordObj.word;
  hintBox.innerText = hint;
  maxGuesses = word.length <= 3 ? 5 : 8;
  console.log(word);

  (wrongWords = []), (correctWords = []);
  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
  }
  inputTag.innerHTML = html;

  let randomIdx = Math.floor(Math.random() * word.length);
  inputTag.querySelectorAll("input")[randomIdx].value = word[randomIdx];
  // push the random word 
  correctWords.push(word[randomIdx]);

  remGuess.innerText = maxGuesses;
};

genRanWords();

const wrongGuess = () => {
  alert("Game over! You don't have remaining guesses");
  for (let i = 0; i < word.length; i++) {
    inputTag.querySelectorAll("input")[i].value = word[i];
  }
};

const correctGuess = () => {
  alert(`Congrats! You found the word ${word.toUpperCase()}`);
};

const startGame = (e) => {
  WrgGuess.innerText = "";
  let key = userInput.value.toLowerCase();
  if (
    key.match(/^[A-Za-z]+$/) &&
    !wrongWords.includes(` ${key}`) &&
    !correctWords.includes(key)
  ) {
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === key) {
          correctWords.push(key);
          inputTag.querySelectorAll("input")[i].value = key;
        }
      }
    } else {
      maxGuesses--;
      wrongWords.push(` ${key}`);
    }
  }

  remGuess.innerText = maxGuesses;
  WrgGuess.innerText = wrongWords;
  userInput.value = "";

  setTimeout(() => {
    if (maxGuesses < 1) {
      wrongGuess();
    } else if (correctWords.length === word.length) {
      correctGuess();
      genRanWords();
    }
  }, 100);
};

document.addEventListener("keydown", () => userInput.focus());
userInput.addEventListener("input", startGame);
restartBtn.addEventListener("click", genRanWords);
