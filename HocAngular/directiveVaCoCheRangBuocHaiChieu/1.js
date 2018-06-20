var myApp=angular.module('myApp',[]);
myApp.controller('mainController',['$scope','$filter',function($scope,$filter){

    $scope.tentaikhoan="";
    $scope.lowertentaikhoan=function(){
        return $filter('lowercase')($scope.tentaikhoan);
    }

}])