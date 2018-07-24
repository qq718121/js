var Site = {};
Site.userList = {};
Site.subscribe = function (key, fn) {
    if (!this.userList[key]) {
        this.userList[key] = [];
    }
    this.userList[key].push(fn);
}

Site.publish = function () {

    var key = Array.prototype.shift.apply(arguments),
        fns = this.userList[key];
    if (!fns || fns.length === 0) {
        console.log('没有人订阅' + key + "这个分类的文章");
        return false;
    }
    for (var i = 0, len = fns.length; i < len; i++) {
        fns[i].apply(this, arguments);
    }

}

Site.subscribe("javascript", function (title, key) {
    console.log(title);
});

Site.subscribe("es6", function (title) {
    console.log(title);
});

Site.publish("javascript", "[js高手之路]寄生组合式继承的优势");
Site.publish("es6", "[js高手之路]es6系列教程 - var, let, const详解");
Site.publish("html5", "html5新的语义化标签");