let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");
const specialChars = ["/", "*", "-", "+", "%", "="];
let output = "";

const calculate = (value) => {
  if (value === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (value === "AC") {
    output = "";
  } else if (value === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(value)) return;
    output += value;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button.value);
  });
});
