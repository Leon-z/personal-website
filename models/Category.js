/**
 * Created by linzhou on 2017/7/18.
 */
const mongoose = require('mongoose');
const CategorySchema = require('../schemas/categorys');

let Category = mongoose.model('Category',CategorySchema);

module.exports = Category;