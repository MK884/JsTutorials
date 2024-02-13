let Dropdown = document.querySelectorAll(".dropdown");
let Menu = document.querySelectorAll(".menu");
let fromCurr = document.querySelector("#from");
let toCurr = document.querySelector("#to");
let input = document.querySelector("#amt");
let btn = document.querySelector("#getBtn");
let result = document.querySelector(".result p");
let arrow = document.querySelector(".arrow");
let icon = document.querySelector(".arrow i");

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
};

const fetchResult = async (fromCurr, toCurr, amtVal) => {
  let url = `${BASE_URL}/${fromCurr}/${toCurr}.json`;
  let response = await fetch(url);
  let data = await response.json();
  let rate = data[toCurr];
  let finalRate = (rate * amtVal).toFixed(2);
  // it return a promise
  return finalRate;
};

const getResult = async () => {
  let amtVal = input.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    input.value = "1";
  }
  let fromRate = fromCurr.innerText.toLowerCase();
  let currRate = toCurr.innerText.toLowerCase();
  let Rate = await fetchResult(fromRate, currRate, amtVal);
  result.innerText = `${Rate} ${toCurr.innerText}`;
};

const reverseCountry = () => {
  let fromCuntry = fromCurr.innerText;
  let toCuntry = toCurr.innerText;
  let fromCode = countryList[fromCuntry];
  let toCode = countryList[toCuntry];

  fromCurr.parentElement.querySelector(
    "img"
  ).src = `https://flagsapi.com/${toCode}/flat/64.png`;
  toCurr.parentElement.querySelector(
    "img"
  ).src = `https://flagsapi.com/${fromCode}/flat/64.png`;
  fromCurr.innerText = toCuntry;
  toCurr.innerText = fromCuntry;
  getResult();
};
btn.addEventListener("click", getResult);
arrow.addEventListener("click", reverseCountry);
addCountry();
