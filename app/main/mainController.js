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
        $scope.languageObj = {
            "eng": "English",
            "deu": "Deutsch"
        };

        $scope.site = {"currentLangIso": $translate.use()};
        $scope.changeLanguage = function (lang) {
            $translate.use(lang);
            if ($scope.site.currentLangIso !== lang){
                $scope.site.currentLangIso = lang;
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