(function () {
    angular.module('myApp')
        .service('loginService', loginService);

    loginService.$inject = ['$timeout', 'userService'];

    function loginService($timeout, userService) {
        var me = this;
        this.isLoading = false;

        this.login = function (username, password) {
            me.isLoading = true;
            return $timeout(
                function () {
                }, 3000)
                .then(
                    function () {
                        me.isLoading = false;
                        me.response = {
                            username:"maxmuster",
                            userId: 1,
                            token:"TOKEN546566",
                            firstname:"Max",
                            lastname: "Mustermann",
                            path:"/start"
                        };
                        userService.setUser(me.response);
                    },
                    function () {
                        me.isLoading = false;
                    }
                )
        }
    }
})();