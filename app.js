/**
 * Created by linzhou on 2017/7/17.
 * 应用入口文件
 */
const express = require('express');
const mongoose = require('mongoose');//数据库链接
const bodyParser= require('body-parser');//处理post请求参数


const app= express();
const port = 8080;

app.use(bodyParser.urlencoded({extended:true}));

app.use('/admin',require('./routes/admin'));
app.use('/api',require('./routes/api'));
// app.use('/',require('./routes/index'));
mongoose.connect('mongodb://localhost:27017/blog',{useMongoClient:true});
app.listen(port);