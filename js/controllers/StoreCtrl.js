storeApp.controller("StoreCtrl",
                  ['$scope', 'productsService', '$stateParams',
                  function($scope, productsService, $stateParams){

  $scope.products = productsService.getProducts();
  $scope.categories = productsService.getCategories();
  $scope.cart = {};
  $scope.categorySelection = 0;

  $scope.params = $stateParams;
  $scope.productId = $stateParams.productId; //-1
  $scope.product = $scope.products[2];

  $scope.productByCategory = function(){
    return function(item){
      console.log('selected: '+ productsService.getCategory());
      console.log('item: ' + item);
      if (productsService.getCategory()){
        console.log('inside filter: ');
        return (item.categoryID == productsService.getCategory());
      }else {
        console.log('inside filter: everything');
        return true;
      }
    }();

  };

  //set category selection of productService
  $scope.setCategorySelection = function(cat){
    console.log("CHANGING");
    productsService.setCategory(cat);
  };

  $scope.addToCart = function(item){
    console.log('adding item');
    if ($scope.cart[item]){
      console.log('updating quantity');
      $scope.cart[item]++;
    } else {
      console.log('new item to cart');
      $scope.cart[item] = 1;
    }
  };

  // //generate categories
  // var createCategories = function(){
  //   var categories = [];
  //   for(var i=0; i <5; i++){
  //     var category = faker.commerce.department();
  //     if ($scope.categories.indexOf(category) == -1){
  //       $scope.categories.push(category);
  //     } else {
  //       i--; //redo category name generation
  //     }
  //   }
  // };

  // //generate products
  // var createProducts = function(){
  //   for(var i=0; i <20; i++){

  //     var categoryID = Math.floor(
  //                     Math.random() * $scope.categories.length);
  //     var productID = id +1;
  //     var randomProduct = { id:   productID,
  //                           name: faker.commerce.productName(),
  //                           price: faker.commerce.price(),
  //                           description: faker.lorem.sentence(),
  //                           categoryID: categoryID};

  //     $scope.products.push(randomProduct);
  //   }
  // };




}]);