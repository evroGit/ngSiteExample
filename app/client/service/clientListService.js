'use strict';

(function () {
    angular.module('myApp')
        .service('clientListService', clientListService);

    clientListService.$inject = [
        '$http',
        '$rootScope',
        'utilService',
        '$timeout',
        '$cacheFactory',
        '$q'
    ];

    function clientListService($http,
                               $rootScope,
                               utilService,
                               $timeout,
                               $cacheFactory,
                               $q) {
        var me = this;
        var defered = $q.defer();
        var promise = defered.promise;
        this.isLoading = false;

        //cache for clientList
        this.cache = $cacheFactory('clientListCache');

        this.getList = function (page) {
            this.isLoading = true;

            //if cache is on, then get the data from cache
            if ($rootScope.site.isCacheOn && page && this.cache.get(page)) {
                defered.resolve(this.cache.get(page));
                this.isLoading = false;
                return promise;
            } else {
                var httpConfig = utilService.getHttpConfigObject();
                httpConfig.url = 'app/client/service/clientList.json';
                return $timeout(function () {
                }, 200).then(function () {

                    //  client list http call >>>>>>>
                    return $http(httpConfig)
                        .then(
                            function (response) {
                                me.isLoading = false;
                                me.cache.put(page, response);
                                return response;
                            },
                            function (response) {
                                me.isLoading = false;
                                me.cache.put(page, response);
                                return response;
                            }
                        );
                    // <<<<<<<<<<< client list http call
                });
            }
        }
    }

}());