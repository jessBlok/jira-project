angular.module("jiraApp").factory('DataFactory', ['$resource', function($resource){


        return $resource('https://pinguintest.atlassian.net/rest/api/2/search?jql=issuetype=epic%20and%20labels=roadmap+order+by+duedate+asc', {id:"@id"},{



          query: {
              method: 'GET',
                          headers: {
                                  'Authorization': 'Basic amVzc21ibG9rbGFuZDpqaXJhbWVub3ch',
  }
}

  });

  }]);




//   return $resource('https://pinguintest.atlassian.net/rest/api/issue/:key', {key: '@key'},
// )
// };
// }]);
//


// {
// getdata: {
//  method: 'GET',
//  headers: {
//  'Access-Control-Allow-Origin': '*',
//    'Authorization': 'Basic amVzc21ibG9rbGFuZDpqaXJhbWVub3ch',
//    'Access-Control-Allow-Methods': 'GET',
//  'Access-Control-Allow-Headers': 'Content-Type'
// }
// }
