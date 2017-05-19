'use strict';

(function () {
    angular.module("myDirectives")
        .directive("login", login);

    login.$inject = [];
    function login() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/directive/login/loginView.html',
            controller: ['$scope', 'loginService', '$state', 'userService',
                function loginController($scope, loginService, $state, userService) {
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
                                    }
                                },
                                function (response) {
                                    $scope.showLoginError = true;
                                }
                            )
                    }
                }]
        }
    }
})();