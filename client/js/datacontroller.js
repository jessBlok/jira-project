angular.module("jiraApp").controller("dataController",  ["$scope", "$http" , "DataFactory", function ($scope, $http, DataFactory) {

$scope.data = DataFactory.query();




}]);
