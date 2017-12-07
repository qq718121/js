/**
 * Created by admin on 2017/12/2.
 */
let Beget = require('./index');
Beget.prototype.fun_one = function () {
    console.log(3);
};
Beget.prototype.fun_two = function () {

};
//使用寄生组合方式实现继承
function beget(obj) {
    let F = function () {

    };
    F.prototype = obj;
    return F;
};
function Sub() {
    Beget.call(this);
};
let Be = beget(Beget.prototype);
Be.constructor = Sub;
Sub.prototype = new Be();
let sub_one = new Sub();
let sub_two = new Sub();

console.log(sub_one.prototype);

//优点：完善了之前所有继承方式的缺点
//缺点：最明显的缺点可能就是太复杂
//算是完美了，定义的函数是用来过滤掉组合继承多余出来的那份实例属性

