var myApp=angular.module('myApp',[]);

myApp.directive('myDirective',function(){
    return {
        
        restrict:'AECM',
        template: '<h3>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit aliquid doloribus aut corporis dolores placeat voluptatum tempore, magnam ipsam distinctio hic recusandae animi facere ipsa quasi. Adipisci, fuga quod?</h3>',
        replace:true,
    }
})