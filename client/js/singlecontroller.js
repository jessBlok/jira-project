angular.module("jiraApp").controller("singleController",  ["$scope", function ($scope) {


  $scope.dynamicwidths = function() {
    var daytask = "width: 200px";
    var weektask = "width: 300px";
    var multiweektask= "width: 400px";

    if($scope.issue.fields.timeestimate <= 28800)
       return daytask;

    if($scope.issue.fields.timeestimate > 28800  && $scope.issue.fields.timeestimate <= 144000)
       return weektask;

    if($scope.issue.fields.timeestimate > 144000 )
          return multiweektask;
  }



}]);
