// 백엔드
import http from "http";
import { WebSocketServer } from "ws"; 
import express from "express";
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname + "/src/public"));
app.get("/", (req, res)=> res.render("home"));

console.log('hello');

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app); // 내 http 서버에 access
const wss = new WebSocketServer({server}); // http 서버 위에 websocket 서버 생성
// 이렇게 함으로써 로컬호스트는 동일한 포트에서 http, ws request 두개 다 처리할 수 있음

const sockets = []; 
// 누군가 우리 서버에 연결하면 그 connection을 여기 넣을 것
// 이렇게 하면 받은 메세지를 다른 모든 소켓에 전달해줄 수 있음

//지금은 모든 것들이 socket message에 들어가야 메세지 type을 확인할 수 있음
wss.on("connection", (socket)=>{ 
    // 매번 새로운 브라우저가 백엔드로 연결할 때, 이 코드는 백엔드와 연결된 각브라우저에 대해 작동 -
    // server.js의 socket은 연결된 브라우저를 의미, 이 소켓이 프론트엔드와 실시간으로 소통할 수 있음
    sockets.push(socket); // firefox가 연결될때 firefox를 이 array에 넣어줌, brave인경우에도 마찬가지로 brave를 array에 넣음

    socket["nickname"] = "Anon"; // 소켓안에 정보 저장 가능 - 데이터 주면 됨
    console.log("connected to Browser ✅");
    socket.on("close",()=>{ // 브라우저를 닫으면 실행됨
        console.log("Disconnected from the Browser ❌")
    })
    socket.on("message", (msg) => {// 브라우저가 서버에 메세지 보냈을 때를 위한 리스너
        const message = JSON.parse(msg);
        switch(message.type){
            case "new_message":
                sockets.forEach(aSocket => aSocket.send(`${socket.nickname}: ${message.payload}`));
            break;
            
            case "nickname": // 닉네임 지정시 - 소켓에 넣음
                socket["nickname"] = message.payload;
            break;
        }

        // 유저가 보낸 메세지를 다시 user에게 보낼 것
        //socket.send(message.toString());
        });
    //socket.send('hello!!!!'); // 백엔-> 프엔 으로 메세지 보내기 (브라우저에서 메세지 보내기)
}); // 커넥션 생기면 소켓 받음
// on method는 백엔드에 연결된 사람 정보 제공, 그게 socket에서 옴
// 소켓은 서버와 브라우저 사이의 연결, 즉 ㄴ소켓을 이용하면 메세지 주고 받기를 할 수 있음

server.listen(3000, handleListen);
