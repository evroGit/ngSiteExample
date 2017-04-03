'use strict';

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