angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('dashboard', {
    url: '/dashboard',
    templateUrl: '/templates/dashboard.html'
  })

  .state('parking', {
    url: '/parking',
    templateUrl: '/templates/parking.html'
  })

  $urlRouterProvider.otherwise('/dashboard');
})
