'use strict';

(function () {
    angular.module('myApp')
        .controller('clientListController', clientListController);

    clientListController.$inject = [
        '$scope',
        'exchangeService',
        '$state',
        'clientListService',
        'NgTableParams',
        '$log'
    ];
    function clientListController($scope,
                                  exchangeService,
                                  $state,
                                  clientListService,
                                  NgTableParams,
                                  $log) {

        $scope.clientListLoadingArr = [];
        $scope.clientListLoadingArr.push(clientListService);
        $scope.placeholder = "page.SEARCH";

        $scope.clientListArr = [];
        $scope.tableParams = new NgTableParams(
            {
                count: 7
            },
            {
                counts: [],
                //getData method should return an array or a promise that resolves to an array.
                getData: function (params) {
                    if ($scope.clientListArr.length === 0) {
                        return clientListService.getList()
                            .then(function (response) {
                                params.total(response.data.total);
                                $scope.clientListArr = response.data.data;
                                return $scope.clientListArr.slice((params.page() - 1) * params.count(), params.page() * params.count());
                            });
                    } else {
                        params.total($scope.clientListArr.length);
                        return $scope.clientListArr.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    }
                }
            }
        );

        //helper function to fake delete client
        function getClientArrayIndexForId(clientId) {
            if (clientId) {
                var i = 0;
                for (; i < $scope.clientListArr.length; i++)
                    if ($scope.clientListArr[i].id == clientId) {
                        break;
                    }
                return i;
            }
            return null;
        }

        $scope.onEditClick = function (client) {
            exchangeService.setEditMode(true);
            exchangeService.setExchangeObject(client);
            $state.go("app.clientEdit");
        };

        $scope.onDeleteClick = function (client) {
            var tmpClientIndex = getClientArrayIndexForId(client.id);
            $scope.clientListArr.splice(tmpClientIndex, 1);
            $scope.tableParams.reload();
        };


    }
})();