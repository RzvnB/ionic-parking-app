angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('dashboard', {
    url: '/page1',
    templateUrl: 'templates/dashboard.html',
    controller: 'dashboardCtrl'
  })

  .state('parcare1', {
    url: '/page2',
    templateUrl: 'templates/parcare1.html',
    controller: 'parcare1Ctrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});