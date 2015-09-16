storeApp.controller("ProductCtrl",
                  ['$scope', 'productsService', '$stateParams',
                  function($scope, productsService, $stateParams){

  $scope.products = productsService.getProducts();
  $scope.categories = productsService.getCategories();
  $scope.cart = {};
  $scope.categorySelection = 0;

  $scope.params = $stateParams;
  $scope.productId = $stateParams.productId -1 ; //-1
  $scope.product = $scope.products[$scope.productId];

  $scope.addToCart = function(quan){
    console.log('adding item');
    //key is an obj
    if ($scope.cart[$scope.product]){
      console.log('updating quantity');
      $scope.cart[$scope.product]+= quan;

    } else {
      console.log('new item to cart');
      $scope.cart[$scope.product] = quan;
    }
  };

}]);