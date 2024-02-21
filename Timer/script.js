const hrsTag = document.querySelector('.hrs'),
minTag = document.querySelector('.min'),
strBtn = document.querySelector('.strBtn'),
stpBtn = document.querySelector('.stpBtn'),
btnsTag = document.querySelector('.btns'),
secTag = document.querySelector('.sec');

let timer,
sec=0,
min=0,
hrs=0;

const formatTime = (time) =>{
    return time < 10 ? '0' + time : time;
}

const displayTimer = (sec,min,hrs) =>{

    secTag.innerText = formatTime(sec);
    minTag.innerText = formatTime(min);
    hrsTag.innerText = formatTime(hrs);

}


const startTimer = () =>{
    timer = setInterval(() => {
        sec++;
        if(sec === 60){
            min++;
            sec = 0;
        }
        if(min === 60){
            hrs++;
            min = 0;
        }

        displayTimer(sec, min, hrs);

    }, 1000);
}

const stopTimer = () =>{
    if(stpBtn.innerText === "Restart Timer"){
        sec = min = hrs = timer =0;
        startTimer();
        stpBtn.innerText = "Stop Timer";
        strBtn.innerText = "Start Timer";
        btnsTag.classList.add('active');
    }else{
        clearInterval(timer)
        btnsTag.classList.remove('active');
        strBtn.innerText = "Resume Timer";
        stpBtn.innerText = "Restart Timer";
        stpBtn.style.display = "block";
    }
}

const resumeTimer = () =>{
    stpBtn.innerText = "Stop Timer";
    strBtn.innerText = "Start Timer";
    startTimer();
}

strBtn.addEventListener('click',()=>{
    btnsTag.classList.add('active');
    if(strBtn.innerText === "Resume Timer"){
        resumeTimer();
    }else{
        startTimer();
    }
})
stpBtn.addEventListener('click',stopTimer);