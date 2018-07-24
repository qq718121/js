/**
 * Created by admin on 2017/12/2.
 */
let prototype = require('./index.js');
prototype.prototype.val = 1;
prototype.prototype.arr = [1];
// prototype.prototype.age = age;
prototype.prototype.fun = function () {

};
//实现原型链的继承

function Sub(name) {
    this.name = name;
};
Sub.prototype = new prototype(12);
let sub_one = new Sub('潘辰凯');
let sub_two = new Sub('潘辰凯');
sub_one.arr.push(2);
console.log(sub_one);

//优点：简单容易实现
//缺点：无法通过继承的实例向被继承的构造函数传值，只能给自己传
//这是两个知名的缺点 不建议使用