const UserModel = require('./model/user.js')

// 查询数据
// UserModel.find({}, function (err, doc) {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(doc);
// })

// 增加数据
const user = new UserModel({
    name: "curry",//添加的数据有空格
    age: 40,
    sn: '123456',
    redirect: 'https://www.baidu.com'
})
user.print()//自定义的实例方法


// user.save(function (err) {
//     if (err) {
//         console.log(err);
//         return
//     }
// })

UserModel.findBySn('123456', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
})





// // 1、引入mongoose
// const mongoose = require('mongoose');
// // 2、建立连接
// mongoose.connect('mongodb://127.0.0.1:27017/wqs');

// // 3、操作user表（集合）定义一个Schema,Schema里面的对象和数据库表里面的字段需要一一对应
// const UserSchema = mongoose.Schema({
//     name: String,
//     age: Number,
//     status: {//默认参数
//         type: Number,
//         default: 1
//     }
// })
// // 4、定义数据库模型，操作数据库
// // model里面的第一个参数1、首字母大写，2、要和数据库表名称对应
// const Wqs = mongoose.model('Wqs', UserSchema, 'wqs')

// // 5、查询users表的数据
// // Wqs.find({}, function (err, doc) {  
// //     if (err) {
// //         console.log(err);
// //         return
// //     }
// //     // console.log(doc);
// // })

// // 6、增加数据，1、实例化Model,通过实例化Wqs Molde创建增加数据.2、实例.save()
// const u = new Wqs({
//     name: '科比',
//     age: 41
// })

// u.save(function (err) {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('添加成功');
// })//执行增加操作

// // 7、修改数据
// // Wqs.updateOne({ name: "科比" }, { age: 41 }, function (err, doc) {
// //     if (err) {
// //         return console.log(err);
// //     }
// //     console.log("更新成功");
// // })

// // 8、删除数据
// // Wqs.deleteOne({ name: "科比" }, function (err, doc) {
// //     if (err) {
// //         return console.log(err);
// //     }
// //     console.log("更新成功");
// // })
