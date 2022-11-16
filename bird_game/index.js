const score = document.querySelector('.score');
const startBtn = document.querySelector('.btn-start');
const gameArea = document.querySelector('.area-game');
const gameMsg = document.querySelector('.msg-game');

startBtn.addEventListener('click', start);
gameMsg.addEventListener('click', start);
document.addEventListener('keydown', pressOn);
document.addEventListener('keyup', pressOff);

// 사용자 키 정보 저장 변수
let keys = {} ;

let player = {
    x:0,
    y:0,
    speed:3,
    score:0,
    inplay: false // 플레이 상태
};

let pipe = {
    startPos : 0,
    spaceBetweenRow : 0, // 기둥 좌우 간격
    spaceBetweenCol : 0, // 기둥 상하 간격
    pipeCount : 0 // 파이프 개수
}

function start(){
    player.inplay = true;
    player.score = 0;
    gameArea.innerHTML = "";

    gameMsg.classList.add('hide');
    startBtn.classList.add('hide');

    let bird = document.createElement('div');
    let wing = document.createElement('div');

    //스타트 누르면 새 나타남
    bird.setAttribute('class','bird');
    wing.setAttribute('class','wing');

    //새 날개짓
    wing.pos = 15;
    wing.style.top = wing.pos + 'px'; // 15px

    bird.appendChild(wing);
    gameArea.appendChild(bird); 
    player.x = bird.offsetLeft;
    player.y = bird.offsetTop;

    pipe.startPos = 0;
    pipe.spaceBetweenRow = 400 ;
    pipe.pipeCount = Math.floor(gameArea.offsetWidth / pipe.spaceBetweenRow); // 소수점 아래 버리고 정수 반환

    for(let i = 0; i < pipe.pipeCount; i++){
        makePipe(pipe.startPos * pipe.spaceBetweenRow); // 파이프의 위치값
        pipe.startPos++;
    }

    window.requestAnimationFrame(playGame); // 애니메이션 부드럽게 처리해주는 함수
}

function makePipe(pipePos){
    let totalHeight = gameArea.offsetHeight;
    let totalWidth = gameArea.offsetWidth;
    let pipeUp = document.createElement('div'); // 위쪽 파이프

    pipeUp.classList.add('pipe');
    pipeUp.height = Math.floor(Math.random() * 350); // 파이프 높이를 랜덤하게
    pipeUp.style.height = pipeUp.height + 'px';
    pipeUp.style.left = totalWidth + pipePos + 'px';
    pipeUp.x = totalWidth + pipePos ;
    pipeUp.style.top = "0px";
    pipeUp.style.backgroundColor = "black";
    gameArea.appendChild(pipeUp);

    pipe.spaceBetweenCol = Math.floor(Math.random()*250) + 150;
    // 최소 150부터 400(250+150)까지의 간격

    let pipeDown = document.createElement('div');
    pipeDown.classList.add('pipe');
    pipeDown.style.height = totalHeight - pipeUp.height - pipe.spaceBetweenCol + "px";
    pipeDown.style.left = totalWidth + pipePos + "px";
    pipeDown.x = totalWidth + pipePos;
    pipeDown.style.bottom = "0px";
    pipeDown.style.backgroundColor = "black";
    gameArea.appendChild(pipeDown);
}

function movePipes(bird){
    let pipes = document.querySelectorAll('.pipe'); // 모든 파이프 가져옴
    let counter = 0; //삭제된 기둥 개수 카운트
    pipes.forEach(function(item){
        item.x -= player.speed;
        item.style.left = item.x + "px";
        if(item.x < 0){
            item.parentElement.removeChild(item); // 파이프 부모 요소를 통해 파이프를 삭제
            counter++; // 파이프 삭제 될때마다 counter ++ 
        }
        //기둥 충돌 감지
        if(isCollide(item, bird)){
            playGameOver(bird);
        }
    }); // pipes 순환

    for(let i = 0; i < counter/2 ; i++){
        makePipe(0);
        }
    }

function isCollide(pipe, bird){
    let pipeRect = pipe.getBoundingClientRect();
    let birdRect = bird.getBoundingClientRect();

    return (
        pipeRect.left < birdRect.right && 
        pipeRect.right > birdRect.left && 
        pipeRect.bottom > birdRect.top && 
        pipeRect.top < birdRect.bottom

        // x축겹침
        // pipeRect.left < birdRect.right && pipeRect.right > birdRect.left
        // y축겹침
        // pipeRect.bottom > birdRect.top && pipeRect.top < birdRect.bottom
    )
}

function playGame(){
    if(player.inplay){
        let bird = document.querySelector('.bird');
        let wing = document.querySelector('.wing');
        movePipes(bird);

        let move = false;
    
        if(keys.ArrowLeft && player.x > 0){ 
            player.x -= player.speed;
            move = true;
        }
        if(keys.ArrowRight && player.x < gameArea.offsetWidth - bird.offsetWidth){
            // 
            player.x += player.speed;
            move = true;
        }
        if((keys.ArrowUp || keys.Space) && player.y > 0){
            player.y -= player.speed * 5;
            move = true;
        }
        if(keys.ArrowDown && player.y < gameArea.offsetHeight - bird.offsetHeight){
            player.y += player.speed;
            move = true;
        }
    
        if(move){
            wing.pos = wing.pos === 15 ? 25 : 15 ;
            wing.style.top = wing.pos + "px";
        }
    
        player.y += player.speed * 2;
        if(player.y > gameArea.offsetHeight){ // 아래로 떨어지면 게임 오버
            playGameOver(bird);
        }
    
        bird.style.left = player.x +"px"
        bird.style.top = player.y +"px"
    
        window.requestAnimationFrame(playGame);
        //자기 자신을 또 실행? 
        player.score++;
        score.textContent ="SCORE : " + player.score;
    }
}

function playGameOver(bird){
    player.inplay = false;
    gameMsg.classList.remove('hide');
    gameMsg.innerHTML = 
    "🚨 GAME OVER 🚨<br/>" + (player.score +1)+ " points<br/>Click here to restart!";
    bird.setAttribute("style", "transform:rotate(180deg)")
}

// 키 눌림 확인
function pressOn(e){
    keys[e.code] = true;
    console.log(keys)
}

function pressOff(e){
    keys[e.code] = false;
    console.log(keys)
}