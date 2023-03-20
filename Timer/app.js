const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const pauseBtn = document.getElementById('pause-btn');
const startImg = document.getElementById('start-img');
const resetImg = document.getElementById('reset-img');
const hourBtn = document.getElementById('hour');
const minBtn = document.getElementById('min');
const secBtn = document.getElementById('sec');
let TimerControl;

const btnActive = () => {
    startBtn.disabled = false;
    resetBtn.disabled = false;
    startImg.setAttribute('src','./src/start-default.svg');
    resetImg.setAttribute('src','./src/reset-default.svg');
}

const maxTimeAlert = () => {
    if(parseInt(hourBtn.textContent) === 12){
        alert('마이 타이머의 최대 설정 시간은 12시간 입니다.');
        hourBtn.textContent = '12';
        minBtn.textContent = '00';
        secBtn.textContent = '00';
    }
}

hourBtn.addEventListener('click',()=>{
    if(parseInt(hourBtn.textContent) < 12){
        hourBtn.textContent++;
        if(hourBtn.textContent < 10){
            hourBtn.textContent = '0' + hourBtn.textContent;
        }
    }
    maxTimeAlert();
    btnActive();
})

minBtn.addEventListener('click',()=>{
    if(parseInt(minBtn.textContent) < 59){
        minBtn.textContent++;
        if(minBtn.textContent < 10){
            minBtn.textContent = '0' + minBtn.textContent;
        }
    }else{
        minBtn.textContent = '00';
        hourBtn.textContent++;
    }
    maxTimeAlert();
    btnActive();
})

secBtn.addEventListener('click',()=>{
    if(parseInt(secBtn.textContent) < 59){
        secBtn.textContent++;
        if(secBtn.textContent < 10){
            secBtn.textContent = '0' + secBtn.textContent;
        }
    }else{
        secBtn.textContent = '00';
        if(parseInt(minBtn.textContent) < 59){
            minBtn.textContent++;
        }else{
            minBtn.textContent = '00';
            hourBtn.textContent++;
        }
    }
    maxTimeAlert();
    btnActive();
})

const operateTimer = () => {
    if(parseInt(secBtn.textContent) > 0){
        secBtn.textContent = parseInt(secBtn.textContent) - 1;
        if(secBtn.textContent < 10){
            secBtn.textContent = '0' + secBtn.textContent;
        }
    }else if(parseInt(secBtn.textContent) === 0){
        if(parseInt(minBtn.textContent) > 0){
            secBtn.textContent = parseInt(59);
            minBtn.textContent = parseInt(minBtn.textContent) - 1;
            if(minBtn.textContent < 10){
                minBtn.textContent = '0' + minBtn.textContent;
            }
        }else if(parseInt(minBtn.textContent) < 1 && parseInt(hourBtn.textContent) > 0){
            hourBtn.textContent = parseInt(hourBtn.textContent) - 1;
            minBtn.textContent = parseInt(59);
            secBtn.textContent = parseInt(59);
            if(hourBtn.textContent < 10){
                hourBtn.textContent = '0' + hourBtn.textContent;
            }
            if(minBtn.textContent < 10){
                minBtn.textContent = '0' + minBtn.textContent;
            }
        }else if(parseInt(minBtn.textContent) < 1 && parseInt(hourBtn.textContent) < 1){
            alert('타이머가 종료되었습니다.');
            btnDisabled();
        }
    }
}

startBtn.addEventListener('click', ()=>{
    startBtn.style.display = 'none'
    pauseBtn.style.display = 'block';
    TimerControl = setInterval(operateTimer, 1000);
})

const btnDisabled = () => {
    startBtn.disabled = true;
    resetBtn.disabled = true;
    startBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    startImg.setAttribute('src', './src/start-disabled.svg');
    resetImg.setAttribute('src', './src/reset-disabled.svg');
    hourBtn.textContent = '00';
    minBtn.textContent = '00';
    secBtn.textContent = '00';
    clearInterval(TimerControl);
}

resetBtn.addEventListener('click', () => {
    btnDisabled();
})

pauseBtn.addEventListener('click', () => {
    clearInterval(TimerControl);
    startBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
})