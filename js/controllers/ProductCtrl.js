storeApp.controller("ProductCtrl",
                  ['$scope', 'productsService', 'cartService', '$stateParams',
                  function($scope, productsService, cartService, $stateParams){
  console.log("success")
  $scope.products = productsService.getProducts();
  $scope.categories = productsService.getCategories();
  $scope.cart = cartService.listAll();
  $scope.categorySelection = 0;

  $scope.params = $stateParams;
  $scope.productId = $stateParams.productId -1 ; //-1
  $scope.product = $scope.products[$scope.productId];

  $scope.addToCart = function(qty){
    cartService.addItem($scope.product, qty)
  };

}]);