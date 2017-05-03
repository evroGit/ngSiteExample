(function () {
    angular.module('myApp')
        .service('loginService', loginService);

    loginService.$inject = ['$timeout', 'userService', '$q', '$http', '$log'];

    function loginService($timeout, userService, $q, $http, $log) {
        var me = this;
        this.isLoading = false;

        /////// dummy response data start /////////
        var responseSuccess = {
            data: {
                userId: 1,
                username: "musteruser",
                session: "TOKEN546566",
                firstname: "Max",
                lastname: "Mustermann",
                path: "/start"
            },
            success: true
        };

        var responseFailure = {
            data: null,
            message: 'Login error',
            success: false
        };
        /////// dummy response data end /////////


        // dummy login function with $http accessing local json file
        this.login = function (username, password) {
            me.isLoading = true;
            var defered = $q.defer();
            var promise = defered.promise;

            var httpConfig = {
                "method": "GET",
                "url": "login/service/login-response.json",
                "params": null
            };

            if (password != 'wrong') {
                return $http(httpConfig).then(
                    function (response) {
                        userService.setUser(response.data);
                        $timeout(
                            function () {
                                me.isLoading = false;
                                defered.resolve(response);
                            }, 500);
                        return promise;
                    },
                    function (response) {
                        $log.error("loginService.login error")
                    }
                );
            } else {
                me.isLoading = false;
                defered.reject(responseFailure);
                return promise;
            }

        };


        // dummy login with $q promise
        this.dummyLoginWithQPromise = function (username, password) {
            me.isLoading = true;
            var defered = $q.defer();
            var promise = defered.promise;

            $timeout(function () {
                me.isLoading = false;
                if (username && password != 'blabla') {
                    defered.resolve(responseSuccess);
                    userService.setUser(responseSuccess.data);
                } else {
                    defered.reject(responseFailure)
                }
            }, 1000);

            return promise;
        };

    }
})();