'use strict';
angular.module("gendertrack")
.controller("GenderCtrl", function($scope, FBURL, $firebase) {
  $scope.males   = $firebase(new Firebase(FBURL + '/males'));
  $scope.females = $firebase(new Firebase(FBURL + '/females'));

  $scope.countMale = function() {
    window.males = $scope.males;
    $scope.males.$add({timestamp: new Date()});
  };

  $scope.countFemale = function() {
    $scope.females.$add({ timestamp: new Date()});
    window.females = $scope.females;
  };

  $scope.resetCounters = function() {
    console.log('In reset session');
    $scope.males.$remove();
    $scope.females.$remove();
  };

  $scope.$watch('males', function(oldVal, newVal) {
    $scope.maleCount = $scope.males.length;
  });
});
