/**
 * Created by admin on 2017/12/3.
 */
function ajax(url) {
    return new Promise(function (resolve,reject) {
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.onreadystatechange = function (req,res) {
            if(xmlRequest.readyState == 4){
                if(xmlRequest.status == 200){
                    resolve(res);
                }else{
                    reject(err);
                }
            }
        }
    })
};
ajax(url).then(function () {

}).catch(function () {

});