/**
 * Created by DELL on 2017/5/2.
 */
var LocalStorageObject=LocalStorageObject || (function() {

        return{
            setLocalStorage:function (obj) {
                if(!localStorage.num){
                    localStorage.num=0;
                }
                localStorage.setItem("item"+localStorage.num,JSON.stringify(obj));
                localStorage.num=parseInt(localStorage.num)+1;
                document.dispatchEvent(new Event(LocalStorageObject.UPDATA_EVENT));
            },
            getLocalStorageObj:function () {
                var listArr=[];
                for(var str in localStorage) {
                    if (str == "num") {
                        continue;
                    }
                    var obj=JSON.parse(localStorage[str]);
                    obj.key=str;
                    listArr.push(obj);
                }
                return listArr;
            },
            getLocalStorageItem:function (itemName) {
                for(var str in localStorage) {
                    if (str == "num") {
                        continue;
                    }
                    var obj=JSON.parse(localStorage[str]);
                    if(str==itemName){
                        return obj;
                    }
                }
                return null;
            },
            removeLocalStorageItem:function (itemName) {
                localStorage.removeItem(itemName)
                document.dispatchEvent(new Event(LocalStorageObject.UPDATA_EVENT));
            },
            getLocalStorageLength:function () {
                return getLocalStorageObj().length;
            },
            clearLocalStorage:function () {
                localStorage.clear();
                if(!localStorage.num){
                    localStorage.num=0;
                }
                document.dispatchEvent(new Event(LocalStorageObject.UPDATA_EVENT));
            }
        }
    })();
LocalStorageObject.UPDATA_EVENT="Update_Storage";