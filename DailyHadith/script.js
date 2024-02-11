let nextBtn = document.querySelector("button");
let refText = document.querySelector("#refno")
let headerText = document.querySelector("#header")
let conatinerText = document.querySelector(".container")
let bookName = document.querySelector('#book-name');
let chapterName = document.querySelector('#chapter-name');
let Ref = document.querySelector('#ref');
let moreInfo = document.querySelector('.more-info');

const base_url = `https://random-hadith-generator.vercel.app/bukhari/`;


moreInfo.addEventListener('click', () =>{
    moreInfo.classList.toggle('active')
})

const knowMore = (data) => {
    bookName.innerText = data.data.bookName.trim();
    chapterName.innerText = data.data.chapterName.trim();
    Ref.innerText = data.data.refno.trim();
}

const fetchHadith = async () => {
  let response = await fetch(base_url);
  let data = await response.json();
  let header = data.data.header.trim();
  let hadith = data.data.hadith_english.trim();
  let ref = data.data.refno.trim();
  headerText.innerText = header;
  conatinerText.innerText = hadith;
  refText.innerText = ref;
  knowMore(data);
};

nextBtn.addEventListener("click", () => {
  fetchHadith();
});

window.addEventListener("keyup", (e) => {
  if(e.keyCode === 32){
    fetchHadith();
  }
})

fetchHadith();