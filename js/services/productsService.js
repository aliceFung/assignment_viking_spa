storeApp.factory('productsService', ['$http', function($http){

  var obj = {};

  var products = {};
  var categories =[];

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

  //generate products
  var createProducts = function(){
    console.log('creating products');
    for(var i=0; i <20; i++){

      var categoryID = Math.floor(
                      Math.random() * categories.length);
      var productID = i +1;
      var randomProduct = { id:   productID,
                            name: faker.commerce.productName(),
                            price: faker.commerce.price(),
                            description: faker.lorem.sentence(),
                            categoryID: categoryID};

      products[productID] = randomProduct;
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