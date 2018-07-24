/**
 * Created by admin on 2017/12/2.
 */
let fun = require('./index');
fun.prototype.val = 1;
fun.prototype.arr = [1];
fun.prototype.fun = function () {
    console.log(3);
};
fun.prototype.fun_one = function () {
    console.log(3);
};
fun.prototype.fun_two = function () {

};
//借用构造函数实现继承

function Sub(like) {
    fun.call(this, 12);
    this.like = like;
};
let sub_one = new Sub('操');
let sub_two = new Sub('操');
sub_one.arr.push(2);
console.log(sub_one.fun_one());

//优点：可以给被继承的构造函数传值，子类的实例不会共享父类的引用属性
//缺点：无法实现父类函数的复用，可以看出来，每一个实现继承的实力都要持有一个fun函数，如果太多的话最终导致内存爆炸

//适合单个或者少数实现继承