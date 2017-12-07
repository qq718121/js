var ResLoader=ResLoader || (function () {
        var postion=0;
        var imgList=[];
        return{
            loads:function (list,callBack) {
                loadimage();
                for(var i=0;i<imgList.length;i++){
                    imgList[i]=null;
                }
                imgList.length=0;
                postion=0;
                function loadimage() {
                    if(postion>=list.length){
                        callBack(imgList);
                        return;
                    }
                    var img=new Image();
                    img.addEventListener("load",loadimage);
                    img.src=list[postion];
                    imgList.push(img);
                    postion++;
                }

            }
        }
    })();