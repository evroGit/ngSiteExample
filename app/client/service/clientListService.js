'use strict';

(function () {
    angular.module('myApp')
        .service('clientListService', clientListService);

    clientListService.$inject = ['$http', 'utilService', '$timeout'];

    function clientListService($http, utilService, $timeout) {
        var me = this;
        this.isLoading = false;

        this.getList = function () {
            this.isLoading = true;
            var httpConfig = utilService.getHttpConfigObject();
            httpConfig.url = 'client/service/clientList.json';

            return $timeout(function () {}, 200).then(function () {
                    
                //  client list http call >>>>>>>
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
                        );
                // <<<<<<<<<<< client list http call
                });


        }
    }

}());