storeApp.controller("StoreCtrl",
                  ['$scope', 'productsService', 'cartService','$stateParams',
                  function($scope, productsService, cartService, $stateParams){

  console.log("success store ctrl");
  $scope.products = productsService.getProducts();
  $scope.categories = productsService.getCategories();
  $scope.cart = cartService.listAll();
  $scope.categorySelection = 0;

  $scope.params = $stateParams;
  $scope.productId = $stateParams.productId; //-1
  $scope.product = $scope.products[2];

  $scope.cartTotal = cartService.getCartTotal();

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

  $scope.addToCart = function(qty, item){
    console.log('adding');
    item = item || $scope.product ;
    cartService.addItem(item, qty);
  };

  $scope.removeItem = function(item){
    //item is array [obj, quantity]
    cartService.removeItem(item[0]);
  };



}]);