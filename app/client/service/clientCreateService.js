'use strict';

(function () {
    angular.module('myApp')
        .service('clientCreateService', clientCreateService);

    clientCreateService.$inject = ['$http', 'utilService'];

    function clientCreateService($http, utilService) {
        var me = this;
        this.isLoading = false;

        this.create = function () {
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