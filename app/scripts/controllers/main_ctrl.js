'use strict';

angular.module('gendertrack')
  .controller('MainCtrl', function($scope) {
    $scope.openAppMenu = function() {
      $scope.sideMenuController.toggleLeft();
    };
  });
