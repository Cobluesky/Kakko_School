const http = require("http");
const fs = require("fs").promises;

//서버 생성
//일반적으로 1024번까지의 포트는 예약되어 있다.
//1521, 3306, 27017은 DB가 사용
//8080은 tomcat같은 WAS가 많이사용
//80을 사용하게되면 http의 경우 포트번호 생략가능
//443을 사용하게 되면 https의 경우 포트번호 생략가능
http.createServer(async(request, response) => 
{
    try
    {
        const data = await fs.readFile("./Node/Node_2/index.html");
        response.writeHead(200, {"Content-type" : "text/html; charset = utf-8"});
        response.end(data);
    }

    catch(error)
    {
        response.writeHead(500, {"Content-type" : "text/html; charset = utf=8"});
        response.end(error.message);
    }


}).listen(1313, () => 
{
    console.log('1313포트에서 대기중');
})