angular.module("jiraApp").controller("dataController",  ["$scope", "$http" , "DataFactory", "$sce", function ($scope, $http, DataFactory, $sce) {

$scope.data = DataFactory.query();

 $scope.thisCanBeusedInsideNgBindHtml = $sce.trustAsHtml();



}]);
