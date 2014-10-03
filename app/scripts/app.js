'use strict';

angular.module('gendertrack', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'cordova',
  'ionic',
  'firebase',
  'ui.gravatar',
  'gendertrack.auth',
  'gendertrack.waitForAuth'
])
.constant('FBURL', 'https://gendertrack.firebaseio.com')
.config(function($compileProvider) {
  // Needed for phonegap routing
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    authRequired: true
  })
  .when('/profile', {
    templateUrl: 'views/current_user_profile.html',
    controller: 'AccountCtrl',
    authRequired: true
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
})
.run(['loginService', '$rootScope', 'FBURL', function(loginService, $rootScope, FBURL) {
  $rootScope.auth = loginService.init('/login');
  $rootScope.FBURL = FBURL;
}]);
