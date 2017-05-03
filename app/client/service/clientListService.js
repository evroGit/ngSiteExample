'use strict';

(function () {
    angular.module('myApp')
        .service('clientListService', clientListService);

    clientListService.$inject = ['$http','utilService'];

    function clientListService($http, utilService) {
        var me = this;
        this.isLoading = false;

        this.getList = function () {
            this.isLoading = true;
            var httpConfig = utilService.getHttpConfigObject();
            httpConfig.url = 'client/service/clientList.json';

            return $http(httpConfig)
                .then(
                    function (response) {
                        me.isLoading = false;
                        return response;
                    },
                    function (response) {
                        me.isLoading = false;
                        return response;
                    }
                )
        }
    }

}());