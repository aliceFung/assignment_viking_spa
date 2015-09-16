var storeApp = angular.module("storeApp", ['ui.router']);


storeApp.config(function($stateProvider, $urlRouterProvider){

  //default route
  $urlRouterProvider.otherwise("/store/index");

  $stateProvider
    .state('store',{
      url: '/store',
      templateUrl: 'js/templates/store-layout.html',
      controller: 'StoreCtrl'
    })

    .state('store.index', {
      url: '/store/index',
      templateUrl: 'js/templates/store-index.html'
    })

});


// enable error handling
storeApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});