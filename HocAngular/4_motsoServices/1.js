var myApp= angular.module('myApp',[]);

myApp.controller('mainController',function($log,$scope,$filter){
  
    $log.info('pham van khanh');
    $log.error('error');
    $log.warn('warning');

    $scope.name="pham van khanh";
    $filter.uppercaseName=$filter('uppercase')($scope.name);
    
    $log.info($filter.uppercaseName);
    $log.info($scope.name);
    
    

})