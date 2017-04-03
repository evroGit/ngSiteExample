'use strict';

(function () {
    angular.module('myApp')
        .controller('LoginController', loginController);
    loginController.$inject = ['$scope', 'loginService', '$location', 'userService'];
    function loginController($scope, loginService, $location, userService) {
        $scope.loadingServices = [loginService];
        $scope.username = "";
        $scope.password = "";

        $scope.login = function () {
            loginService.login($scope.username, $scope.password).then(
                function () {
                    var user = userService.getUser();
                    $location.path(loginService.response.path);
                }
            )
        }
    }
})();