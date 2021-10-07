// 1、引入mongoose
const mongoose = require('mongoose');
// 2、建立连接
mongoose.connect('mongodb://127.0.0.1:27017/wqs');

module.exports = mongoose