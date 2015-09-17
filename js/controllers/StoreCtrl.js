storeApp.controller("StoreCtrl",
                  ['$scope', 'productsService', 'cartService','$stateParams',
                  function($scope, productsService, cartService, $stateParams){

  console.log("success store ctrl");

  //get info from services
  $scope.products = productsService.getProducts();
  $scope.categories = productsService.getCategories();

  $scope.cart = cartService.listAll();

  // // error: this doesn't match data binding on store-index
  // $scope.categorySelection = 0;

  // $scope.params = $stateParams;
  // $scope.productId = $stateParams.productId; //-1
  // $scope.product = $scope.products[2];

  $scope.cartTotal = cartService.getCartTotal();

  $scope.productByCategory = function(){
    return function(item){
      if (productsService.getCategory()){
        return (item.categoryID == productsService.getCategory());
      }else {
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
    // debugger
    console.log(qty);
    item = item || $scope.product ;
    cartService.addItem(item, qty);
  };

  $scope.removeItem = function(item){
    //item is array [obj, quantity]
    cartService.removeItem(item[0]);
  };



}]);