/**
 * Created by admin on 2017/12/3.
 */
var Chinese = {
    nation:'中国'
}
var Doctor = {
    career:'医生'
}
function extendCopy(p) {
    var c = {};
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}
//浅拷贝
//只拷贝了数据类型，并且子类的对象会修改父类对象的引用属性