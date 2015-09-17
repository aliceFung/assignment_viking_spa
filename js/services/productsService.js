storeApp.factory('productsService', ['$http', function($http){

  var obj = {};

  var _products = [];
  var _categories =[];
  var categorySelection = "";

  console.log("success product service");

  //generate categories
  var createCategories = function(){
    for(var i=0; i <5; i++){
      var category = faker.commerce.department();
      if (_categories.indexOf(category) == -1){
        _categories.push(category);
      } else {
        i--; //redo category name generation if category name exists
      }
    }
  };

  obj.setCategory = function(cat){
    categorySelection = cat;
  };

  obj.getCategory = function(){
    return categorySelection;
  };

  //generate products
  var createProducts = function(){
    for(var i=0; i <20; i++){

      var categoryID = Math.floor(
                      Math.random() * _categories.length);
      var productID = i + 1;
      var randomProduct = { id:   productID,
                            name: faker.commerce.productName(),
                            price: faker.commerce.price(),
                            description: faker.lorem.sentence(),
                            categoryID: categoryID,
                            image:  faker.image.imageUrl()};

      _products.push(randomProduct);
    }
  };


  obj.getProducts = function(){
    return _products;
  };

  obj.getCategories = function(){
    return _categories;
  };

  // run methods to create categories and products
  createCategories();
  createProducts();

  return obj;

}]);