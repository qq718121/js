/**
 * Created by Lenovo on 2017/5/3.
 */
var StringMethod=StringMethod || (function () {
        return{
            cancelFABSpance:function (str) {
                var reg=/^\s*|\s*$/g;
                return str.replace(reg,"");
            }
        }
    })();
