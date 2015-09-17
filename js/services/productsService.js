storeApp.factory('productsService', ['$http', function($http){

  var obj = {};

  var _products = [];
  var _categories =[];
  var _categorySelection = "";

  console.log("success product service");

  //generate categories
  var _createCategories = function(){
    for(var i=0; i <5; i++){
      var category = faker.commerce.department();
      if (_categories.indexOf(category) == -1){
        _categories.push(category);
      } else {
        i--; //redo category name generation if category name exists
      }
    }
  };

  //generate products
  var _createProducts = function(){
    for(var i=0; i <20; i++){

      // get random category id
      var categoryID = Math.floor(
                      Math.random() * _categories.length);
      var productID = i + 1; // id starts at 1

      var randomProduct = { id:   productID,
                            name: faker.commerce.productName(),
                            price: faker.commerce.price(),
                            description: faker.lorem.sentence(),
                            categoryID: categoryID,
                            image:  faker.image.imageUrl()};

      _products.push(randomProduct);
    }
  };


  obj.setCategory = function(cat){
    _categorySelection = cat;
  };

  obj.getCategory = function(){
    return _categorySelection;
  };

  obj.getProducts = function(){
    return _products;
  };

  obj.getCategories = function(){
    return _categories;
  };

  // run methods to create categories and products
  _createCategories();
  _createProducts();

  return obj;

}]);