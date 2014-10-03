'use strict';
angular.module('gendertrack.auth')
.controller('AccountCtrl', ['$scope', 'loginService', 'syncData', '$location',
  function($scope, loginService, syncData, $location) {
    syncData(['users', $scope.auth.user.id]).bind($scope, 'user');

    $scope.logout = function() {
      loginService.logout();
      $location.path('/login');
    };

    $scope.oldpass = null;
    $scope.newpass = null;
    $scope.confirm = null;

    $scope.reset = function() {
      $scope.err = null;
      $scope.msg = null;
    };

    $scope.updatePassword = function() {
      $scope.reset();
      loginService.changePassword(buildPasswordParams);
    };

    function buildPasswordParams() {
      return {
        email: $scope.auth.user.email,
        oldpass: $scope.oldpass,
        newpass: $scope.newpass,
        confirm: $scope.confirm,
        callback: function(err) {
          if (err) {
            $scope.err = err;
          } else {
            $scope.oldpass = null;
            $scope.newpass = null;
            $scope.confirm = null;
            $scope.msg = "Password updated!";
          }
        }
      };
    }
}]);
