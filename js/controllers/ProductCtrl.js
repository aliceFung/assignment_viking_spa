storeApp.controller("ProductCtrl",
        ['$scope', 'productsService', 'cartService', '$stateParams',
        function($scope, productsService, cartService, $stateParams){

  console.log("success product ctrl")

  $scope.products = productsService.getProducts();
  $scope.categories = productsService.getCategories();
  $scope.cart = cartService.listAll();


  $scope.params = $stateParams;
  $scope.productId = $stateParams.productId -1 ; //-1
  $scope.product = $scope.products[$scope.productId];

  $scope.addToCart = function(qty){
    console.log('inside p');
    cartService.addItem($scope.product, qty);
  };

}]);