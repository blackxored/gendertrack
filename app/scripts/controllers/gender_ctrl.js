'use strict';
angular.module("gendertrack")
.controller("GenderCtrl", function($scope, FBURL, $firebase, $rootScope) {
  var ref = $firebase(new Firebase(FBURL));
  var user = $scope.auth.user;
  $scope.males   = ref.$child('users/' + user.id + '/males');
  $scope.females = ref.$child('users/' + user.id + '/females');

  $scope.countMale = function() {
    $scope.males.$add({timestamp: new Date()});
  };

  $scope.countFemale = function() {
    $scope.females.$add({ timestamp: new Date()});
  };

  $scope.resetCounters = function() {
    $scope.males.$remove();
    $scope.females.$remove();
  };
});
