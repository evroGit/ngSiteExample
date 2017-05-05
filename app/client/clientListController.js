'use strict';

(function () {
    angular.module('myApp')
        .controller('clientListController', clientListController);

    clientListController.$inject = [
        '$scope',
        'exchangeService',
        '$state',
        'clientListService'
    ];
    function clientListController($scope,
                                  exchangeService,
                                  $state,
                                  clientListService) {

        $scope.clientListLoadingArr = [];
        $scope.clientListLoadingArr.push(clientListService);
        $scope.placeholder = "page.SEARCH";

        $scope.clientListArr = [];
        clientListService.getList()
            .then(function (response) {
                $scope.clientListArr = response.data.data;
            });

        $scope.onEditClick = function (client) {
            exchangeService.setEditMode(true);
            exchangeService.setExchangeObject(client);
            $state.go("app.clientEdit");
        };

        $scope.onDeleteClick = function (client, index) {
            $scope.clientListArr.splice(index,1);
        };


    }
})();