'use strict';

(function () {
    angular.module('myApp')
        .controller('loginController', loginController);
    loginController.$inject = ['$scope', '$window', 'loginService', '$location', 'userService'];
    function loginController($scope, $window, loginService, $location, userService) {

        userService.removeUser();

        $scope.loadingServices = [loginService];
        $scope.username = "";
        $scope.password = "";

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