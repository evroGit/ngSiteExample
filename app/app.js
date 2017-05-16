'use strict';

var app = angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'myDirectives',
    'ngCookies',
    'ui.router',
    'pascalprecht.translate',
    'ui.bootstrap',
    'ngTable',
    'ui.load'
]);

angular.module('myDirectives', []);

app
    .config(
        ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$controllerProvider', '$provide',
            function ($stateProvider, $urlRouterProvider, $locationProvider, $controllerProvider, $provide) {
                $locationProvider.hashPrefix("");

                //lazy loading for controller and services
                app.controller = $controllerProvider.register;
                app.service = $provide.service;

                $stateProvider
                    .state("login", {
                        url: "/login",
                        templateUrl: "app/login/view/login.html"
                    })
                    .state("app", {
                        url: '/app',
                        abstract: true,
                        templateUrl: "app/main/view/siteframe.html"
                    })
                    .state("app.start", {
                        url: "/start",
                        templateUrl: "app/start/view/start.html",
                        //lazy loading for controller and services
                        resolve: {
                            deps: [
                                'uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load([
                                        'app/start/startController.js'
                                    ]);
                                }
                            ]
                        }
                    })
                    .state("app.clientCreate", {
                        url: "/clientCreate",
                        templateUrl: "app/client/view/clientCreate.html",
                        //lazy loading for controller and services
                        resolve: {
                            deps: [
                                'uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load([
                                        'app/client/clientCreateController.js',
                                        'app/client/service/clientCreateService.js',
                                        'app/client/service/clientUpdateService.js'
                                    ]);
                                }
                            ]
                        }
                    })
                    .state("app.clientEdit", {
                        url: "/clientEdit",
                        templateUrl: "app/client/view/clientCreate.html",
                        //lazy loading for controller and services
                        resolve: {
                            deps: [
                                'uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load([
                                        'app/client/clientCreateController.js',
                                        'app/client/service/clientCreateService.js',
                                        'app/client/service/clientUpdateService.js'
                                    ]);
                                }
                            ]
                        }
                    })
                    .state("app.clientList", {
                        url: "/clientList",
                        templateUrl: "app/client/view/clientList.html",
                        //lazy loading for controller and services
                        resolve: {
                            deps: [
                                'uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load([
                                        'app/client/clientListController.js',
                                        'app/client/service/clientListService.js'
                                    ]);
                                }
                            ]
                        }
                    })
                    .state("app.help", {
                        url: "/help",
                        templateUrl: "app/help/view/help.html",
                        //lazy loading for controller and services
                        resolve: {
                            deps: [
                                'uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load([
                                        'app/help/helpController.js'
                                    ]);
                                }
                            ]
                        }
                    });
                $urlRouterProvider.otherwise('/login');
            }
        ]
    )


    //////////////////////////  translation config start //////////////////////////
    .config(
        ['$translateProvider',
            function ($translateProvider) {
                $translateProvider.useStaticFilesLoader({
                    files: [
                        {
                            prefix: 'lang/',
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
    )
    //////////////////////////  translation  config end//////////////////////////


    .run(function ($rootScope, $state, $location, userService) {
        $rootScope.$state = $state;
        $rootScope.$on('$stateChangeStart',
            function (event, to, toParams, from) {

                $rootScope.oldState = from.name;
                $rootScope.newState = to.name;
                $rootScope.isLoggedIn = userService.isLoggedIn();

                if (to.name !== "login") {
                    if (!$rootScope.isLoggedIn) {
                        event.preventDefault();
                        $state.go("login");
                    }
                }
            }
        );
    });