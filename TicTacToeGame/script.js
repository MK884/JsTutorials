let btn = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".rstBtn");
let win = document.querySelector(".winner");
var count = 0;

const generateRandomTurn = () => {
  turn = Math.floor(Math.random() * 2);
  return turn;
};

var turn = generateRandomTurn();

const showTurns = (t) => {
  if (t) {
    win.innerText = "X-Player Turn";
  } else {
    win.innerText = "0-Player Turn";
  }
};

const winningPatters = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

btn.forEach((pos) => {
  pos.addEventListener("click", () => {
    if (turn) {
      // X-player turn
      pos.innerText = "X";
      showTurns(!turn);
      pos.style.color = "green";
      turn = false;
    } else {
      // 0-player turn
      pos.innerText = "0";
      pos.style.color = "red";
      showTurns(!turn);
      turn = true;
    }
    pos.disabled = true;
    let isWinner = checkWinner();
    count++;
    console.log(count);
    if (count == 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  win.innerText = "Game was Draw";
  win.style.color = "gray";
};

const resetGame = () => {
  win.style.color = "chocolate";
  let turn = generateRandomTurn();
  showTurns(turn);
  enabledBtn();
};

const disabledBtn = () => {
  for (const box of btn) {
    box.disabled = true;
  }
};

const enabledBtn = () => {
  for (const box of btn) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  win.innerText = `Congratulations! Winner is ${winner}`;
  win.style.color = "green";
  disabledBtn();
};

const checkWinner = () => {
  for (const pos of winningPatters) {
    let val1 = btn[pos[0]].innerText;
    let val2 = btn[pos[1]].innerText;
    let val3 = btn[pos[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
        return true;
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
showTurns(generateRandomTurn());
