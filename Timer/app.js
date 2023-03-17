const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const startImg = document.getElementById('start-img');
const resetImg = document.getElementById('reset-img');

const hourBtn = document.getElementById('hour');
const minBtn = document.getElementById('min');
const secBtn = document.getElementById('sec');

const btnActive = () => {
    startBtn.disabled = false;
    startImg.setAttribute('src','./src/start-default.svg');
    resetBtn.disabled = false;
    resetImg.setAttribute('src','./src/reset-default.svg');
}

hourBtn.addEventListener('click',()=>{
    console.log('hour')
    btnActive();
})

minBtn.addEventListener('click',()=>{
    console.log('min')
    btnActive();

})

secBtn.addEventListener('click',()=>{
    console.log('sec')
    btnActive();
})

startBtn.addEventListener('click', ()=>{
    console.log('스타트버튼')
    // 스타트 버튼 누르면 스타트 버튼 정지 버튼으로 바꾸기
    startImg.setAttribute('src','./src/pause.svg');

})

resetBtn.addEventListener('click', ()=>{
    console.log('리셋버튼')
    // 리셋버튼 누르면 초기화
})
