'use strict';

(function () {
    angular.module("myDirectives")
        .directive("modal", modal);

    modal.$inject = [];
    function login() {
        return {
            restrict: 'E',
            templateUrl: 'directive/modal/modal.html',
            controller: ['$scope', '$uibModal',
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