/**
 * Created by linzhou on 2017/7/18.
 */
const express = require('express');

const User = require('../models/User');
const router = express.Router();

//统一返回格式
let responseData = {
	code: 0,
	message: '',
};
router.use((req, res, next) => {
	responseData = {
		code: 0,
		message: '',
	};
	next()
});
/**
 * 用户注册
 * 注册逻辑
 * 1.用户名不能为空
 * 2.密码不能为空
 * 3.两次输入密码要相同
 *
 * 4.用户名是否已经被注册（数据库查询）
 *----------------------
 * 返回一些信息
 */
router.post('/user/register', (req, res, next) => {
	const {user_name, password, re_password} = req.body;
	let _user;
	//1.用户名不能为空
	if (!user_name || user_name === ' ') {
		responseData.code = 1;
		responseData.message = '用户名不能为空';
		res.json(responseData);
		return

	}

	//2.密码不能为空
	if (!password || password === ' ') {
		responseData.code = 2;
		responseData.message = '密码不能为空';
		res.json(responseData);
		return
	}
	//3.两次输入密码要相同
	if (password !== re_password) {
		responseData.code = 3;
		responseData.message = '两次密码输入不一致';
		res.json(responseData);
		return
	}

	//4.验证数据库重名
	User
		.findOne({
			user_name: user_name
		})
		.then((user_info) => {
			if (user_info) {
				responseData.code = 4;
				responseData.message = '用户名已经被注册';
				res.json(responseData);
				return
			}
			//保存用户数据到数据库
			_user = new User({
				user_name,
				password,
			});
			return _user.save();
		})
		.then((new_user_info) => {
			responseData.message = '注册成功';
			req.cookies.set('userInfo',JSON.stringify({
				_id:new_user_info._id,
				user_name:new_user_info.user_name,
			}));
			return res.json(responseData);
		});


});

/**
 * 用户登录
 */
router.post('/user/login', (req, res, next) => {
	const {user_name, password} = req.body;
	if (!user_name || !password) {
		responseData.code = 1;
		responseData.message = '用户名和密码不能为空';
		res.json(responseData);
		return
	}

	//查询数据库中 输入用户名是否存在，且密码是否匹配
	User
		.findOne({
			user_name,
			password,
		})
		.then((user_info) => {
			if(!user_info){
				responseData.code = 2;
				responseData.message = '用户名或密码错误';
				res.json(responseData);
			}else{
				responseData.code = 3;
				responseData.message = '登录成功';
				responseData.user_info = {
					_id:user_info._id,
					user_name:user_info.user_name,
				};
				req.cookies.set('userInfo',JSON.stringify({
					_id:user_info._id,
					user_name:user_info.user_name,
				}));
				res.json(responseData);
			}
		})
});
router.get('/user/logout',(req,res)=>{
	req.cookies.set('userInfo',null);
	res.json(responseData);
});

module.exports = router;