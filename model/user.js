const mongoose = require('./db.js')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        index: true,//给name开启索引
        trim: true//定义mongoose修饰符，会自动去掉name的空格
    },
    age: Number,
    redirect: {
        type: String,

        //还有一个get方法就不介绍了，用的很少，也不建议使用

        set(parmas) {//增加数据的时候对redirect字段进行处理
            if (!parmas) {//parmas可以获取redirect的值
                return ''
            } else {
                if (parmas.startsWith('http://') || parmas.startsWith('https://')) {
                    return parmas
                } else {
                    return 'http://' + parmas
                }
            }
        }
    },
    status: {//默认参数
        type: Number,
        default: 1
    },

})

module.exports = mongoose.model('Wqs', UserSchema, 'wqs')