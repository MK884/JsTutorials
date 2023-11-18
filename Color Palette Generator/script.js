var container = document.querySelector('.container');
var refBtn = document.querySelector('.ref-btn');

const boxNums = 32;

const generatePalette = () => {
    container.innerHTML ="";
    // console.log(Math.floor(Math.random() * 0xffffff).toString(16));
    for (let i = 0; i < boxNums; i++) {

        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`;
        
        const palette = document.createElement('li');
        palette.classList.add('color');
        palette.innerHTML = `
        <div class="color-box" style="background-color:${randomHex};"></div>
        <span class="hex-value">${randomHex}</span>
        `
        palette.addEventListener('click',() =>copyColor(palette,randomHex) )
        container.appendChild(palette);
    }
    
}
generatePalette();

const copyColor =(Ele,Hex)=>{
    const colorElement = Ele.querySelector('.hex-value');
    navigator.clipboard.writeText(Hex).then(()=>{
        colorElement.innerText = 'copied';
        setTimeout(()=> colorElement.innerText = Hex, 1000)
    }).catch(()=>{
        alert('Failed to copy color');
    })
}

refBtn.addEventListener('click', generatePalette);