'use strict';

angular.module('gendertrack')
  .controller('MainCtrl', function($scope, FIREBASE_URL, $firebase) {
    var ref = new Firebase(FIREBASE_URL + '/males');

    $scope.openAppMenu = function() {
      $scope.sideMenuController.toggleLeft();
    };

    $scope.countMale = function() {
      console.log("Counting male");
      $scope.males = $firebase(ref.limit(1));
      $scope.males.count = $scope.males.count++;
      $scope.males.$save();
    };

    $scope.countFemale = function() {
    };
  });
