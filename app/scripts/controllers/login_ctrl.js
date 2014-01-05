'use strict';
angular.module('gendertrack.auth')
.controller('LoginCtrl', ['$scope', 'loginService', '$location',
            function($scope, loginService, $location) {
              $scope.email = null;
              $scope.pass = null;
              $scope.confirm = null;
              $scope.createMode = false;

              $scope.$on('$firebaseAuth:login', function() {
                $location.replace();
                $location.path('/account');
              });

              $scope.login = function(cb) {
                $scope.err = null;
                if (!$scope.email) {
                  $scope.err = 'Please enter email';
                } else if (!$scope.pass) {
                  $scope.err = 'Please enter password';
                } else {
                  loginService.login($scope.email, $scope.pass, function(err, user) {
                    $scope.err = err ? err + '' : null;
                    if (!err) {
                      cb && cb(user);
                    }
                  });
                }
              };

              $scope.createAccount = function() {
                if (!$scope.email) {
                  $scope.err = 'Please enter email';
                } else if (!$scope.pass) {
                  $scope.err = 'Please enter password';
                } else if ($scope.pass !== $scope.confirm) {
                  $scope.err = 'Passwords don\'t match';
                } else {
                  loginService.createAccount($scope.email, $scope.pass, function(err, user) {
                    if (err) {
                      $scope.err = err ? err + '' : null;
                    } else {
                      $scope.login(function() {
                        loginService.createProfile(user.uid, user.email);
                      });
                    }
                  });
                }
              };
            }]);
