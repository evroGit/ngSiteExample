'use strict';

(function () {
    angular.module("myDirectives")
        .directive("loadingMaskWatcher", loadingMaskWatcher);

    loadingMaskWatcher.$inject = [];

    function loadingMaskWatcher() {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.css("position", "relative");
                element.prepend("<div class='loadingMaskContainer'></div>");
                var watchedServicesArr = [];
                attrs.$observe("loadingMaskWatcher",
                    function (value) {
                        try {
                            watchedServicesArr = angular.fromJson(value);
                        } catch (err) {
                            console.log(err);
                        }
                        var isLoading = false;

                        var i = 0;
                        for (; i < watchedServicesArr.length; i++) {
                            isLoading = isLoading || watchedServicesArr[i].isLoading;
                        }

                        if (isLoading) {
                            element[0].getElementsByClassName("loadingMaskContainer")[0].classList.add("loadingMask");
                        } else {
                            element[0].getElementsByClassName("loadingMaskContainer")[0].classList.remove("loadingMask");
                        }
                    })
            }
        }
    }
})();