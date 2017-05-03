(function () {
    angular.module('myApp')
        .controller('mainController', mainController);

    mainController.$inject = [
        '$scope',
        '$rootScope',
        'logoutService',
        '$location',
        '$translate',
        'userService'
    ];

    function mainController($scope,
                            $rootScope,
                            logoutService,
                            $location,
                            $translate,
                            userService) {

        $scope.logoutLoadingArr = [logoutService];
        $rootScope.userData = userService.getUser();

        $scope.changeLanguage = function (lang) {
            $translate.use(lang)
        };

        $scope.onLogoutClick = function () {
            logoutService.logout().then(
                function () {
                    $location.path('/login');
                },
                function () {
                    $location.path('/login');
                }
            )
        };
    }
})();