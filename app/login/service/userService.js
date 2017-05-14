'use strict';

(function () {
    angular.module('myApp')
        .service('userService', userService);

    userService.$inject = [];
    function userService() {
        var me = this;

        var user = {
            username: "",
            userId: "",
            firstname: "",
            lastname: "",
            session: "",
            lang: "",
            isCacheOn: false
        };

        this.setUser = function (userObj) {
            for (var key in userObj) {
                if (userObj.hasOwnProperty(key) && user.hasOwnProperty(key)) {
                    user[key] = userObj[key];
                }
            }
        };

        this.removeUser = function () {
            user.username = "";
            user.userId = "";
            user.firstname = "";
            user.lastname = "";
            user.session = "";
            user.lang = "";
            user.isCacheOn = ""
        };

        this.getUser = function () {
            return user;
        };

        this.isLoggedIn = function () {
            return !!(me.getUser().userId && me.getUser().session);
        }
    }

}());