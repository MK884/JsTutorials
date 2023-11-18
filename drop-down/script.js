const selectBtn = document.querySelector('.select');
const options = document.querySelector('.options');
const container = document.querySelector('.container');
const menu = document.querySelector('.menu');
var searchInput = document.querySelector('input');

const allCountry = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];



selectBtn.addEventListener('click',() =>{
    container.classList.toggle('container-active');
})

const addCountry =(selectedCountry)=>{
    let li ='';
    menu.innerHTML = '';
    
    allCountry.forEach(country => {
        var isSelected = country == selectedCountry ? 'active' : '';
        li += `<li onclick ='updateCountry(this)' class="${isSelected}">${country}</li>`;
    })  
    menu.innerHTML = li;
}

addCountry()

const updateCountry = (country) =>{
    searchInput.value = '';
    addCountry(country.innerText);
    container.classList.remove('container-active');
    selectBtn.firstElementChild.innerHTML = country.innerText;
}


searchInput.addEventListener('keyup',()=>{
    let arr = [];
    let searchVal = searchInput.value.toLowerCase();
    arr = allCountry.filter(data => {
        return data.toLowerCase().startsWith(searchVal);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? 'active' : '';
        return `<li onclick ='updateCountry(this)' class="${isSelected}">${data}</li>`
    }).join('');
    menu.innerHTML = arr ? arr : `<p>Oop's no Country Found</p>`;
})