// 프론트엔드
const messageList = document.querySelector("ul");
const nickForm = document.querySelector("#nick");
const messageForm = document.querySelector("#message");

// app.js 저장될 때마다 nodemon 새로 시작
const socket  = new WebSocket(`ws://${window.location.host}`); // app.js의 socket은 서버로의 연결 뜻함

function makeMessage(type, payload){
    const msg = {type, payload};
    return JSON.stringify(msg);
}

socket.addEventListener("open",()=>{ // 소켓이 커넥션을 오픈했을 때
    console.log("connected to Server ✅");
})

socket.addEventListener("message", (message) => { // 서버로부터 메세지 받을 때(백엔드에서 프론트엔드로 메세지 보낸 것)
    const li = document.createElement("li");
    li.textContent = message.data;
    messageList.append(li);
})

socket.addEventListener("close", () => { // 소켓이 커넥션 끊길 때
    console.log("Disconnected to Server ❌");
})

// 프론트엔드에서 백엔드로 메세지 보내기
// setTimeout(()=>{
//     socket.send('hello from the browser');
// },10000);

function handleSubmit(event){
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(makeMessage("new_message", input.value)); // 프론트엔드의 폼에서 백엔드로 보내는 것
    const li = document.createElement("li");
    li.textContent = `You : ${input.value}`;
    messageList.append(li);
    input.value = "";
}

function handleNickSubmit(event){
    event.preventDefault();
    const input = nickForm.querySelector("input");
    socket.send(makeMessage("nickname", input.value));
    input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit);