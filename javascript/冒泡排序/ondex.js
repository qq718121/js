let arr = [8, 23, 95, 1, 34, 5, 3, 66, 7];

let Fn = function (arr) {
    this.arr = arr;
}

Fn.prototype.maopao = function () {
    let arr = this.arr;
    let lenI = arr.length - 1;

    for (let i = 0; i < lenI; i++) {
        for (let j = 0; j < lenI; j++) {
            if (arr[j] > arr[j + 1]) {
                let twm = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = twm;
            }
        }
    }
    return arr;
}

let a = new Fn(arr);

console.log(a.maopao());