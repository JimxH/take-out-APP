angular.module('kaifanla',['ng','ngRoute','ngAnimate'])
    .config(function($routeProvider){
        $routeProvider
            .when('/start',{templateUrl:'tpl/start.html',controller:'startCtrl'})
            .when('/main',{templateUrl:'tpl/main.html',controller:'mainCtrl'})
            .when('/detail',{templateUrl:'tpl/detail.html',controller:'detailCtrl'})
            .when('/order',{templateUrl:'tpl/order.html',controller:'orderCtrl'})
            .when('/myorder',{templateUrl:'tpl/myorder.html',controller:'myorderCtrl'})
            .otherwise({redirectTo:'/start'})
    }).controller('startCtrl',function($scope,$location){

    })
    .controller('mainCtrl',function($scope,$location){
        $scope.data=222;
    })
    .controller('detailCtrl',function($scope,$location){

    })
    .controller('orderCtrl',function($scope,$location){

    })
    .controller('myorderCtrl',function($scope,$location){

    })
    .controller('parentCtl',function($scope,$location){
        $scope.jump=function(url){
            $location.path(url);
        }
    });