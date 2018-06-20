var myApp=angular.module('myApp',[]);
myApp.controller('mainController',['$scope','$filter',function($scope,$filter){


    $scope.username='';
    $scope.$watch('username',function(newValue,oldValue){
        console.log('changed!');
        console.log(newValue);
        console.log('old: ' +oldValue)
    })

}])