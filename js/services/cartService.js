storeApp.factory('cartService', ['$http', function($http){

  var obj = {};
  var _contents = {};
  console.log("success cart service");

  obj.listAll = function(){
    return _contents;
  };

  obj.addItem = function(obj, qty){
    qty = qty || 1;
    _contents[obj.id] = [obj, qty];
  };

  obj.removeItem = function(obj){
    delete _contents[obj.id];
  };

  obj.getCartTotal = function(){
    var sum = 0;
    Object.keys(_contents).forEach(function (key) {
      sum += _contents[key][0].price * _contents[key][1];
    });
    return sum;
  };

  return obj;

}]);