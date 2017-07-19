/**
 * Created by linzhou on 2017/7/18.
 */
const express = require('express');

const User = require('../models/User');
const Category = require('../models/Category');


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
//所有进入/admin路由的用户都会先经过以下中间件先处理一遍
router.use((req, res, next) => {

	//如果用户没登录 or 用户不是管理员
	if (!req.userInfo.user_name) {
		res.send('你都没登陆！！你走开');
		return
	} else if (!req.userInfo.isAdmin) {
		res.send('你是个假的管理员！！');
		return
	}
	next()
});
router.get('/', (req, res, next) => {
	res.send('终于来了个真的管理员')
});

//分页获取用户列表
router.get('/user/list', (req, res) => {
	const {page_size, page_number} = req.query;
	const limit = Number(page_size);
	const skip = page_size * page_number;
	let result = {};
	User.count()
		.then(count => {

			User.find()
				.limit(limit)
				.skip(skip)
				.then((users) => {
					result.total = count;
					result.obj = users;
					res.send(result)
				});

		})

});

//获取 博客分类
router.get('/category/list', (req, res) => {
	const {page_size, page_number} = req.query;
	const limit = Number(page_size);
	const skip = page_size * page_number;
	let result = {};
	User.count()
		.then(count => {

			User.find()
				.limit(limit)
				.skip(skip)
				.then((users) => {
					result.count = count;
					result.obj = users;
					res.send(result)
				});

		})
});

//新增 博客分类
router.post('/category',(req, res)=>{
	const { name }= req.body;

	//如果有传入name且不为空
	if(!!name){
		Category.findOne({
			name:name
		})
			.then((rs)=>{

				//数据库已经存在当前分类
				if(rs){
					responseData.code = 1;
					responseData.message = `已经存在分类：【${name}】，请不要重复输入`;
					res.json(responseData);
				}else{
					new Category({
						name:name,
					}).save();
					responseData.code = 0;
					responseData.message = `分类：【${name}】已录入`;
					res.json(responseData);
				}
			})
	}else {

		responseData.code = 1;
		responseData.message = '参数不能为空';
		res.json(responseData);

	}

});
module.exports = router;