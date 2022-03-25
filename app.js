//모듈
const express=require('express');
const app=express();
const bodyParser=require("body-parser");
//라우팅
const home=require('./src/routes/home');


app.set("views","./src/views");
app.set("view engine","ejs");//html엔진 설정
app.use(express.static(`${__dirname}/src/public`));//html의 스크립트 절대경로 설정
app.use(bodyParser.json());//fetch로 백엔드에서 받을 때 설정
app.use(bodyParser.urlencoded({extended:true}));//
app.use("/",home);// /로 들어오는 것에 대해서 home으로 보내주겠다.라우팅하기

module.exports=app;
