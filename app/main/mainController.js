(function () {
    angular.module('myApp')
        .controller('mainController', mainController);

    mainController.$inject = [
        '$scope',
        '$rootScope',
        'logoutService',
        '$location',
        '$translate',
        'userService',
        'feedbackService'
    ];

    function mainController($scope,
                            $rootScope,
                            logoutService,
                            $location,
                            $translate,
                            userService,
                            feedbackService) {

        $scope.logoutLoadingArr = [logoutService];
        $rootScope.userData = userService.getUser();


        var currentLang = $translate.use();
        $scope.site = {"language":currentLang};

        $scope.changeLanguage = function (lang) {
            $translate.use(lang)
        };

        $scope.onFeedbackClick = function () {
            feedbackService.openFeedback();
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