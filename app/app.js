'use strict';

var app = angular.module('myApp', ['ngRoute', 'myDirectives']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/", {
            templateUrl: "start/start.html",
            controller: "StartController"
        })
        .when("/login", {
            templateUrl: "login/login.html",
            controller: "LoginController"
        })
        .when("/start", {
            templateUrl: "start/start.html",
            controller: "StartController"
        })
        .when("/help", {
            templateUrl: "help/help.html",
            controller: "HelpController"
        }).otherwise('/login');
});


app.run(function ($rootScope, $location, userService) {
    $rootScope.$on('$locationChangeStart',
        function(angularEvent, newUrl, oldUrl) {
            if (!userService.isLoggedIn()) {
                $location.path('/login');
            }
        }
    );
});



(function () {
    angular.module('myApp')
        .controller('MainController', mainController);
    mainController.$inject = ['$scope'];

    function mainController($scope) {
    }
})();