'use strict';

(function () {
    angular.module('myApp')
        .controller('clientCreateController', clientCreateController);

    clientCreateController.$inject = [
        '$scope',
        'clientCreateService',
        'clientUpdateService',
        'exchangeService'
    ];
    function clientCreateController($scope,
                                    clientCreateService,
                                    clientUpdateService,
                                    exchangeService) {

        $scope.clientLoadingServiceArr = [];
        $scope.clientLoadingServiceArr.push(clientCreateService, clientUpdateService);

        var storedClient = exchangeService.getEditMode() ? exchangeService.getExchangeObject() : {};

        $scope.editClient = {};

        if (storedClient.id) {
            $scope.editClient.id = storedClient.id || "";
            $scope.editClient.firstname = storedClient.firstname || "";
            $scope.editClient.lastname = storedClient.lastname || "";
            $scope.editClient.email = storedClient.email || "";
        }

        $scope.onSaveClick = function () {
            var newClientData = {};
            if (storedClient.id) {
                clientUpdateService.update()
            } else {
                clientCreateService.create()
            }

        }

    }
})();