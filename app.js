/**
 * Created by linzhou on 2017/7/17.
 * 应用入口文件
 */
const express = require('express');
const app= express();
const port = 8080;
//首页
app.get('/',(req,res,next)=>{
	res.send('<div>hello world</div>')
});
app.listen(port);