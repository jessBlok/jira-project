var jiraApp = angular.module("jiraApp", ["ngResource"]);


jiraApp.filter("trust", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}]);
