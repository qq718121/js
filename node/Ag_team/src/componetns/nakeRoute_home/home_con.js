/**
 * Created by Administrator on 2017/7/15.
 */

app.controller('home_con',['$scope','$http','$interval',function($scope,$http,$interval){
    $scope.huanyin='欢饮光临！';
    $scope.zhuye='主页';
    $scope.leiji='累计返利';
    $scope.xiaoshouArr=[];
    $scope.zongArr=[];
    $scope.arr=[1];
    $scope.fanlileiji=0;
    $scope.spanImg1='glyphicon glyphicon-yen';
    $scope.shangzhou1='上周销售额';
    $scope.zongxiao1='总销售额';
    $scope.spanImg2='glyphicon glyphicon-shopping-cart';
    $scope.shangzhou2='上周销售单数';
    $scope.zongxiao2='总销售单数';
    $scope.spanImg3='glyphicon glyphicon-gbp';
    $scope.shangzhou3='上周现金进账';
    $scope.zongxiao3='总现金进账';
    $scope.spanImg4='glyphicon glyphicon-education';
    $scope.shangzhou4='上周新增会员';
    $scope.zongxiao4='总会员总数';
    $scope.numOne=0;
    $scope.jishi=0;
    $scope.bianhuaNum1=0;
    $scope.bianhuaNum2=0;
    $scope.bianhuaNum3=0;
    $scope.bianhuaNum4=0;
    $scope.zhifu='';
    $scope.zhifuObj={};
    $scope.$on('$viewContentLoaded', function() {

        var id=$interval(function () {
            $scope.jishi+=100;
            $scope.fanlileiji-=100;
            $scope.bianhuaNum1+=100;
            $scope.bianhuaNum2+=1;
            $scope.bianhuaNum3+=100;
            $scope.bianhuaNum4+=1;
            if( $scope.jishi===10000){
                $scope.fanlileiji=$scope.zongArr[0].TotalRebate;
                $scope.bianhuaNum1=$scope.xiaoshouArr[1][0].totaNum1;
                $scope.bianhuaNum2=$scope.xiaoshouArr[1][1].totaNum1;
                $scope.bianhuaNum3=$scope.xiaoshouArr[1][2].totaNum1;
                $scope.bianhuaNum4=$scope.xiaoshouArr[1][3].totaNum1;
                $interval.cancel(id);
            }
        },10);
        $http({
            method:'get',
            url:'json/nakeStore_home.json'
        }).then(function (res) {
            $scope.xiaoshouArr.push(res);
            $scope.zongArr.push(res.data);
            // $scope.fanlileiji=$scope.zongArr[0].TotalRebate;
            $scope.totaNum=
                [
                    {
                        'totaNum1':res.data.totalsalesvolume,
                        'lastweekNum1':res.data.lastweekcount,
                        'xiaoshourGba1':res.data.flotDonut.donutcolors[0],
                        'spanImg':'glyphicon glyphicon-yen',
                        'shangzhou':'上周销售额',
                        'zongxiao':'总销售额'
                    },
                    {
                        'totaNum1':res.data.totalcount,
                        'lastweekNum1':res.data.lastweekmemcount,
                        'xiaoshourGba1':res.data.flotDonut.donutcolors[1],
                        'spanImg':'glyphicon glyphicon-shopping-cart',
                        'shangzhou':'上周销售单数',
                        'zongxiao':'总销售单数'
                    },
                    {
                        'totaNum1':res.data.totalmoney,
                        'lastweekNum1':res.data.lastweekmoney,
                        'xiaoshourGba1':res.data.flotDonut.donutcolors[2],
                        'spanImg':'glyphicon glyphicon-gbp',
                        'shangzhou':'上周现金进账',
                        'zongxiao':'总现金进账       '
                    },
                    {
                        'totaNum1':res.data.totalmemcount,
                        'lastweekNum1':res.data.lastweeksalesvolume,
                        'xiaoshourGba1':res.data.flotDonut.donutcolors[3],
                        'spanImg':'glyphicon glyphicon-education',
                        'shangzhou':'上周新增会员',
                        'zongxiao':'总会员总数'
                    }
                ];
            $scope.xiaoshouArr.push($scope.totaNum);
            $scope.zhifu=$scope.zongArr[0].flotDonut.donutlabels;
            console.log($scope.zhifu)
        });
        $scope.xiaosouHinde=false;
        $scope.xiaosouHinde1=false;
        $scope.xiaosouHinde2=false;
        $scope.xiaosouxiao=false;
        $scope.xiaosouxiao1=false;
        $scope.xiaosouxiao2=false;
        $scope.xiaosouoClose=function () {
            $scope.xiaosouxiao=!$scope.xiaosouxiao;
        };
        $scope.xiaosouoClose1=function () {
            $scope.xiaosouxiao1=!$scope.xiaosouxiao1;
        };
        $scope.xiaosouoClose2=function () {
            $scope.xiaosouxiao2=!$scope.xiaosouxiao2;
        };
        $scope.xiaosouosuoxiao=function () {

            $scope.xiaosouHinde=!$scope.xiaosouHinde;
        }
        $scope.xiaosouosuoxiao1=function () {

            $scope.xiaosouHinde1=!$scope.xiaosouHinde1;
        }
        $scope.xiaosouosuoxiao2=function () {

            $scope.xiaosouHinde2=!$scope.xiaosouHinde2;
        }
    });

}]);
