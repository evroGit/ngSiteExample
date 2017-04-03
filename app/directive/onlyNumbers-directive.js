'use strict';

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