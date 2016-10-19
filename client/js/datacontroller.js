angular.module("jiraApp").controller("dataController",  ["$scope", "$http" , "DataFactory", function ($scope, $http, DataFactory) {

$scope.data = DataFactory.query();





//   var req = {
//    method: 'GET',
//    url: "https://pinguintest.atlassian.net/rest/api/2/search?jql=issuetype=epic%20and%20labels=roadmap",
//    headers: {
//      'Authorization': 'Basic amVzc21ibG9rbGFuZDpqaXJhbWVub3ch'
//       }
// }
//
//   $http(req).then(function(data) {
//     $scope.results = data.data;
//   })









}]);
