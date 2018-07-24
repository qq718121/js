// class Dep {
//   constructor() {
//     this.list = [];
//   }
//   listen(subs) {
//     this.list.push(subs);
//   }
//   notify() {
//     for (var i = 0; i < this.list.length; i++) {
//       this.list[i].update();
//     }
//   }
// }
// Dep.prototype.target = null;

// export default Dep;
let Dep = function () {
    this.list = [];
}
Dep.prototype.listen = function (subs) {
    this.list.push(subs);
}
Dep.prototype.notify = function () {
    for (let i = 0; i < this.list.length; i++) {
        this.list[i].update();
    }
}