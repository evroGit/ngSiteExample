'use strict';

(function () {
    angular.module('myApp')
        .service('utilService', utilService);

    utilService.$inject = [];
    function utilService() {

        this.getHttpConfigObject = function () {
            var httpConfig = {
                "url": "localhost/",
                "method": "GET",
                "params": null
            };
            return httpConfig;
        };

        this.getBrowserAgent = function () {
            return util;
        };

        this.isNumber = function (n) {
            return !isNaN(parseFloat(n));
        };

        this.isPositiveInteger = function (n) {
            return ($scope.isNumber(n) && (parseFloat(n) > 0) && (parseFloat(n) % 1 == 0));
        };

        this.isObjectEmpty = function (object) {
            for (var i in object) if (object.hasOwnProperty(i)) return false;
            return true;
        };

        this.isExplorerOrEdge = function () {
            var ua = window.navigator.userAgent;
            // IE 10 ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
            // IE 11 ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
            // Edge 12 (Spartan) ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
            // Edge 13 ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
            var msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                return true;
            }
            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                return true;
            }
            var edge = ua.indexOf('Edge/');
            if (edge > 0) {
                return true;
            }
            // other browser
            return false;
        }
    }

}());