storeApp.controller("ProductCtrl",
        ['$scope', 'productsService', 'cartService', '$stateParams',
        function($scope, productsService, cartService, $stateParams){

  console.log("success product ctrl");

  // get info from services
  $scope.products = productsService.getProducts();
  $scope.categories = productsService.getCategories();

  $scope.cart = cartService.listAll();

  // get params from url
  $scope.productId = $stateParams.productId -1 ; //-1
  $scope.product = $scope.products[$scope.productId];

  $scope.addToCart = function(qty, item){
    console.log('inside p');
    item = item || $scope.product;
    cartService.addItem(item, qty);
  };

}]);