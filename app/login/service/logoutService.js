(function () {
    angular.module('myApp')
        .service('logoutService', logoutService);

    logoutService.$inject = ['$timeout', 'userService', '$q'];

    function logoutService($timeout, userService, $q) {
        var me = this;
        this.isLoading = false;

        var responseSuccess = {
            success: true
        };

        var responseFailure = {
            success: false
        };
        
        this.logout = function () {
            me.isLoading = true;
            var defered = $q.defer();
            var promise = defered.promise;

            $timeout(function () {
                me.isLoading = false;
                userService.removeUser();
                defered.resolve(responseSuccess);
                // defered.reject(responseFailure)
            }, 500);

            return promise;
        };


    }
})();