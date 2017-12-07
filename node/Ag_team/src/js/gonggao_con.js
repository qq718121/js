/**
 * Created by Administrator on 2017/7/17.
 */
app.controller('gonggao_con',['$scope','$http','$timeout',function ($scope,$http,$timeout) {
    $scope.elects=[10,25,50,100];
    $scope.isshowdg=false;
    function shuaxins() {
        $scope.numss=0;
        $http.get('http://localhost:2403/gonggao').then(function (res) {
            localStorage.as=JSON.stringify(res);
            for(i in res.data){
                delete res.data[i].id;
            }
            $scope.dataArrs=res.data;
            console.log( $scope.dataArrs)
            if( $scope.dataArrs.length>$scope.xialanum){
                $scope.dataArrs.length=$scope.xialanum;
            }
            $scope.numss=$scope.dataArrs.length;
        }, function (err) {
            alert('err')
        });
    }
    shuaxins();
    $scope.removes=function (n) {
        let bg = localStorage.as;
        $scope.dataArrs.splice(n,1);
        $scope.nums=$scope.dataArrs.length;
        $http.delete('http://localhost:2403/gonggao/'+JSON.parse(bg).data[n].id,{
            biaoti:JSON.parse(bg).data[n].biaoti,
            chuangjian:JSON.parse(bg).data[n].chuangjian,
            zhuangtai:JSON.parse(bg).data[n].zhuangtai,
        },{
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function (data) {
                return $.param(data);
            }
        }).then(function (res) {
            $scope.isshowdg=true;
            $scope.textThereg='删除成功';
        }, function (err) {
            $scope.isshowdg=true;
            $scope.textThereg='删除失败';
        });
        let timersg=$timeout(function(){
            $scope.isshowdg=false;
        },2000);
        clearInterval(timersg);
    };
        function kaishia() {
         function kaishig() {
             $http.get('http://localhost:2403/gonggao').then(function (res) {
                 localStorage.ags=JSON.stringify(res);
                 for(i in res.data){
                     delete res.data[i].id;
                 }
                 $scope.data = res.data;
                 $scope.pages= Math.ceil($scope.data.length / $scope.electgg);
                 $scope.newPages = $scope.pages>$scope.electgg?$scope.electgg : $scope.pages;
                 $scope.pageList=[];
                 $scope.selPage=1;
                 $scope.setData =function () {
                     $scope.dataArrs =$scope.data.slice(($scope.electgg * ($scope.selPage - 1)), ($scope.selPage * $scope.electgg));
                 };
                 $scope.dataArrs=$scope.data.slice(0,$scope.electgg);
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
            kaishig();
            $scope.Previousg = function () {
                $scope.numss=$scope.dataArrs.length;
                $scope.selectPage($scope.selPage - 1);
                kaishig()
            };
            $scope.Nextg = function () {
                $scope.numss=$scope.dataArrs.length;
                $scope.selectPage($scope.selPage + 1);
            };
        }
        kaishia();

$scope.haha=function () {
    kaishia();
}
}]);