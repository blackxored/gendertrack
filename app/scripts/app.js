'use strict';

angular.module('gendertrack', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'cordova',
  'ionic',
  'firebase'
])
.constant('FIREBASE_URL', 'https://gendertrack.firebaseio.com')
.config(function($compileProvider) {
  // Needed for phonegap routing
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/profile', {
    templateUrl: 'views/current_user_profile.html',
    controller: 'CurrentProfileCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
