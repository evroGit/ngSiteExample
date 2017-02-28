'use strict';

var app = angular.module('myApp', ['ngRoute', 'myDirectives']);
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/", {
            templateUrl: "home/home.html"
        })
        .when("/start", {
            templateUrl: "start/start.html",
            controller: "StartController"
        })
        .when("/help", {
            templateUrl:"help/help.html",
            controller: "HelpController"
        }).
        otherwise('/');
});


(function () {
    angular.module('myApp')
        .controller('MainController', mainController);


    mainController.$inject = ['$scope'];
    function mainController($scope) {
    }
})();


(function () {
    angular.module('myApp')
        .controller('StartController', startController);

    startController.$inject = ['$scope'];
    function startController($scope) {
        $scope.loadingTime = true;
    }
})();


(function () {
    angular.module('myApp')
        .controller('HelpController', helpController);

    helpController.$inject = ['$scope'];
    function helpController($scope) {
    }
})();


(function () {
    angular.module('myApp')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope'];
    function loginController($scope) {
        $scope.username = "";
        $scope.userpass = "";
    }
})();


(function () {
    angular.module("myDirectives", [])
        .directive("loaderWatcher", loaderWatcher);
    loaderWatcher.$inject = [];
    function loaderWatcher() {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                attrs.$observe("loaderWatcher", function (value) {
                    console.log("loaderWatcher", value)
                })
            }
        }
    }
})();


(function () {
    angular.module('myDirectives')
        .directive('attributWatcher', attributWatcher);

    attributWatcher.$inject = [];
    function attributWatcher() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.$watch("loadingTime", function (oldValue, newValue) {
                    console.log(oldValue, newValue);
                })

            }
        }
    }
})();


(function () {
    angular.module('myDirectives')
        .directive('onlyNumbers', onlyNumbers);

    onlyNumbers.$inject = [];
    function onlyNumbers() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                console.log(element, attrs);
            }
        }
    }
})();