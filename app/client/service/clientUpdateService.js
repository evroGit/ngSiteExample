'use strict';

(function () {
    angular.module('myApp')
        .service('clientUpdateService', clientUpdateService);

    clientUpdateService.$inject = ['$http', 'utilService', 'modalMessageService','$timeout'];

    function clientUpdateService($http, utilService, modalMessageService, $timeout) {
        var me = this;
        this.isLoading = false;

        this.update = function () {
            this.isLoading = true;
            var httpConfig = utilService.getHttpConfigObject();

            return $timeout(function () {}, 500).then(function () {
                //  update client http call >>>>>>>
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
                    );
                //  update client http call >>>>>>>
            });
        }
    }

}());