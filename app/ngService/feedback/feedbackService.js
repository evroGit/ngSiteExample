(function () {
    angular.module('myApp')
        .service('feedbackService', feedbackService);

    feedbackService.$inject = ['$uibModal'];

    function feedbackService($uibModal) {
        var me = this;

        this.openFeedback = function () {
            var modal = $uibModal.open({
                templateUrl: 'ngService/feedback/feedbackModal.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.feedback = {
                        "subject":"",
                        "body":""
                    };
                    // $scope.argsfeedback = [];
                    // $scope.argsfeedback.push(feedbackCreateService);
                    $scope.ok = function () {
                        // feedbackCreateService.feedbackCreate($scope.feedbackSubject, $scope.feedbackBody, username, rolename)
                        //     .success(function (response) {
                        //         console.log(angular.fromJson(response.zend));
                        //         $modalInstance.close()
                        //     });
                        console.log("send feedback:", $scope.feedback.body );
                        $uibModalInstance.close();
                    };

                    $scope.cancel = function () {
                        console.log("close feedback");
                        $uibModalInstance.dismiss();
                    };
                }
            });
            modal.result.then(
                function () {
                },
                function () {
                });
        };
    }
})();