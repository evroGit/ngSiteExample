'use strict';

(function () {
    angular.module('myApp')
        .service('userService', userService);

    userService.$inject = [];
    function userService () {
        var me = this;

        var user = {
            username:"",
            userId:"",
            firstname:"",
            lastname:"",
            token:""
        };

        this.setUser = function(userObj) {
            for (var key in userObj) {
                if (userObj.hasOwnProperty(key) && user.hasOwnProperty(key)){
                    user[key] = userObj[key];
                }
            }
        };

        this.getUser = function() {
            return user;
        }

        this.isLoggedIn = function (){
            return !!(me.getUser().userId && me.getUser().token);
        }
    }

}());