angular.module("jiraApp").controller("dataController",  ["$scope",  "DataFactory", "$sce", function ($scope, DataFactory, $sce) {

$scope.data = DataFactory.query();

$scope.thisCanBeusedInsideNgBindHtml = $sce.trustAsHtml();


}]);
