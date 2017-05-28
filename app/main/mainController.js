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
        $scope.slidePanel =     {active:false};
        $scope.slidePanelHelp = {active:false};
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


        // Tab management functions start >>>>>
        $scope.tabList = [];

        $scope.addTab = function (tabObj, tabTitleProperty, index) {
            // setTabsInactive();
            if (tabTitleProperty && tabObj.hasOwnProperty(tabTitleProperty) && !isTabOpen(tabObj[tabTitleProperty], tabObj)){
                $scope.tabList.push({
                    tabTitle: tabObj[tabTitleProperty] || tabObj.name || "",
                    active: index,
                    data: tabObj
                });
            }
        };

        $scope.deleteTab = function (tabIndex) {
            $scope.tabList.splice(tabIndex, 1);
        };

        function isTabOpen (title, tabObj) {
            for (var i = 0; i < $scope.tabList.length; i++) {
                if (title == $scope.tabList[i].tabTitle) return $scope.tabList[i];
            }
            return false;
        };

        // function setTabsInactive() {
        //     angular.forEach($scope.tabList, function (tab) {
        //         tab.active = false;
        //     });
        // };


        // Tab management functions end <<<<<<<

    }
})();