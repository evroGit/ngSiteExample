'use strict';

(function () {
    angular.module('myApp')
        .service('utilService', utilService);

    utilService.$inject = [];
    function utilService() {
        var me = this;

        this.getUser = function () {
            return util;
        };
    }

}());