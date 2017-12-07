/**
 * Created by Administrator on 2017/7/19.
 */
app.controller('vipLv_con',['$scope','$http','$timeout',function ($scope,$http,$timeout) {
    $scope.textTwo='新增系统';
    $scope.numa=2000.00;
    $scope.isshows=false;
    $scope.valueadd=(new Number(2000)).toFixed(2);
    $scope.jiaAdd=function () {
        $scope.numa -= 10;
        $scope.valueadd = (new Number($scope.numa)).toFixed(2);
        if($scope.valueadd<0){
            $scope.valueadd=0;
        }
    };
    $scope.jianAdd=function () {
        $scope.numa +=10;
        $scope.valueadd= (new Number($scope.numa)).toFixed(2);

    };
    $scope.tianjia=function () {
        $http.post('http://localhost:2403/geren', {
                kahao:$scope.kh,
                xingmin:$scope.xm,
                mima:$scope.mm,
                shoujihao:$scope.sj,
                dengji:$scope.dj,
                youxiaoqi:new Date().getYear()+'/'+new Date().getMonth()+'/'+new Date().getDay(),
                yue:$scope.valueadd
            }, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function (data) {
                return $.param(data);
            }
        }).then(function (res) {
            $scope.objxinzeng2={
                "kahao":res.data.kahao,
                "xingmin":res.data.xingmin,
                "dengji":res.data.dengji,
                "shoujihao":res.data.shoujihao,
                "yue":res.data.yue,
                "mima":res.data.mima,
                "youxiaoqi":res.data.youxiaoqi
            };
            $scope.textTwo='添加成功';
            $scope.isshows=true;
            let timer=$timeout(function(){
                $scope.isshows=false;
            },2000);
            clearInterval(timer);

        }, function (err) {
            $scope.textTwo='Err 无法连接服务器';
        })
    }
}]);