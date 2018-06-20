var myApp=angular.module('myApp',['ngRoute']);

// myApp.config(function($routeProvider){
//     $routeProvider.when('/',{
//         templateUrl:'page/main.html',
//         controller:'mainController'
//     })
//     .when('/second',{
//         templateUrl:'page/second.html',
//         controller:'secondController'
//     })



// });

myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'page/main.html',
        controller: 'mainController'
    })
    .when('/second',{
        templateUrl:'page/second.html',
        controller:'secondController'
    })
});

myApp.controller('mainController',['$scope',function($scope){
    $scope.name="this is main controller";

}]);
myApp.controller('secondController',['$scope',function($scope){
    $scope.name="this is second controller";
}]);
