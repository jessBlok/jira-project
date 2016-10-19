angular.module("jiraApp").controller("singleController",  ["$scope", function ($scope) {


  $scope.dynamicwidths = function() {
    var daytask = "width: 300px";
    var weektask = "width: 500px";
    var multiweektask= "width: 700px";
    if($scope.issue.fields.timeestimate <= 28800)
       return daytask;
    if($scope.issue.fields.timeestimate > 28800  && $scope.issue.fields.timeestimate <= 144000)
       return weektask;
       if($scope.issue.fields.timeestimate > 144000 )
          return multiweektask;
  }



}]);
