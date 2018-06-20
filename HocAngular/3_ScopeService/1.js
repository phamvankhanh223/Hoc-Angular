var myApp=angular.module("myApp",[]);
myApp.controller("mailController",function($scope){

    $scope.name="scope service 1";
    $scope.hoathinh="learning scope service angular js";

    console.log($scope.hoathinh);
});