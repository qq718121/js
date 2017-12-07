/**
 * Created by admin on 2017/11/25.
 */
click_handler = function () {
    let options = {
        enableHighAccuracy:false,
        timeout:3000,
        maximumAge:0
    };
    let success_str = '获取成功';
    let erroe_str = '获取失败';
    function success(position) {
        console.log(success_str);

    }
    function error(positionError) {
        console.log(erroe_str,positionError.code,positionError.message);
        alert('失败');
    }
    navigator.geolocation.getCurrentPosition(success,error,options);
    if(!navigator.geolocation){
        alert('您的浏览器不支持');
    }
    navigator.geolocation.getCurrentPosition(success,error,options);
};