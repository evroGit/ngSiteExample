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
        $scope.userData = userService.getUser();
        $scope.slidePanel = {active:false};
        $scope.languageObj = {
            "eng": "English",
            "deu": "Deutsch"
        };

        $rootScope.site = {
            "currentLangIso": $translate.use(),
            "isCacheOn": $scope.userData.isCacheOn
        };
        $scope.changeLanguage = function (lang) {
            $translate.use(lang);
            if ($rootScope.site.currentLangIso !== lang) {
                $rootScope.site.currentLangIso = lang;
            }
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