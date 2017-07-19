/**
 * Created by linzhou on 2017/7/18.
 */
const mongoose = require('mongoose');

//用户表结构
let UserSchema = new mongoose.Schema({
	//用户名
	user_name:String,
	//密码
	password:String,
	//是否是管理员
	isAdmin:{
		type:Boolean,
		default:false,
	}
});
module.exports = UserSchema;