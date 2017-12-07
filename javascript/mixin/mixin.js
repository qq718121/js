/**
 * Created by admin on 2017/12/3.
 */
let mixin = function (obj,mixins) {
    let newobj = obj;
    newobj.prototype = Object.create(obj.prototype);
    for(let key in mixins){
        if(mixins.hasOwnProperty(key)){
            newobj.prototype[key] = mixins[key];
        }
    };
    return newobj;
};
let mixinObj = {
    foo:function (foo) {
        console.log('foo');
    }
};
let MyFunc = function (bar) {
    console.log('bar')
};
let NewFunc = mixin(MyFunc,mixinObj);
let a = new NewFunc;
a.foo();