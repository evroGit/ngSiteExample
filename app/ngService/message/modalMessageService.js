'use strict';

// modalMessageService requires messageDirective
(function () {
    angular.module('myApp')
        .service('modalMessageService', modalMessageService);

    modalMessageService.$inject = ['$uibModal'];

    function modalMessageService($uibModal) {

        this.showModalMessage = function (title, body, footer, time, propObject) {
            var modal = $uibModal.open({
                // backdrop  : 'static',
                // keyboard  : false,
                size: propObject?propObject.size:'sm',
                controller: ['$scope', '$uibModalInstance', '$timeout', function ($scope, $uibModalInstance, $timeout) {
                    $scope.title = title;
                    $scope.body = body;
                    $scope.footer = footer;
                    $scope.properties = {
                        styleBody:"",
                        styleHeader:"",
                        styleFooter:"",
                        buttonTextOk:"page.OK",
                        buttonTextCanel:"page.CANCEL"
                    };
                    if (propObject && typeof propObject == 'object' ) {
                        var key;
                        for (key in propObject) {
                            if (propObject.hasOwnProperty(key)&& $scope.properties.hasOwnProperty(key)) {
                                $scope.properties[key] = propObject[key]
                            }
                        }
                    }
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
                    '<div class="modal-header {{properties.styleHeader}}" ng-if="title!==null">',
                        '<h3 class="modal-title">',
                            '<span translate="{{title}}"></span>',
                        '</h3>',
                    '</div>',
                    '<div class="modal-body {{properties.styleBody}}">',
                        '<label>{{body}}</label>',
                    '</div>',
                    '<div class="modal-footer {{properties.styleFooter}}" ng-if="footer!==null">',
                        '<button class="btn btn-primary" ng-click="ok()">',
                            '<span translate="{{properties.buttonTextOk}}"></span>',
                        '</button>',
                        // '<button class="btn btn-warning" ng-click="cancel()">',
                        //     '<span translate="{{properties.buttonTextCanel}}"></span>',
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
            var propObj = {styleBody:'successMessage', styleHeader:"text-center", size:"sm"};
            this.showModalMessage("page.SUCCESS", "", null, disappearTime, propObj)
        };

        this.showErrorModalMessage = function (title, body, footer) {
            this.showModalMessage("page.ERROR" + title, body, footer)
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