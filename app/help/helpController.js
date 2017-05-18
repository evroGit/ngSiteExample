'use strict';

(function () {
    angular.module('myApp')
        .controller('helpController', helpController);

    helpController.$inject = [
        '$scope',
        "$translate"
    ];
    function helpController($scope, $translate) {

        $scope.placeholder = "page.SEARCH";
        $scope.questionsList = [];

        //fill dummy questions arraz
        for (var i = 1; i <= 5; i++) {
            var qTranslation = $translate.instant("help.QUESTIONS." + i);
            $scope.questionsList.push(qTranslation);
        }

        $scope.isButtonSelected1 = true;
        $scope.onFaqClick = function () {
            $scope.isButtonSelected1 = !$scope.isButtonSelected1;
        };
    }
})();
