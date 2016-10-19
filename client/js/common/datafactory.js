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
