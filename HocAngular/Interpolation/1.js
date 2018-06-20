var myApp=angular.module('myApp',[]);
myApp.controller('mainController',['$scope','$timeout',function($scope,$timeout){
    $scope.name="khanh";

    $timeout(function(){

        $scope.name="khanh dai ca";

    },2000);

    



}])