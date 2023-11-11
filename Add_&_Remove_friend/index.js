var st = document.getElementById('status');
var btn = document.getElementById('btn');
var imageContainer = document.querySelector('.container');
var Icon = document.querySelector('i');

var isStatus = 0;
btn.addEventListener('click', function(){
    if(!isStatus){
    st.innerHTML = "Friend";
    st.style.color = "green";
    btn.innerHTML = "Remove";
    btn.style.backgroundColor = "#dadada";
    btn.style.color = "#111";
    isStatus = 1;
    }else{
        st.innerHTML = "Stranger";
    st.style.color = "red";
    btn.innerHTML = "Add to Friend";
    btn.style.backgroundColor = "cornflowerblue";
    btn.style.color = "#fff";
    isStatus = 0;
    }
    
})

imageContainer.addEventListener("dblclick",function(){
    Icon.style.transform = 'translate(-50%,-50%) scale(2)';
    Icon.style.opacity = 0.8;

    setTimeout(function(){
        Icon.style.opacity = 0;
        Icon.style.transform = 'translate(-50%,-50%) scale(0)';
    },1000)
})
