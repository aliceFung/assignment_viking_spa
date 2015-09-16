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
    });

});


// enable error handling
storeApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});