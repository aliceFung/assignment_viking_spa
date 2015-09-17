storeApp.factory('cartService', ['$http', function($http){

  var obj = {};
  var contents = {};
  console.log("success")

  obj.listAll = function(){
    return contents
  };

  obj.addItem = function(obj, qty){
    qty = qty || 1;
    contents[obj.id] = [obj, qty];
  };

  obj.removeItem = function(obj){
    delete contents[obj.id]
  };

  return obj;

}]);