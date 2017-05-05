'use strict';

(function () {
    angular.module('myApp')
        .service('clientCreateService', clientCreateService);

    clientCreateService.$inject = ['$http', 'utilService', '$timeout'];

    function clientCreateService($http, utilService, $timeout) {
        var me = this;
        this.isLoading = false;

        this.create = function () {
            this.isLoading = true;
            var httpConfig = utilService.getHttpConfigObject();

            return $timeout(function () {}, 500).then(function () {
                //  client list http call
                return $http(httpConfig)
                    .then(
                        function (response) {
                            me.isLoading = false;
                        },
                        function (response) {
                            me.isLoading = false;
                        }
                    )
                //  client list http call
            })

        }
    }

}());