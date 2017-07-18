/**
 * Created by linzhou on 2017/7/18.
 */
const mongoose = require('mongoose');

//用户表结构
let UserSchema = new mongoose.Schema({
	user_name:String,//用户名
	password:String	//密码
});
module.exports = UserSchema;