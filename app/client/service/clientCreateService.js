'use strict';

(function () {
    angular.module('myApp')
        .service('clientCreateService', clientCreateService);

    clientCreateService.$inject = ['$http', 'utilService', 'modalMessageService', '$timeout'];

    function clientCreateService($http, utilService, modalMessageService,  $timeout) {
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
                            modalMessageService.showSuccessModalMessage()
                        },
                        function (response) {
                            me.isLoading = false;
                            modalMessageService.showSuccessModalMessage()
                        }
                    )
                //  client list http call
            })

        }
    }

}());