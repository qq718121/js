function observe(data) {
    if (!data || typeof data !== 'object') {
        return;
    }
    // 取出所有属性遍历

    Object.keys(data).forEach(function (key) {
        defineReactive(data, key, data[key]);
    });
}

function defineReactive(data, key, val) {
    let dep = new Dep();
    observe(val); // 监听子属性
    Object.defineProperty(data, key, {
        enumerable: true, // 可枚举
        configurable: false, // 不能再define
        get: function () {
            Dep.target && dep.addDep(Dep.target);
            console.log(Dep.target);
            return val;
        },
        set: function (newVal) {
            if (val === newVal) {
                return
            }
            console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
            val = newVal;
            dep.notify(); // 通知所有订阅者
            console.log(dep.notify);
        }
    })
}
function Dep() {
    this.subs = [];
}
Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub);
    },
    notify: function () {
        this.subs.forEach((sub) => {
            sub.update();
        })
    }
};
let data = {
    name: 'kindeng',
    age: 18
};
observe(data);
data.age = 2; // 哈哈哈，监听到值变化了 kindeng --> dmq
console.log(data.age);

