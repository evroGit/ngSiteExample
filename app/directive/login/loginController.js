'use strict';

(function () {
    angular.module('myApp')
        .controller('loginController', loginController);
    loginController.$inject = ['$scope', 'loginService', '$location', '$state', 'userService'];
    function loginController($scope, loginService, $location, $state, userService) {

        userService.removeUser();

        $scope.loadingServices = [loginService];
        $scope.username = "Demo";
        $scope.password = "Demo";

        $scope.login = function () {
            loginService.login($scope.username, $scope.password)
                .then(
                    function (response) {
                        if (response && response.data) {
                            $state.go("app.start");
                            // $location.path(response.data.path);
                        }
                    },
                    function (response) {
                        $scope.showLoginError = true;
                    }
                )
        }
    }
})();