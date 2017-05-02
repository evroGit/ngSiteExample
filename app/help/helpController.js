'use strict';

(function () {
    angular.module('myApp')
        .controller('helpController', helpController);

    helpController.$inject = ['$scope'];
    function helpController($scope) {

        $scope.isButtonSelected1 = false;
        $scope.isButtonSelected2 = false;

        $scope.onFaqClick = function () {
            $scope.isButtonSelected1 = !$scope.isButtonSelected1;
            $scope.isButtonSelected2 = false;
        };

        $scope.onHotlineClick = function () {
            $scope.isButtonSelected2 = !$scope.isButtonSelected2;
            $scope.isButtonSelected1 = false;
        }
    }
})();
