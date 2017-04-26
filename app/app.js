'use strict';

var app = angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'myDirectives',
    'ngCookies',
    'pascalprecht.translate'
]);

app
    .config(
        ['$routeProvider', '$locationProvider',
            function ($routeProvider, $locationProvider) {
                $locationProvider.hashPrefix("");
                $routeProvider
                // .when("/", {
                //     templateUrl: "start/start.html"
                //     // controller: "startController"
                // })
                    .when("/login", {
                        templateUrl: "login/login.html"
                        // controller: "loginController"
                    })
                    .when("/start", {
                        templateUrl: "main/siteframe.html"
                        // controller: "startController"
                    })
                    .when("/help", {
                        templateUrl: "main/siteframe.html"
                        // controller: "helpController"
                    })

                    // .when("/start", {
                    //     templateUrl: "start/start.html"
                    //     // controller: "startController"
                    // })
                    // .when("/help", {
                    //     templateUrl: "help/help.html"
                    //     // controller: "helpController"
                    // })
                    .otherwise('/login');
            }
        ]
    )


    //////////////////////////  translation  //////////////////////////
    .config(
        ['$translateProvider',
            function ($translateProvider) {
                $translateProvider.useStaticFilesLoader({
                    files: [
                        {
                            prefix: '../lang/',
                            suffix: '.json'
                        }
                    ]
                });
                // Tell the module what language to use by default
                $translateProvider.preferredLanguage('deu');
                // Tell the module to store the language in the local storage
                $translateProvider.useLocalStorage();
                $translateProvider.useSanitizeValueStrategy('escapeParameters');
            }
        ]
    );
//////////////////////////  translation  //////////////////////////


app.run(function ($rootScope, $location, userService) {
    $rootScope.$on('$locationChangeStart',
        function (angularEvent, newUrl, oldUrl) {
            $rootScope.oldState = oldUrl;
            $rootScope.newState = newUrl;
            if (!userService.isLoggedIn()) {
                $location.path('/login');
            }
        }
    );
});


(function () {
    angular.module('myApp')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope', 'logoutService', '$location'];

    function mainController($scope, logoutService, $location) {
        $scope.logoutServices = [logoutService];
        $scope.site = {content: "start/start.html"};

        $scope.goto = function (path) {
            $scope.site.content = path;
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


