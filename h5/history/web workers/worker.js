/**
 * Created by admin on 2017/11/5.
 */
function fibonacci(n) {
    return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
}
this.onmessage=function (event) {
    let resultValue = fibonacci(event.data);
    this.postMessage(resultValue);
};