'use strict';

var app = angular.module('myApp', ['ngAnimate', 'ngCookies']);

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
    angular.module('myApp', [])
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
        .directive('onlyNumbers', onlyNumbers)

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
