const mongoose = require('./db.js')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true//表示在增加数据的时候必须传入name字段，不然就会报错
        // index: true,//给name开启索引
        // trim: true//定义mongoose修饰符，会自动去掉name的空格
    },
    sn: {
        type: String,
        index: true,
        maxlength: 10,//sn的字符串长度最大为10
        minlength: 0,//最小为0
        match: /^sn(.*)/i,//正则，表示增加的数据开头必须是sn
        // validate:function(sn){
        //     return sn.length>=10
        // }//自定义校验
    },
    age: {
        type: Number,
        min: 0,//最小为0
        max: 150//增加的age最大为150
    },
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
        type: String,
        default: 'success',//默认值
        enum: ['success', 'err']//status的值必须在对应的数组里面，枚举用在string类型上面
    },
})

// 静态方法
UserSchema.statics.findBySn = function (sn, cb) {
    // 通过find方法获取sn的数据，this关键字获取当前的model
    this.find({ "sn": sn }, function (err, data) {
        cb(err, data)
    })
}

// 实例方法（用的很少）
UserSchema.methods.print = function () {
    console.log('我是一个实例方法');
    console.log(this);
}


module.exports = mongoose.model('Wqs', UserSchema, 'wqs')