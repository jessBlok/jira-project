angular.module("jiraApp")

.directive("myJiraIssues", function () {
        return {
        restrict: 'E',
        templateUrl: 'myjiraissues.html',
        controller: 'dataController'

    };

});
