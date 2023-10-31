// 백엔드
import http from "http";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";
import express from "express";
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname + "/src/public"));
app.get("/", (req, res)=> res.render("home"));

console.log('hello');

const httpServer = http.createServer(app);
const wsServer = new Server(httpServer, { // http 서버 위에 websocket 서버 생성
    cors: { // 해당 코드는 socket.io admin을 활용하기 위한 코드
        origin: ["https://admin.socket.io"],
        credentials: true,
    }
});

instrument(wsServer, { // 해당 코드는 socket.io admin을 활용하기 위한 코드
    auth: false
});

function publicRooms(){ // public 채팅방 
    const {
        sockets: {
            adapter: {sids, rooms},
        },
    } = wsServer; // wsServer.sockets.adapter로부터 sids와 rooms 가져오기 

    const publicRooms = [];
    rooms.forEach((_,key) => {
        if(sids.get(key) === undefined){
            publicRooms.push(key);
        }
    });
    return publicRooms;
}

function countRoom(roomName){ // 채팅방에 접속한 인원 계산 - Set 자료구조의 size 를 이용
    return wsServer.sockets.adapter.rooms.get(roomName)?.size;
}

wsServer.on("connection", (socket) => {
    // 처음 접속시 기본 닉네임 지정
    socket["nickname"] = "Anonymous";

    socket.onAny((event) => { // 소켓에 있는 모든 이벤트를 살핌 ! 
        console.log(wsServer.sockets.adapter);
        console.log(`socket event: ${event}`);
    });

    // enter_room - 초기 폼 숨기기, 채팅방 보여주기, welcome 메세지 채팅방내 다른 이용자에게 보여주기, 
    socket.on("enter_room", (roomName, done) => { 
        socket.join(roomName);
        done(); // 프론트엔드에서 showRoom 코드 실행 -
        socket.to(roomName).emit("welcome", socket.nickname, countRoom(roomName)); // 메세지를 하나의 소켓에 보냄
        wsServer.sockets.emit("room_change", publicRooms()); // wsServer.sockets이니 모든 소켓에 보냄
    });

    // disconnecting - 소켓이 방을 떠나기 바로 직전에 발생, 즉 클라이언트가 서버와 연결이 끊어지기 전에 실행
    socket.on("disconnecting",()=>{
        // 클라이언트가 종료 메세지를 모두에게 보냄
        socket.rooms.forEach(room => 
            socket.to(room).emit("bye", socket.nickname, countRoom(room) - 1)
        ); 
    });

    // disconnect - 
    socket.on("disconnect", ()=>{
        wsServer.sockets.emit("room_change", publicRooms());
    });

    // new_message - 메세지 send
    socket.on("new_message", (msg, room, done)=>{
        socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
        done(); // 프론트엔드에서 showRoom 코드 실행 -
    });

    // nickname 이벤트 - 닉네임 save시 소켓에 저장
    socket.on("nickname", nickname => socket["nickname"] = nickname);
})

const handleListen = () => console.log(`Listening on http://localhost:3000`);

httpServer.listen(3000, handleListen);