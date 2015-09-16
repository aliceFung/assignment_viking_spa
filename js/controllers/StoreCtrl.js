storeApp.controller("StoreCtrl", ['$scope', 'productsService',
                     function($scope, productsService){

  $scope.products = [];
  $scope.categories = [];

  //generate categories
  var createCategories = function(){
    var categories = [];
    for(var i=0; i <5; i++){
      var category = faker.commerce.department();
      if ($scope.categories.indexOf(category) == -1){
        $scope.categories.push(category);
      } else {
        i--; //redo category name generation
      }
    }
  };

  //generate products
  var createProducts = function(){
    for(var i=0; i <20; i++){

      var categoryID = Math.floor(
                      Math.random() * $scope.categories.length);

      var randomProduct = { id:   i+1,
                            name: faker.commerce.productName(),
                            price: faker.commerce.price(),
                            description: faker.lorem.sentence(),
                            categoryID: categoryID};

      $scope.products.push(randomProduct);
    }
  };




}]);