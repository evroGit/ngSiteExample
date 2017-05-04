'use strict';

(function () {
    angular.module('myApp')
        .service('clientUpdateService', clientUpdateService);

    clientUpdateService.$inject = ['$http', 'utilService'];

    function clientUpdateService($http, utilService) {
        var me = this;
        this.isLoading = false;

        this.update = function () {
            this.isLoading = true;
            var httpConfig = utilService.getHttpConfigObject();

            return $http(httpConfig)
                .then(
                    function (response) {
                        me.isLoading = false;
                    },
                    function (response) {
                        me.isLoading = false;
                    }
                )
        }
    }

}());