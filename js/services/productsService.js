app.factory('productsService', ['$http', function($http){

  var obj = {};

  obj.getProducts = function(success, failure){
    return $http.get('https://pacific-stream-9205.herokuapp.com/puppies.json').then(success, failure);
  };


  return obj;

}]);