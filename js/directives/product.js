storeApp.directive("product", function(){

  return {
    restrict: 'E',
    scope: {
      product: '='
    },
    templateUrl: 'js/directives/product.html'
  };

});