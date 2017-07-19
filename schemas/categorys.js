/**
 * Created by linzhou on 2017/7/18.
 */
const mongoose = require('mongoose');

//文章分类 结构表
let Category = new mongoose.Schema({
	//分类名
	name:String,
});
module.exports = Category;