/**
 * Created by admin on 2017/12/2.
 */
let Assemblage = require('./index');
Assemblage.prototype.fun_one = function () {
    console.log(3);
};
Assemblage.prototype.fun_two = function () {

};

//组合继承

function Sub() {
    Assemblage.call(this);
}
Sub.prototype = new Assemblage();
let sub_one = new Sub();
let sub_two = new Sub();
console.log(sub_two.fun_one());

//优点：解决了其他原型链和构造函数方式继承的缺点，可以复用父类函数
//缺点：可以看到函数继承调用了两次，由于原型链的原理，实力里面的属性会优先原型对象里面的属性，所以原型对象里边的属性就会占用内存

//比较常用 但是还是有瑕疵