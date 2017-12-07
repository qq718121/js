/**
 * Created by Administrator on 2017/7/21.
 */
app.controller('xiugai_con',['$scope','$http',function ($scope,$http) {
    $scope.tijiao=function () {
        let f = localStorage.uid;
        console.log(window.localStorage,$scope.jiumima,$scope.xinmima,$scope.querenmima);
        if($scope.jiumima==window.localStorage.password){
            if($scope.xinmima==$scope.querenmima){
                $http.put('http://localhost:2403/mynames/'+f
                    , {password:$scope.xinmima}, {
                    headers: { 'Content-Type': 'application/json'},
                    // transformRequest: function (data) {
                    //     return $.param(data);
                    // }
                }).then(function (res) {
                    $scope.xinmima='';
                    $scope.querenmima='';
                    $scope.jiumima='';
                    alert('修改成功！');
                    console.log(res);
                    $http.get('http://localhost:2403/mynames/'+f, {
                    }).then(function (res) {
                       console.log(res)
                    }, function (err) {
                        alert('err')
                    });
                }, function (err) {
                    alert('err')
                })
            }else{
                alert('两次输入密码不同');
            }
        }
    }

}]);
