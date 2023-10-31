// 프론트엔드
const socket = io();
// io function은 알아서 socket.io를 실행하고 있는 백엔드 서버를 찾음

const welcome = document.getElementById("welcome");
const form  = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden= true;

let roomName;

function addMessage(message){
    const ul = room.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = message;
    ul.appendChild(li);
}

function handleMessageSubmit(event){
    event.preventDefault();
    const input = room.querySelector("#msg input");
    const value = input.value;
    socket.emit("new_message", input.value, roomName,()=>{
        addMessage(`you : ${value}`);
    });
    input.value ="";
}

function handleNicknameSubmit(event){
    event.preventDefault();
    const input = room.querySelector("#name input");
    socket.emit("nickname", input.value);
    input.value ="";
}

function showRoom(){
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3");
    h3.textContent = `Room ${roomName}`;
    const msgForm = room.querySelector("#msg");    
    const nameForm = room.querySelector("#name");

    msgForm.addEventListener("submit", handleMessageSubmit);
    nameForm.addEventListener("submit", handleNicknameSubmit);
}

function handleRoomSubmit(event){
    event.preventDefault();
    const input = form.querySelector("input");
    socket.emit("enter_room", input.value, showRoom); 
    // enter_room이라는 event를 emit, argument는 object가 될 수 있음
    roomName = input.value;
    input.value="";
}
// 특정한 event를 emit해줄 수 있음
// argument로 object를 전송할 수 있음
// 맨 마지막에 넣은 callback은 서버가 호출할 수 있지만 그 함수는 프론트엔드에서 실행됨.

form.addEventListener("submit", handleRoomSubmit);

socket.on("welcome", (user, newCount)=>{
    const h3 = room.querySelector("h3");
    h3.textContent = `Room ${roomName} (${newCount})`;
    addMessage(`${user} arrived!`);
})

socket.on("bye", (left, newCount)=>{
    const h3 = room.querySelector("h3");
    h3.textContent = `Room ${roomName} (${newCount})`;
    addMessage(`${left} left TT`);
})

socket.on("new_message", addMessage);

socket.on("room_change", (rooms)=>{
    const roomList = welcome.querySelector("ul");
    roomList.innerHTML = ""; // roomList를 비워서 항상 새로운 리스트가 되도록 함
    if(rooms.length === 0){ // 내 어플리케이션에 room이 하나도 없을 때 리스트를 비움
        return 
    }
    rooms.forEach(room => {
        const li = document.createElement("li");
        li.textContent = room;
        roomList.append(li);
    });
});