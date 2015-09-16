storeApp.directive("product", function(){

  return {
    restrict: 'E',
    scope: {
      item: '=',
      addToCart: '&'
    },
    templateUrl: 'js/directives/product.html'
  };

});