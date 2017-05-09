'use strict';

(function () {
    angular.module('myApp')
        .service('clientUpdateService', clientUpdateService);

    clientUpdateService.$inject = ['$http', 'utilService', '$timeout'];

    function clientUpdateService($http, utilService, $timeout) {
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
                        },
                        function (response) {
                            me.isLoading = false;
                        }
                    );
                //  update client http call >>>>>>>
            });
        }
    }

}());