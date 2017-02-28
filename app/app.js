'use strict';

var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/", {
            templateUrl: "home/home.html"
        })
        .when("/start", {
            templateUrl: "start/start.html",
            controller: "startController"
        })
        .when("/help", {
            templateUrl:"help/help.html",
            controller: "helpController"
        })
});


(function () {
    angular.module('myApp')
        .controller('mainController', mainController);


    mainController.$inject = ['$scope'];
    function mainController($scope) {
        $scope.startText = "Hello";
    }
})();


(function () {
    angular.module('myApp')
        .controller('startController', startController);

    startController.$inject = ['$scope'];
    function startController($scope) {
    }
})();


(function () {
    angular.module('myApp')
        .controller('helpController', helpController);

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
    angular.module('myApp')
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
