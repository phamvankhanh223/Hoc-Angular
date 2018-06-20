var myApp=angular.module('myApp',[]);
myApp.controller('mainController',['$scope','$filter',function($scope,$filter){

    $scope.username='';
    $scope.len=5;
    $scope.rules=[


        
        {rulename:'luat 1'},
        {rulename:'luat 2'},
        {rulename:'luat 3'},
        {rulename:'luat 15'}
    ];
    

}])