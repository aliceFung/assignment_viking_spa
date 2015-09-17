storeApp.factory('cartService', ['$http', function($http){

  var obj = {};
  var contents = {};
  console.log("success cart service");

  obj.listAll = function(){
    return contents;
  };

  obj.addItem = function(obj, qty){
    qty = qty || 1;
    contents[obj.id] = [obj, qty];
  };

  obj.removeItem = function(obj){
    delete contents[obj.id];
  };

  obj.getCartTotal = function(){
    var sum = 0;
    Object.keys(contents).forEach(function (key) {
      sum += contents[key][0].price * contents[key][1];
    });
    return sum;
  };

  return obj;

}]);