'use strict';
var angular = require('angular');
// Declare app level module which depends on views, and components
angular.module('myApp', [
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]);
//config(['$routeProvider', function($routeProvider) {
//  $routeProvider.otherwise({redirectTo: '/'});
//}]);
