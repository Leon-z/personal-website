/**
 * Created by linzhou on 2017/7/18.
 */
const mongoose = require('mongoose');
const UserSchema = require('../schemas/users');

let User = mongoose.model('User',UserSchema);

module.exports = User;