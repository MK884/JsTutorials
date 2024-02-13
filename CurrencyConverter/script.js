let Dropdown = document.querySelectorAll(".dropdown");
let Menu = document.querySelectorAll(".menu");
let fromCurr = document.querySelector("#from");
let toCurr = document.querySelector("#to");
let input = document.querySelector("#amt");
let btn = document.querySelector("#getBtn");
let result = document.querySelector(".result p");

const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

Dropdown.forEach((dd) => {
  dd.children[1].addEventListener("click", () => {
    dd.classList.toggle("active");
  });
});

const addCountry = () => {
  Menu.forEach((menu) => {
    let li = "";
    menu.innerHTML = "";
    for (let country in countryList) {
      li += `<li onclick='updateCountry(this)' value="${countryList[country]}"><img src="https://flagsapi.com/${countryList[country]}/flat/64.png" />${country}</li>`;
    }
    menu.innerHTML = li;
  });
};

const updateCountry = (country) => {
  let code = country.getAttribute("value");
  // country.classList.add("isSelected");
  let countryText = country.innerText;
  country.parentNode.parentNode.previousElementSibling.querySelector(
    ".select img"
  ).src = `https://flagsapi.com/${code}/flat/64.png`;
  let dropdown =
    country.parentNode.parentNode.previousElementSibling.querySelector(
      ".select .selected"
    );
  dropdown.innerText = countryText;
  country.parentNode.parentNode.parentNode.classList.remove("active");
  console.log(fromCurr.innerText, toCurr.innerText);
};

const getResult = async () => {
  let amtVal = input.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    input.value = "1";
  }

  let url = `${BASE_URL}/${fromCurr.innerText.toLowerCase()}/${toCurr.innerText.toLowerCase()}.json`;
  let response = await fetch(url);
  let data = await response.json();
  let rate = data[toCurr.innerText.toLowerCase()];
  let finalRate = (rate * amtVal).toFixed(2);
  result.innerText = `${finalRate} ${toCurr.innerText}`;
};
btn.addEventListener("click", getResult);
addCountry();
