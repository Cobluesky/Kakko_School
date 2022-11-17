const express = require("express");

//웹 서버 생성 인스턴스 생성
const app = express();

//포트 설정 (~1024까지는 사실상 못쓴다고 봐야함)
// 80번은 HTTP 기본 포트, 443은 HTTPS의 기본 포트
app.set("port", 1117);

//요청을 처리하는 함수 외부에 만든 변수는
//모든 사용자가 공유한다.
let num = 1;

const session = require("express-session");

//세션 사용하기 위한 미들웨어 설정
//secret : 세션은 클라이언트에 키를 만들어 매핑함
app.use(session(
    {
        secret : "secret",
        resave : false,
        saveUninitialized : true
    }
))

//사용자 요청 처리
app.get("/session", (req, res) => 
{
    //세션에 num의 값이 없으면 1로 초기화하고 있으면 1 증가
    if (!req.session.num)
    {
        req.session.num = 1;
    } else {
        req.session.num += 1;
    }

    res.send("num : " + num + "<br/>" + "session num : " + req.session.num);
    
    num = num + 1;
})

//서버 실행 후 사용자 요청 처리
app.listen(app.get("port"), () => {
    console.log(app.get("port") + "에서 서버 구동중");
})


