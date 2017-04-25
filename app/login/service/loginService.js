(function () {
    angular.module('myApp')
        .service('loginService', loginService);

    loginService.$inject = ['$timeout', 'userService', '$q'];

    function loginService($timeout, userService, $q) {
        var me = this;
        this.isLoading = false;

        /////// dummy response data start /////////
        var responseSuccess = {
            data: {
                userId: 1,
                username: "musteruser",
                token: "TOKEN546566",
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

        this.login = function (username, password) {
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

        //
        // this.login = function (username, password) {
        //     me.isLoading = true;
        //     return $timeout(
        //         function () {
        //                 console.log(username, password);
        //
        //         }, 3000)
        //         .then(
        //             function () {
        //                 me.isLoading = false;
        //                 me.response = {
        //                     userId: 1,
        //                     username: "maxmuster",
        //                     token: "TOKEN546566",
        //                     firstname: "Max",
        //                     lastname: "Mustermann",
        //                     path: "/start"
        //                 };
        //                 userService.setUser(me.response);
        //             },
        //             function () {
        //                 me.isLoading = false;
        //                 console.log("reject")
        //             }
        //         )
        // }


    }
})();