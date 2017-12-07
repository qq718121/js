/**
 * Created by admin on 2017/12/3.
 */
function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}

//深拷贝
//递归浅拷贝来实现,不会修改父类对象的引用属性