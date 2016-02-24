angular.module('DontFuckIt')
.factory('DontFuckItService', ['$http', 'URL', function($http, URL) {

  function index() {
    return $http.get(URL + '/data/index.json');
  }

  function get(name) {
    return $http.get(URL + '/data/projects/' + name + '.json');
  }

  return {
    'index': index,
    'get': get
  };
}]);