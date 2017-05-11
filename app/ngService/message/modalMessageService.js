'use strict';

// modalMessageService requires messageDirective
(function () {
    angular.module('myApp')
        .service('modalMessageService', modalMessageService);

    modalMessageService.$inject = ['$uibModal'];

    function modalMessageService($uibModal) {

        this.showModalMessage = function (title, body, footer, time, bodyStyle) {
            var modal = $uibModal.open({
                // template: '<modal-message-frame modal-title="{{title}}" modal-body="{{body}}" modal-ok="ok()"></modal-message-frame>',
                controller: ['$scope', '$uibModalInstance', '$timeout', function ($scope, $uibModalInstance, $timeout) {
                    $scope.title = title;
                    $scope.body = body;
                    $scope.footer = footer;
                    $scope.bodyStyle = bodyStyle;
                    $scope.ok = function () {
                        $uibModalInstance.close();
                    };
                    if (time) {
                        $timeout(function () {
                            $uibModalInstance.close();
                        }, time)
                    }
                }],
                template: [
                    '<div class="modal-header" ng-if="title!==null">',
                        '<h3 class="modal-title">',
                            '<span>{{title}}</span>',
                        '</h3>',
                    '</div>',
                    '<div class="modal-body {{bodyStyle}}">',
                        '<label>{{body}}</label>',
                    '</div>',
                    '<div class="modal-footer" ng-if="footer!==null">',
                        '<button class="btn btn-primary" ng-click="ok()">',
                            '<span translate="page.OK"></span>',
                        '</button>',
                        // '<button class="btn btn-warning" ng-click="cancel()">',
                        //     '<span translate="page.CANCEL"></span>',
                        // '</button>',
                    '</div>'].join("")
            });
            modal.result.then(
                function () {},
                function () {}
            );
        };

        var disappearTime = 700;

        this.showDisappearModalMessage = function (title, body) {
            this.showModalMessage(title, body, "", disappearTime)
        };

        this.showSuccessModalMessage = function () {
            this.showModalMessage("Erfolgreich", "", "", disappearTime, 'successMessage')
        };

        this.showErrorModalMessage = function (title, body, footer) {
            this.showModalMessage("Error: " + title + "!", body, footer)
        }
    }
})();

//
// (function () {
//         angular.module("myDirectives")
//             .directive("modalMessageFrame", modalMessageFrame);
//
//         function modalMessageFrame() {
//             return {
//                 restrict: "E",
//                 scope: {
//                     title: "@modalTitle",
//                     body:  "@modalBody",
//                     ok: "&modalOk"
//                 },
//                 template: [
//                     '<div class="modal-header">',
//                         '<h3 class="modal-title">',
//                             '<span>{{title}}</span>',
//                         '</h3>',
//                     '</div>',
//                     '<div class="modal-body">',
//                         '<label>{{body}}</label>',
//                     '</div>',
//                     '<div class="modal-footer">',
//                         '<button class="btn btn-primary" ng-click="ok()">',
//                             '<span translate="page.OK"></span>',
//                         '</button>',
//                         // '<button class="btn btn-warning" ng-click="cancel()">',
//                         //     '<span translate="page.CANCEL"></span>',
//                         // '</button>',
//                     '</div>'].join("")
//             }
//         }
//     }
// )();