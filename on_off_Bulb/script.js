var Img = document.querySelector('img');
var onBtn = document.getElementById('bulb-on');
var offBtn = document.getElementById('bulb-off');

onBtn.addEventListener('click', function(){
    
    Img.src = 'https://i.postimg.cc/6QyTynzr/bulb-on.png';
    
})

offBtn.addEventListener('click', function(){
    
    Img.src = 'https://i.postimg.cc/KjK1wL3c/bulb-off.png';

    
})