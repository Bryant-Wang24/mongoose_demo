const mongoose = require('./db.js')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        // index: true,//给name开启索引
        // trim: true//定义mongoose修饰符，会自动去掉name的空格
    },
    sn: {
        type: String,
        index: true
    },
    age: Number,
    // redirect: {
    //     type: String,

    //     //还有一个get方法就不介绍了，用的很少，也不建议使用

    //     set(parmas) {//增加数据的时候对redirect字段进行处理
    //         if (!parmas) {//parmas可以获取redirect的值
    //             return ''
    //         } else {
    //             if (parmas.startsWith('http://') || parmas.startsWith('https://')) {
    //                 return parmas
    //             } else {
    //                 return 'http://' + parmas
    //             }
    //         }
    //     }
    // },
    // status: {//默认参数
    //     type: Number,
    //     default: 1
    // },
})

// 静态方法
UserSchema.statics.findBySn = function (sn, cb) {
    // 通过find方法获取sn的数据，this关键字获取当前的model
    this.find({ "sn": sn }, function (err, data) {
        cb(err, data)
    })
}

module.exports = mongoose.model('Wqs', UserSchema, 'wqs')