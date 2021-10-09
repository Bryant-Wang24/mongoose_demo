const mongoose = require('./db.js')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true//定义mongoose修饰符，会自动去掉name的空格
    },
    age: Number,
    status: {//默认参数
        type: Number,
        default: 1
    }
})

module.exports = mongoose.model('Wqs', UserSchema, 'wqs')