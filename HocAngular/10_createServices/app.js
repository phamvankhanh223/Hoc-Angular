var myApp=angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
    $routeProvider.when('/main',{
        templateUrl:'pages/main.html',
        controller: 'mainController'

    })

    .when('/second',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

myApp.service('nameService',function(){
    var serl=this;
   this.name="pham van khanh";
   this.nameLength=function(){

       return serl.name.length;
   }
       
})


myApp.controller('mainController',['$scope','$log','nameService',function($scope,$log,nameService){
  
    $scope.name=nameService.name;
    $scope.nameLength=nameService.nameLength();
    
    $scope.$watch('name',function(){
        nameService.name=$scope.name;
    })
    

   

}]);
myApp.controller('secondController',['$scope','$log','nameService',function($scope,$log,nameService){
    $scope.name=nameService.name;
    
}]);


