/**
 * Created by linzhou on 2017/7/17.
 * 应用入口文件
 */
const express = require('express');
const mongoose = require('mongoose');//数据库链接
const bodyParser = require('body-parser');//处理post请求参数
const Cookies = require('cookies');//加载cookies

const User = require('./models/User');

const app = express();
const port = 8080;

//中间件 body-parser设置
app.use(bodyParser.urlencoded({extended: true}));

//中间件 设置cookie等验证信息
app.use((req, res, next) => {
	req.cookies = new Cookies(req, res);

	//给req添加用户信息
	req.userInfo = {};

	//拿到头部cookie信息
	const cookies = req.cookies.get('userInfo');

	//如果有cookies设置userInfo
	//通过_id找到对应用户判断是否是管理员
	if (cookies) {
		try {
			req.userInfo = JSON.parse(cookies);

			//获取当前用户的登陆信息
			User.findById(req.userInfo._id)
				.then((userInfo) => {
					req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
					next();
				});
		} catch (e) {
			next();
		}
	}else{
		next();
	}

});

app.use('/admin', require('./routes/admin'));
app.use('/api', require('./routes/api'));
// app.use('/',require('./routes/index'));
mongoose.connect('mongodb://localhost:27017/blog', {useMongoClient: true});
app.listen(port);