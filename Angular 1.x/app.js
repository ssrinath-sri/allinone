var app = angular.module('myApp', []);

app.controller('firstCtrl', function($scope, $http){
    $http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        console.log('Success callback');
        console.log(data);
    })
});


var myApp = angular.module("myApp", []);

(function(app){
  "use strict";
  app.controller("productController", function($scope, $http){
    $http.get('https://jsonplaceholder.typicode.com/posts').then(function(prd){
        console.log(prod);
        console.log('Success callback');
      $scope.prd = prd.data;
      console.log($scope.prd);
    });
  });
})(myApp);