'use strict';

(function () {
    angular.module("myDirectives")
        .directive("login", login);

    login.$inject = [];
    function login() {
        return {
            restrict: 'E',
            scope:{},
            templateUrl: 'directive/login/loginView.html',
            controller: ['$scope', 'loginService', '$location', '$state', 'userService',
                function loginController($scope, loginService, $location, $state, userService) {

                    userService.removeUser();

                    $scope.loadingServices = [loginService];
                    $scope.username = "";
                    $scope.password = "";

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
                }]
        }
    }

})();