'use strict';

(function () {
    angular.module('myApp')
        .service('exchangeService', exchangeService);

    exchangeService.$inject = [];
    function exchangeService() {
        var exchangeObject = {};
        var isEditMode = false;

        this.setExchangeObject = function (exchangeObj) {
            exchangeObject = exchangeObj;
        };

        this.getExchangeObject = function () {
            isEditMode = false; //reset EditMode-Flag
            return exchangeObject;
        };

        this.getEditMode = function () {
            return isEditMode;
        };

        this.setEditMode = function (editMode) {
            isEditMode = editMode|| false;
            return isEditMode;
        }
    }

}());