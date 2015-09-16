var storeApp = angular.module("storeApp", ['ui.router']);


storeApp.config(function($stateProvider, $urlRouterProvider){

  //default route
  $urlRouterProvider.otherwise("/products/index");

  $stateProvider
    .state('products',{
      url: '/products',
      templateUrl: '../templates/store-layout.html',
      controller: 'StoreCtrl'
    })

    .state('products.index', {
      url: '/index',
      templateUrl: '../templates/store-index.html',
    })

    .state('products.show', {
      url: '/:productId',
      templateUrl: '../templates/product-detail.html',
      controller: 'ProductCtrl'
    });

});


// enable error handling
storeApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

storeApp.filter('productByCategory', ['productsService', function(productsService){

  return function(items){

    var filteredCats = [];
    console.log(productsService.getCategory())

    if (productsService.getCategory() === ""){
      return items
    } else {
      for (var i = 0; i < items.length; i++){
        if (items[i].categoryID == productsService.getCategory()){
          filteredCats.push(items[i])
        }
      };
      return filteredCats;
    }

  }
}]);