/**
 * Created by Administrator on 2017/7/14.
 */
var app = angular.module('myapp',['ngRoute','angularCSS','ui.bootstrap']);
// app.factory('huadong',function () {
//     return{
//         isshow:true
//     }
// });


app.controller('nakeStore_fixed_top_con',['$scope','$http',function ($scope,$http,huadong) {
    $scope.nakeStore_fixed_top_logoImg="http://huangxiaomiao.vip9158.com/Images/logo2.png";
    $scope.nakeStore_fixed_top_logoImgAlt="晨凯你爱么";
    $scope.nakeStore_fixed_top_Text='PANCHENKAI';
    $scope.fixed_top_xiaoxi_num=0;
    $scope.fixed_top_xiaoxi_sum=0;
    $scope.fixed_top_xiaoxi_sum1=0;
    $scope.fixed_top_xiaoxi_sum2=0;
    $http.get('http://localhost:2403/gonggao').then(function (res) {
        $scope.dataArrsnum=res.data;
        if( $scope.dataArrsnum.length>$scope.xialanum){
            $scope.dataArrsnum.length=$scope.xialanum;
        }
        $scope.fixed_top_xiaoxi_sum=$scope.dataArrsnum.length;
        $scope.fixed_top_xiaoxi_num=$scope.fixed_top_xiaoxi_sum+$scope.fixed_top_xiaoxi_sum1+$scope.fixed_top_xiaoxi_sum2;
    }, function (err) {
        alert('err')
    });
    $scope.wofenl=true;
    $scope.mengban=true;
    $scope.mengadd=function () {
        $scope.mengban=false;
    };
    $scope.huaDong=function (e) {
        $scope.wofenl=!$scope.wofenl;
    };
    $scope.clearS=function () {
        localStorage.clear();
        console.log(1);
    };

    // $scope.geren=function () {
    //     console.log(1)
    // }


}]);



app.directive('home',function () {
    return{
        templateUrl:'index3.html',
        controller:'nakeStore_fixed_top_con',
        css:'sass/index.css'
    }
});
app.directive('pck',function () {
    return{
        templateUrl:'2.html',
        controller:'option_con'
    }
});
app.directive('carts',function () {
    return{
        templateUrl:'5.html',
        controller:'option2_con'
    }
});
app.controller('option_con',['$scope',function ($scope) {
    $scope.optionss=function () {
        huaxin(0,1);
    }
}]);
app.controller('option2_con',['$scope',function ($scope) {
    $scope.optionss2=function () {
        huaxin1(0,1);
    }
}]);
app.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/home',{
        templateUrl:'componetns/nakeRoute_home/home.html',
        controller:'home_con',
        css:'componetns\\nakeRoute_home\\index.css'
    })
        .when('/gonggao',{
            templateUrl:'gonggao.html',
            controller:'gonggao_con',
            css:'sass/gonggao.css'
        })
        .when('/shengri',{
            templateUrl:'gonggao.html',
            controller:'gonggao',
            css:'sass/gonggao.css'
        })
        .when('/yuyue',{
            templateUrl:'gonggao.html',
            controller:'gonggao_con',
            css:'sass/gonggao.css'
        })

        .when('/geren',{
            templateUrl:'geren.html',
            controller:'gerens',
            css:'sass/geren.css'
        })
        .when('/xiugai',{
        templateUrl:'xiugai.html',
        controller:'xiugai_con',
        css:'sass/xiugai.css'
    })

        .when('/vipList',{
            templateUrl:'componetns/nakeRoute_vipList/vipList.html',
            controller:'viplist',
            css:'componetns/nakeRoute_vipList/vipList.css'
        })
        .when('/vipLv',{
             templateUrl:'componetns/nakeRoute_vipLv/vipList.html',
             controller:'vipLv_con',
             css:'componetns/nakeRoute_vipLv/vipLv.css'
        })
        // .when('/vipxiugai',{
        //     templateUrl:'vipxiugai.html',
        //     controller:'vipxiugai_con',
        //     css:'componetns/nakeRoute_vipLv/vipLv.css'
        // })
        .when('/vipLvSet',{templateUrl:'componetns/nakeRoute_vipLvSet/vipList.html'})
        .when('/vipbatchIn',{templateUrl:'componetns/nakeRoute_vipbatchIn/vipList.html'})
        .when('/vipyewuTiaoZheng',{templateUrl:'componetns/nakeRoute_vipyewuTiaoZheng/vipList.html'})
        .when('/chanpinList',{templateUrl:'componetns/nakeRoute_chanpinList/vipList.html'})
        .when('/chanpinluru',{templateUrl:'componetns/nakeRoute_chanpinluru/vipList.html'})
        .when('/chanpinleibie',{templateUrl:'componetns/nakeRoute_chanpinleibie/vipList.html'})
        .when('/piliangdaoru',{templateUrl:'componetns/nakeRoute_piliangdaoru/vipList.html'})
        .when('/lipinList',{templateUrl:'componetns/nakeRoute_lipinList/vipList.html'})
        .when('/lipinluru',{templateUrl:'componetns/nakeRoute_lipinluru/vipList.html'})
        .when('/piliangdaoruTwo',{templateUrl:'componetns/nakeRoute_piliangdaoruTwo/vipList.html'})
        .when('/chanpinkucun',{templateUrl:'componetns/nakeRoute_chanpinkucun/vipList.html'})
        .when('/chanpinjinhuo',{templateUrl:'componetns/nakeRoute_chanpinjinhuo/vipList.html'})
        .when('/myDingdan',{templateUrl:'componetns/nakeRoute_myDingdan/vipList.html'})
        .when('/youhuihuodong',{templateUrl:'componetns/nakeRoute_youhuihuodong/vipList.html'})
        .when('/dianziyouhuijiuan',{templateUrl:'componetns/nakeRoute_dianziyouhuijiuan/vipList.html'})
        .when('/duanxinmoban',{templateUrl:'componetns/nakeRoute_duanxinmoban/vipList.html'})
        .when('/duanxinqunnfa',{templateUrl:'componetns/nakeRoute_duanxinqunnfa/vipList.html'})
        .when('/duanxinjilu',{templateUrl:'componetns/nakeRoute_duanxinjilu/vipList.html'})
        .when('/xiaofeimingxi',{templateUrl:'componetns/nakeRoute_xiaofeimingxi/vipList.html'})
        .when('/chongzhimingxi',{templateUrl:'componetns/nakeRoute_chongzhimingxi/vipList.html'})
        .when('/chongcimingxi',{templateUrl:'componetns/nakeRoute_chongcimingxi/vipList.html'})
        .when('/yuebiandong',{templateUrl:'componetns/nakeRoute_yuebiandong/vipList.html'})
        .when('/jifenbiandong',{templateUrl:'componetns/nakeRoute_jifenbiandong/vipList.html'})
        .when('/xiaofeifanli',{templateUrl:'componetns/nakeRoute_xiaofeifanli/vipList.html'})
        .when('/dailishangfanli',{templateUrl:'componetns/nakeRoute_dailishangfanli/vipList.html'})
        .when('/shangjiafanli',{templateUrl:'componetns/nakeRoute_shangjiafanli/vipList.html'})
        .when('/dailishangedu',{templateUrl:'componetns/nakeRoute_dailishangedu/vipList.html'})
        .when('/shangjiaedu',{templateUrl:'componetns/nakeRoute_shangjiaedu/vipList.html'})
        .when('/gerenziliao',{templateUrl:'componetns/nakeRoute_gerenziliao/vipList.html'})
        .when('/yonghuliebiao',{templateUrl:'componetns/nakeRoute_yonghuliebiao/vipList.html'})
        .when('/jueseguanli',{templateUrl:'componetns/nakeRoute_jueseguanli/vipList.html'})
        .when('/yonghurizhi',{templateUrl:'componetns/nakeRoute_yonghurizhi/vipList.html'})
        .when('/xiugaimima',{templateUrl:'componetns/nakeRoute_xiugaimima/vipList.html'})
        .when('/dailishangliebiao',{templateUrl:'componetns/nakeRoute_dailishangliebiao/vipList.html'})
        .when('/shangjialibiao',{templateUrl:'componetns/nakeRoute_shangjialibiao/vipList.html'})
        .when('/cityfenzhanguanli',{templateUrl:'componetns/nakeRoute_cityfenzhanguanli/vipList.html'})
        .when('/jichushezhi',{templateUrl:'componetns/nakeRoute_jichushezhi/vipList.html'})
        .when('/guanggaoguanli',{templateUrl:'componetns/nakeRoute_guanggaoguanli/vipList.html'})
        .when('/shangjialiebiao',{templateUrl:'componetns/nakeRoute_shangjialiebiao/vipList.html'})
        .when('/shangchengchanpin',{templateUrl:'componetns/nakeRoute_shangchengchanpin/vipList.html'})
        .when('/shangchengdingdan',{templateUrl:'componetns/nakeRoute_shangchengdingdan/vipList.html'})
        .when('/pingjiaguanli',{templateUrl:'componetns/nakeRoute_pingjiaguanli/vipList.html'})
        .when('/helpZhongxin',{templateUrl:'componetns/nakeRoute_helpZhongxin/vipList.html'})
        .when('/zidingyiziduan',{templateUrl:'componetns/nakeRoute_zidingyiziduan/vipList.html'})
        .when('/tuijianzhidu',{templateUrl:'componetns/nakeRoute_tuijianzhidu/vipList.html'})
        .when('/fanlizhidu',{templateUrl:'componetns/nakeRoute_fanlizhidu/vipList.html'})
        .when('/edutixianshenhe',{templateUrl:'componetns/nakeRoute_edutixianshenhe/vipList.html'})
        .when('/quanjucanshushezhi',{templateUrl:'componetns/nakeRoute_quanjucanshushezhi/vipList.html'})
        .when('/weixinjichushezhi',{templateUrl:'componetns/nakeRoute_weixinjichushezhi/vipList.html'})
        .when('/fensiliebiao',{templateUrl:'componetns/nakeRoute_fensiliebiao/vipList.html'})
        .when('/huifushezhi',{templateUrl:'componetns/nakeRoute_huifushezhi/vipList.html'})
        .when('/guanzhushihuifu',{templateUrl:'componetns/nakeRoute_guanzhushihuifu/vipList.html'})
        .when('/wenbenhuifu',{templateUrl:'componetns/nakeRoute_wenbenhuifu/vipList.html'})
        .when('/tupianhuifu',{templateUrl:'componetns/nakeRoute_tupianhuifu/vipList.html'})
        .when('/mobanxiaoxi',{templateUrl:'componetns/nakeRoute_mobanxiaoxi/vipList.html'})
        .when('/shangjiatuiguangerweima',{templateUrl:'componetns/nakeRoute_shangjiatuiguangerweima/vipList.html'})
        .when('/zidingyicaidan',{templateUrl:'componetns/nakeRoute_zidingyicaidan/vipList.html'})
        .otherwise('/home')
}]);

app.controller('nakeRoute_controller',['$scope',function ($scope) {
    $scope.type='类型：总部';
    $scope.controlleHeader='操作员：超级管理员';
    $scope.shopModule='消费模式：积分';
    $scope.plus='glyphicon glyphicon-plus';
    $scope.minus='glyphicon glyphicon-minus';
    $scope.kkk = function (index) {
        if (index == $scope.index) {
            return 'glyphicon-minus';
        } else {
            return 'glyphicon-plus';
        }
    };
    $scope.index = -1;
    $scope.add=function (index,e) {
        if(!e){
            e=window.event;
        }
        console.log(this);
        if($scope.index == index) {
            $scope.index = -1;
            return;
        }
        $scope.index = index;
    };

    app.controller('vipList_con',['$scope','$modal','$log','$modalInstance',function ($scope, $modal, $log,$modalInstance) {
        $scope.items = [ 'angularjs', 'backbone', 'canjs', 'Ember', 'react' ];
        $scope.open = function(size) {
            console.log(1)
            var modalInstance = $modal.open({
                templateUrl : 'myModelContent.html',
                controller : 'ModalInstanceCtrl',
                size : size,
                resolve : {
                    items : function() {
                        return $scope.items;
                    }
                }
            });
            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                $log.info('Modal dismissed at: ' + new Date())
            });
        };
        $scope.items = items;
        $scope.selected = {
            item : $scope.items[0]
        };
        $scope.ok = function() {
            $modalInstance.close($scope.selected.item);
        };
        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        }
    }]);

    // app.factory('vipobjs',function () {
    //     return {
    //
    //     }
    // });



    // app.controller('modalDemo', ['$scope','$modal','$log',function($scope, $modal, $log){
    //     $scope.items = [ 'angularjs', 'backbone', 'canjs', 'Ember', 'react' ];
    //     $scope.open = function(size) {
    //         var modalInstance = $modal.open({
    //             templateUrl : 'myModelContent.html',
    //             controller : 'ModalInstanceCtrl',
    //             size : size,
    //             resolve : {
    //                 items : function() {
    //                     return $scope.items;
    //                 }
    //             }
    //         });
    //         modalInstance.result.then(function(selectedItem) {
    //             $scope.selected = selectedItem;
    //         }, function() {
    //             $log.info('Modal dismissed at: ' + new Date())
    //         });
    //     }
    // }])
    //     .controller('ModalInstanceCtrl', function($scope, $modalInstance, items) {
    //         $scope.items = items;
    //         $scope.selected = {
    //             item : $scope.items[0]
    //         };
    //         $scope.ok = function() {
    //             $modalInstance.close($scope.selected.item);
    //         };
    //         $scope.cancel = function() {
    //             $modalInstance.dismiss('cancel');
    //         }
    //     });

//                    $scope.nakeStore_fixed_top_arr=[
//                        {
//                            spanClass:'glyphicon glyphicon-home',
//                            spanP:'主页',
//                            numClass:'glyphicon glyphicon-plus'
//                        },
//                        {
//                            spanClass:'glyphicon glyphicon-user',
//                            spanP:'会员管理',
//                            numClass:'glyphicon glyphicon-plus'
//                        },
//                        {
//                            spanClass:'glyphicon glyphicon-folder-close',
//                            spanP:'产品管理',
//                            numClass:'glyphicon glyphicon-plus'
//                        },
//                        {
//                            spanClass:'glyphicon glyphicon-gift',
//                            spanP:'礼品管理',
//                            numClass:'glyphicon glyphicon-plus'
//                        },
//                        {
//                            spanClass:'glyphicon glyphicon-th',
//                            spanP:'进销存管理',
//                            numClass:'glyphicon glyphicon-plus'
//                        },
//                        {
//                            spanClass:'glyphicon glyphicon-jpy',
//                            spanP:'会员营销',
//                            numClass:'glyphicon glyphicon-plus'
//                        },
//                        {
//                            spanClass:'glyphicon glyphicon-th-list',
//                            spanP:'统计报表',
//                            numClass:'glyphicon glyphicon-plus'
//                        },
//                        {
//                            spanClass:'glyphicon glyphicon-cloud',
//                            spanP:'用户管理',
//                            numClass:'glyphicon glyphicon-plus'
//                        },
//                        {
//                            spanClass:'glyphicon glyphicon-option-horizontal',
//                            spanP:'代理商管理',
//                            numClass:'glyphicon glyphicon-plus'
//                        },
//                        {
//                            spanClass:'glyphicon glyphicon-barcode',
//                            spanP:'商家管理',
//                            numClass:'glyphicon glyphicon-plus'
//                        },
//                        {
//                            spanClass:'glyphicon glyphicon-shopping-cart',
//                            spanP:'商城管理',
//                            numClass:'glyphicon glyphicon-plus'
//                        },
//                        {
//                            spanClass:'glyphicon glyphicon-wrench',
//                            spanP:'系统设置',
//                            numClass:'glyphicon glyphicon-plus'
//                        },
//                        {
//                            spanClass:'glyphicon glyphicon-envelope',
//                            spanP:'微信营销',
//                            numClass:'glyphicon glyphicon-plus'
//                        }
//
//                ];
}]);