const express = require("express");
const morgan = require("morgan");
const fileStreamRotator = require("file-stream-rotator");
const fs = require("fs");
//현재 dir에 대한 절대 경로를 알아내기 위한 내장 모듈
const path = require("path")

const app = express(); // 웹 서버 인스턴스 생성

//로그 파일 저장할 dir 생성
const logDir = path.join(__dirname, 'log');
//dir 여부를 판단하고 없으면 생성
fs.existsSync(logDir) || fs.mkdirSync(logDir);

//일단위 로그 기록 설정
const accessLogStream = fileStreamRotator.getStream({
    date_format : 'YYYYMMDD',
    filename : path.join(logDir, 'access-%DATE%.log'),
    frequency : 'daily',
    verbose : true
});

app.use(morgan('combined', {stream:accessLogStream}));

app.set("port", 1313); //포트 설정

//사용자 요청 처리 코드 작성
app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, '/main.html'));
});

app.listen(app.get('port'), () => {
    //서버가 정상적으로 구동되었을 때 수행할 내용
    //일반적으로는 콘솔에 메시지를 출력
    console.log(app.get('port'), '번에서 서버 구동중');
})