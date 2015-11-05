'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function($window) {
    console.log(2147483647 >>0);
    console.log(2147483648 >>0);
    console.log(2147483649 >>0);
}]);