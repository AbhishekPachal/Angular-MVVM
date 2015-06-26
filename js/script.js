var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'view.html',
				controller:'mainController'
          });
});

app.controller('mainController',function($scope,$route){
    //Controller code for mainController
	$scope.calc=function(){
		var num1=(parseInt($scope.firstno)/1)>0?parseInt($scope.firstno):0;
		var num2=(parseInt($scope.secondno)/1)>0?parseInt($scope.secondno):0;
		$scope.sum=num1+num2;
	};
});
