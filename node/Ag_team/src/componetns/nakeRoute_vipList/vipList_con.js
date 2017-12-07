/**
 * Created by Administrator on 2017/7/18.
 */

app.controller('viplist',['$scope','$modal','$log','$http','$timeout',function ($scope, $modal, $log,$http,$timeout) {
   function shuaxin() {
       $http.get('http://localhost:2403/geren').then(function (res) {
           localStorage.a=JSON.stringify(res);
           for(i in res.data){
               delete res.data[i].id;
           }
           $scope.dataArr=res.data;
           if( $scope.dataArr.length>$scope.xialanum){
               $scope.dataArr.length=$scope.xialanum;
           }
           $scope.nums=$scope.dataArr.length;
       }, function (err) {
           alert('err')
       });
   }
    shuaxin();
    $scope.open=function () {
        $scope.items = [ 'angularjs', 'backbone', 'canjs', 'Ember', 'react' ];

        $scope.open = function(size) {
            let modalInstance = $modal.open({
                templateUrl : '3.html',
                controller : 'ModalInstanceCtrl',
                size : size,
                resolve : {
                    items : function() {
                        return $scope.items;
                    }
                }
            });
        }
    };
    $scope.nums=0;
    $scope.liebiaoshuaxin=function () {
        $http.get('http://localhost:2403/geren').then(function (res) {
            $scope.isshowd=true;
            $scope.textThere='刷新成功';
            localStorage.a=JSON.stringify(res);
            for(i in res.data){
                delete res.data[i].id;
            }
            $scope.dataArr=res.data;
            if( $scope.dataArr.length>$scope.xialanum){
                $scope.dataArr.length=$scope.xialanum;
            }
            $scope.nums=$scope.dataArr.length;
        }, function (err) {
            $scope.isshowd=true;
            $scope.textThere='刷新失败';
        });
        let timers=$timeout(function(){
            $scope.isshowd=false;
        },2000);
        clearInterval(timers);
    };
    $scope.isshowd=false;
    $scope.textThere='';
    $scope.remove=function (index) {
        let b = localStorage.a;
        console.log(JSON.parse(b).data[index].id);
        $scope.dataArr.splice(index,1);
        $scope.nums=$scope.dataArr.length;
        $http.delete('http://localhost:2403/geren/'+JSON.parse(b).data[index].id,{
            kahao:JSON.parse(b).data[index].kahao,
            xingmin:JSON.parse(b).data[index].xingmin,
            mima:JSON.parse(b).data[index].mima,
            shoujihao:JSON.parse(b).data[index].shoujihao,
            dengji:JSON.parse(b).data[index].dengji,
            youxiaoqi:JSON.parse(b).data[index].youxiaoqi,
            yue:JSON.parse(b).data[index].yue
        },{
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function (data) {
                return $.param(data);
            }
        }).then(function (res) {
            $scope.isshowd=true;
            $scope.textThere='删除成功';
        }, function (err) {
            $scope.isshowd=true;
            $scope.textThere='删除失败';
        });
        let timers=$timeout(function(){
            $scope.isshowd=false;
        },2000);
        clearInterval(timers);
    };
    $scope.opens=function (m) {
        localStorage.setItem('index',m);
        $scope.items = [ 'angularjs', 'backbone', 'canjs', 'Ember', 'react' ];
        $scope.opens = function(size) {
            let modalInstance = $modal.open({
                templateUrl : '4.html',
                controller : 'ModalInstanceCtrl2',
                size : size,
                resolve : {
                    items : function() {
                        return $scope.items;
                    }
                }
            });
        }
    };
    $scope.selects=[10,25,50,100];
        function kaishi() {
            $http.get('http://localhost:2403/geren').then(function (res) {
                localStorage.a=JSON.stringify(res);
                for(i in res.data){
                    delete res.data[i].id;
                }
                $scope.data = res.data;
                $scope.pages= Math.ceil($scope.data.length / $scope.xialanum);
                $scope.newPages = $scope.pages>$scope.xialanum?$scope.xialanum : $scope.pages;
                $scope.pageList=[];
                $scope.selPage=1;
                $scope.setData =function () {
                    $scope.dataArr =$scope.data.slice(($scope.xialanum * ($scope.selPage - 1)), ($scope.selPage * $scope.xialanum));
                };
                $scope.dataArr=$scope.data.slice(0,$scope.xialanum);
                for(var i=0;i<$scope.newPages;i++){
                    $scope.pageList.push(i+1);
                }
                $scope.selectPage=function (page) {
                    if(page<1||page>$scope.pages) return;
                    if(page>2){
                        var newpageList =[];
                        for(var i = (page-3);i<((page+2) >$scope.pages?$scope.pags:(pagers+2));i++){
                            newpageList.push(i + 1);
                        }
                        $scope.pageList = newpageList;
                    }
                    $scope.selPage = page;
                    $scope.setData();
                    $scope.isActivePage(page);
                };
                $scope.isActivePage = function (page) {
                    return $scope.selPage == page;
                };
            }, function (err) {
                alert('err')
            });
        }

    kaishi();
    $scope.Previous = function () {
        $scope.nums=$scope.dataArr.length;
        $scope.selectPage($scope.selPage - 1);
        kaishi()
    };
    $scope.Next = function () {
        $scope.nums=$scope.dataArr.length;
        $scope.selectPage($scope.selPage + 1);

    };
}])
.controller('ModalInstanceCtrl', function($scope, $modalInstance) {
    $scope.ok = function() {
        $modalInstance.close();
    };
    $scope.cancel = function(){
        $modalInstance.dismiss('cancel');
    }
})
.controller('ModalInstanceCtrl2', function($scope,$modalInstance,$http) {
    $scope.xiugaivip=function () {
        let c= localStorage.a;
        let i = localStorage.index;
        $http.put('http://localhost:2403/geren/'+JSON.parse(c).data[i].id,{
            kahao:$scope.khs,
            xingmin:$scope.xms,
            mima:$scope.djs,
            shoujihao:$scope.sjs,
            dengji:$scope.mms,
            youxiaoqi:new Date().getYear()+new Date().getMonth()+new Date().getDay(),
            yue:$scope.valueadds
        },{
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function (data) {
                return $.param(data);
            }
        }).then(function (res) {
            $scope.isshowsss=true;
            alert('修改成功');

        }, function (err) {
            $scope.isshowsss=true;
            alert('修改失败');
        });
    };
    $scope.ok = function() {
        $modalInstance.close();
    };
    $scope.cancel = function(){
        $modalInstance.dismiss();
    }
});
