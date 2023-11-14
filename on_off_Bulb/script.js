var Img = document.querySelector('img');
var onBtn = document.getElementById('bulb-on');
var offBtn = document.getElementById('bulb-off');
var body = document.querySelector('body');

onBtn.addEventListener('click', function(){
    
    Img.src = 'https://i.postimg.cc/6QyTynzr/bulb-on.png';
    body.style.backgroundColor = "rgb(224, 199, 52)"
})

offBtn.addEventListener('click', function(){
    
    Img.src = 'https://i.postimg.cc/KjK1wL3c/bulb-off.png';
    body.style.backgroundColor = "#111"

    
})