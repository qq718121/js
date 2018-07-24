// import Dep from "./Dep";

// class Watcher {
//   constructor(node, name, vm) {
//     this.node = node;
//     this.name = name;
//     this.vm = vm;

//     Dep.target = this;
//     this.update();
//     Dep.target = null;
//   }
//   update() {
//     this.node.nodeValue = this.vm[this.name];
//   }
// }

// export default Watcher;

let Watcher = function (node, name, vm) {
    this.node = node;
    this.name = name;
    this.vm = vm;
    Dep.target = this;
    this.update();
    Dep.target = null;
}
Watcher.prototype.update = function () {
    this.node.nodeValue = this.vm[this.name];
}