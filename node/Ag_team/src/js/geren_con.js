/**
 * Created by Administrator on 2017/7/21.
 */

app.controller('gerens',['$scope','$http',function ($scope,$http) {
    $http.get('http://localhost:2403/mynames/a48cf24e342768c5', {
    }).then(function (res) {
        $scope.name=res.data.name;
        $scope.phoneName=res.data.phoneName;
        $scope.text=res.data.text;
        $scope.usernames=res.data.username;
        $scope.dianhua=res.data.tell;
        $scope.dizhi=res.data.addr;
    }, function (err) {
        alert('err')
    });

    $scope.users  = localStorage.getItem('uid');
    $scope.baocun=function () {
        console.log($scope.text)
        $http.put('http://localhost:2403/mynames/'+window.localStorage.uid, {name:$scope.xingming,
            phoneName:$scope.shouji,text:$scope.text,tell:$scope.dianhua,addr:$scope.dizhi}, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function (data) {
                return $.param(data);
            }
        }).then(function (res) {
            alert('保存成功！');
        }, function (err) {
            alert('err')
        })
    }
}]);


