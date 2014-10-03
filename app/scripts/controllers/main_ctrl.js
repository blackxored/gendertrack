'use strict';

angular.module('gendertrack')
  .controller('MainCtrl', function($scope, loginService, $location, $firebase, $rootScope) {
    $scope.openAppMenu = function() {
      $scope.sideMenuController.toggleLeft();
    };

    $scope.logout = function() {
      console.log("On logout");
      loginService.logout();
      $location.path('/login');
    };
  });
