'use strict';

(function () {
    angular.module("myDirectives")
        .directive("bubble", bubble);

    bubble.$inject = [];
    function bubble() {
        return {
            restrict: 'E',
            template: '<ul id="bubbles" class="bubbles"><li></li><li></li><li></li><li></li> <li></li></ul>',
            link: function (scope, element, attrs) {
                var bubbleStyle = '<style type="text/css">'
                    +'.bubbles {position: absolute;left:;bottom: 0;width:100%;height:1000px;z-index: 0; overflow-y:hidden;overflow-x: hidden; -webkit-transform: translateZ(0);}.bubbles li {position: absolute;list-style: none;display: block;background-color: rgba(71, 71, 71, 0.15);bottom: -100px; -webkit-animation: square 15s infinite;animation: square 15s infinite; -webkit-transition-timing-function: linear;transition-timing-function: linear;}.bubbles li:nth-child(1) {width: 40px;height: 40px;left: 15%;}.bubbles li:nth-child(2) {width: 60px;height: 60px;left: 20%; -webkit-animation-delay: 2s;animation-delay: 2s; -webkit-animation-duration: 17s;animation-duration: 17s;}.bubbles li:nth-child(3) {width: 30px;height: 30px;left: 70%; -webkit-animation-delay: 4s;animation-delay: 4s; -webkit-animation-duration: 13s;animation-duration: 13s;}.bubbles li:nth-child(4) {width: 70px;height: 70px;left: 75%; -webkit-animation-delay: 1s;animation-delay: 1s; -webkit-animation-duration: 22s;animation-duration: 22s;}.bubbles li:nth-child(5) {width: 50px;height: 50px;left: 85%; -webkit-animation-delay: 7s;animation-delay: 7s; -webkit-animation-duration: 12s;animation-duration: 12s;}@-webkit-keyframes square{0% { -webkit-transform: translateY(0);transform: translateY(0);}100% { -webkit-transform: translateY(-1080px) rotate(-630deg);transform: translateY(-1080px) rotate(-630deg);}}@keyframes square {0% { -webkit-transform: translateY(0);transform: translateY(0);}100% { -webkit-transform: translateY(-1080px) rotate(-630deg);transform: translateY(-1080px) rotate(-630deg);}}'+
                    '</style>';
                angular.element(document).find("head").prepend(bubbleStyle);
                var bubblesDisabled = false;
                scope.$on('$stateChangeStart',
                    function (event, to, toParams, from) {
                        if (to.name!=='login') {
                            angular.element(document.getElementById('bubbles')).remove();
                            bubblesDisabled = true;
                        }
                    }
                )
            }
        }
    }
})();


/* //bubble animation style start >>>>>>>>>>>>>>>>>>>>>>>
body {
    overflow-y: hidden;
    overflow-x: hidden;
}

.bubbles {
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    z-index: 0;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.bubbles li {
    position: absolute;
    list-style: none;
    display: block;
    background-color: rgba(71, 71, 71, 0.15);
    bottom: -100px;
    -webkit-animation: square 15s infinite;
    animation: square 15s infinite;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
}

.bubbles li:nth-child(1) {
    width: 40px;
    height: 40px;
    left: 15%;
}
.bubbles li:nth-child(2) {
    width: 60px;
    height: 60px;
    left: 20%;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 17s;
    animation-duration: 17s;
}

.bubbles li:nth-child(3) {
    width: 30px;
    height: 30px;
    left: 70%;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
    -webkit-animation-duration: 13s;
    animation-duration: 13s;
}

.bubbles li:nth-child(4) {
    width: 70px;
    height: 70px;
    left: 75%;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    -webkit-animation-duration: 22s;
    animation-duration: 22s;
}

.bubbles li:nth-child(5) {
    width: 50px;
    height: 50px;
    left: 85%;
    -webkit-animation-delay: 7s;
    animation-delay: 7s;
    -webkit-animation-duration: 12s;
    animation-duration: 12s;
}

@-webkit-keyframes square{
    0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
    100% {
    -webkit-transform: translateY(-1080px) rotate(-630deg);
    transform: translateY(-1080px) rotate(-630deg);
}
}

@keyframes square {
    0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
    100% {
    -webkit-transform: translateY(-1080px) rotate(-630deg);
    transform: translateY(-1080px) rotate(-630deg);
}
}

*/