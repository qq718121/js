/**
 * Created by Lenovo on 2017/5/3.
 */
var nameGuest=nameGuest|| (function () {
        return {
            regId: function (str) {
               var reg = /^\w{6,16}$/;
                return reg.test(str);
            },
            regchuji: function (str) {
                var reg = /^([0-9]{6,16}|[a-z]{6,16}|[A-Z]{6,16})$/;
                return reg.test(str);
            },
            regNmaes: function (str) {
                var reg = /^[\u4e00-\u9fa5]{2,4}$/;
                return reg.test(str);
            },
            regzhongji: function (str) {
                var reg = /^([0-9a-z]{6,16})$/;
                return reg.test(str);
            },
            reggaoji: function (str) {
                var reg = /^([\w!@#\$%\^&\*]{6,16})$/;
                return reg.test(str);
            },
            regBirth: function (str) {
                var reg = /^[12][0-9]{3}\-[0-1][0-9]\-[0-2][0-9]|[12][0-9]{3}.[0-1][0-9].[0-2][0-9]|[12][0-9]{3}\/[0-1][0-9]\/[0-2][0-9]$/;
                return reg.test(str);
            },
            regCard: function (str) {
                var reg = /^[\d]{0,17}[0-9X]$/;
                return reg.test(str);
            },
            regTel: function (str) {
                var reg = /^1[35789][0-9]{9}$/;
                return reg.test(str);
            },
            regMail: function (str) {
                var reg = /^\w+@[0-9a-z]{2,4}\.[a-z]{2,4}$/;
                return reg.test(str);
            },
            regBank: function (str) {
                var reg = /^[0-9]{19}$/;
                return reg.test(str);
            }
        }
    })();
