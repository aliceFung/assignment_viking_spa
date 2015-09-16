storeApp.controller("Storectrl", ['$scope', 'productsService',
                     function($scope, productsService){

  $scope.products = productService.getProducts();


}]);