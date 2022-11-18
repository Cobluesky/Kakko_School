// const express = require("express");
// const path = require("path");
// const session = require("express-session");
// const fileStore = require("session-file-store")(session);
// const dotenv = require("dotenv"); //.env 읽어서 process.env에 저장
// const fs = require("fs");
// const multer = require("multer");
// const app = express();

// dotenv.config({ path: "Node/.env" }); // 항상 최상단에 위치

// app.set("port", process.env.PORT);

// //로그 출력
// const morgan = require("morgan");
// const { urlencoded } = require("express");
// app.use(morgan("dev"));


// //dir을 읽는다
// //dir이 없으면 예외발생
// try {
//   fs.readdirSync("uploads");
// } catch (error) {
//   fs.mkdirSync("uploads");
// }

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "uploads/");
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//     limits: { fileSize: 1024 * 1014 * 10 },
//   }),
// });

// //단일 파일 업로드 처리
// app.get("/single", (req, res) => {
//     res.sendFile(path.join(__dirname, "/single.html"));
//   });
  
//   app.post("/single", upload.single("image"), (req, res) => {
//     //title 파리미터 읽기
//     console.log(req.body.title);
//     res.send("성공");
//   });
  
//   app.get("/multi", (req, res) => 
//   {
//       console.log('멀티 ');
//     res.sendFile(path.join(__dirname, "/multi.html"));
//   });
  
//   app.post("/multi", upload.array("image"), (req, res) => {
//     //title 파리미터 읽기
//     console.log(req.body.title);
//     console.log(req.file.originalname);
//     res.send("성공");
//   });
  
  
//   app.get("/", (req, res) => {
//       res.sendFile(path.join(__dirname, "./main.html"));
//     });  


// //post 방식의 param을 읽을 수 있도록 설정
// app.use(express.json());
// app.use(express, urlencoded({ extended: false }));

// //쿠키 사용이 가능하도록 설정
// const cookieParser = require("cookie-parser");
// app.use(cookieParser(process.env.COOKIE_SECRET));

// // app.method(url, (req, res) =>
// // {

// // });

// //세션 장착
// app.use(
//   session({
//     secret: "this is secret key",
//     resave: false,
//     saveUninitialized: true,
//     store: new fileStore(),
//   })
// );

// const indexRouter = require("./index");
// const usersRouter = require("./users");
// const boardRouter = require("./board");

// //URL과 매핑
// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/board", boardRouter);



// app.listen(process.env.PORT, () => {
//   console.log(process.env.PORT + "번 포트에서 서버 대기 중");
// });

const express = require("express");
const path = require("path");

const app = express();
app.set("port",1118);


//pug 설정
app.set("views", path);
//res.render로 출력할 때 사용할 dir 설정
app.set("views", path.join(__dirname, "views"));
//템플릿 엔진을 pug로 결정
app.set("view engine", "pug");

app.use("/", (req, res) =>
{
    res.render("index", {"title" : "pug", "Persons" : ["Alpha", "Bravo", "Charlie", "Delta"]});
})

//라우터 파일의 내용 가져오기
const indexRouter = require("./routers/index")
const usersRouter = require("./routers/users")
const boardRouter = require("./routers/board")
//URL과 매핑
//app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/board", boardRouter);


app.listen(app.get("port"), () => 
{
    console.log(app.get("port"));
})