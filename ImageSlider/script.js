const initalSlider= ()=>{
    var Btns = document.querySelectorAll('.wraper button');
    var ImageList = document.querySelector('.image-list');



    Btns.forEach(function(Btn){
        Btn.addEventListener('click',function(){
            const direction  = Btn.id === 'prev-btn' ? -1 : 1;
            const scrollAmount = ImageList.clientWidth * direction;
            ImageList.scrollBy({left:scrollAmount,behavior:'smooth'});
        })
    }) 

    
}

window.addEventListener('load', initalSlider);