'use strict';

(function () {
    angular.module('myApp')
        .controller('loginController', loginController);
    loginController.$inject = ['$scope', '$window', 'loginService', '$location', 'userService','$rootScope'];
    function loginController($scope, $window, loginService, $location, userService, $rootScope) {
        $scope.loadingServices = [loginService];
        $scope.username = "";
        $scope.password = "";

        if ($rootScope.newState && $rootScope.newState.indexOf('login')!==-1 && $rootScope.oldState.indexOf('login')==-1 ) {
            $window.location.reload();
        }

        $scope.login = function () {
            loginService.login($scope.username, $scope.password).then(
                function (response) {
                    if (response && response.data) {
                        $location.path(response.data.path);
                    }
                },
                function (response) {
                    $scope.showLoginError = true;
                }
            )
        }
    }
})();