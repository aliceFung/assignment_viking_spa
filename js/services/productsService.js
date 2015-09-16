storeApp.factory('productsService', ['$http', function($http){

  var obj = {};

  var products = [];
  var categories =[];
  var categorySelection = "";

  //generate categories
  var createCategories = function(){
    for(var i=0; i <5; i++){
      var category = faker.commerce.department();
      if (categories.indexOf(category) == -1){
        categories.push(category);
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
  }

  //generate products
  var createProducts = function(){
    for(var i=0; i <20; i++){

      var categoryID = Math.floor(
                      Math.random() * categories.length);
      var productID = i + 1;
      var randomProduct = { id:   productID,
                            name: faker.commerce.productName(),
                            price: faker.commerce.price(),
                            description: faker.lorem.sentence(),
                            categoryID: categoryID};

      products.push(randomProduct);
    }
  };


  obj.getProducts = function(){
    return products;
  };

  obj.getCategories = function(){
    return categories;
  };

  // run methods to create categories and products
  createCategories();
  createProducts();

  return obj;

}]);