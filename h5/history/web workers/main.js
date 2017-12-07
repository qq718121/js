/**
 * Created by admin on 2017/11/5.
 */
$(function () {
    let input = $('input[type = "text"]');
    let cal = $('input[type = "button"]');
    let result = $('.result');
    cal.on('click',function () {
        let initValue = input.val();
        let w = new Worker('./worker.js');
        w.postMessage(initValue);
        w.onmessage = function (event) {
            result.html(result.html() + initValue + '=>' + event.data + '<br/>');
        };
    });
});