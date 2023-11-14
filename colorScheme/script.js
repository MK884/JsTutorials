var body = document.querySelector('body');
var btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'aqua'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
    })
})