/**
 * Created by Administrator on 2017/7/22.
 */
app.controller('vipxiugai_con',['$scope','$http','$timeout',function ($scope,$http,$timeout) {
    $scope.isshowsss=false;
    $scope.numas -= 10;
    $scope.valueadds=(new Number(2000)).toFixed(2);
    $scope.jiaAdd=function () {
        $scope.numas -= 10;
        $scope.valueadds = (new Number($scope.numas)).toFixed(2);
        if($scope.valueadds<0){
            $scope.valueadds=0;
        }
    };
    $scope.jianAdd=function () {
        $scope.numas +=10;
        $scope.valueadd= (new Number($scope.numas)).toFixed(2);

    };
}]);