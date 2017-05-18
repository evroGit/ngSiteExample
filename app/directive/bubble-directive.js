'use strict';

(function () {
    angular.module("myDirectives")
        .directive("bubble", bubble);

    bubble.$inject = [];
    function bubble() {
        var DEFAULT_NUMBER = 7;
        return {
            restrict: 'E',
            template: function (tElem, tAttrs) {
                var templateStr = '<ul id="bubbles" class="bubbles">';
                var defaultBubbleNumber = DEFAULT_NUMBER;
                if (tAttrs.number) { defaultBubbleNumber = (parseInt(tAttrs.number)) ? parseInt(tAttrs.number) : DEFAULT_NUMBER; }
                for (var i = 0; i < defaultBubbleNumber; i++) {
                    templateStr += '<li></li>';
                }
                templateStr += '</ul>';
                return templateStr;
            },
            link: function (scope, element, attrs) {
                // utility functions
                var getRandomInt = function (min, max) { return Math.floor((Math.random() * (max - min + 1)) + min) };
                var defineAttribute =  function (attrNameStr, defaultValue) {
                    if (attrs) { return (parseInt(attrs[attrNameStr])) ? parseInt(attrs[attrNameStr]) : defaultValue; }
                };
                // define bubble attribute rounding
                var defaultBubbleNumber = defineAttribute('number', DEFAULT_NUMBER);
                // define bubble attribute rounding
                var rounding = defineAttribute('rounding', '0');
                // define attribute boxHeight
                var boxHeight = defineAttribute('boxHeight', 1100);

                var START_OPACITY = '0.25', END_OPACITY = '0.05';
                var getColor = function (color, opacity) {
                    var tmpColor =    color;
                    var tmpOpacity = (opacity) ? opacity : START_OPACITY;
                    var COLORS = {
                        "red":   '(255,0,0,' + tmpOpacity + ')',
                        "green": '(0,255,0,' + tmpOpacity + ')',
                        "blue":  '(0,0,255,' + tmpOpacity + ')',
                        "yellow":'(255,255,0,' + tmpOpacity + ')',
                        "black": '(0,0,0,'  + tmpOpacity + ')',
                        "gray":  '(80,80,80,' + tmpOpacity + ')',
                        "white": '(255,255,255,' + tmpOpacity + ')'
                    };
                    return (COLORS[tmpColor]) ? COLORS[tmpColor] : COLORS.gray;
                };
                //define bubble attribute startColor & endColor
                var startColor = (attrs.startColor)? attrs.startColor : 'gray';
                var endColor   = (attrs.endColor)  ? attrs.endColor   : 'gray';
                var BUBBLE_COLOR_START = getColor(startColor, START_OPACITY),
                    BUBBLE_COLOR_END   = getColor(endColor, END_OPACITY);

                //define values range
                var bubbleOffset = 10, bubbleSize = 30, bubbleDelay = 1, bubbleDuration = 15;
                var MIN_SIZE = 20, MAX_SIZE = 80,  MIN_OFFSET = 5,   MAX_OFFSET = 95,
                    MIN_DELAY = 0, MAX_DELAY = 10, MIN_DURATION = 10, MAX_DURATION = 15;

                var bubbleChildren = "";
                for (var bubbleNr = 1; bubbleNr <= defaultBubbleNumber; bubbleNr++) {
                    bubbleSize = getRandomInt(MIN_SIZE, MAX_SIZE);
                    bubbleOffset = getRandomInt(MIN_OFFSET, MAX_OFFSET);
                    bubbleDelay = getRandomInt(MIN_DELAY, MAX_DELAY);
                    bubbleDuration = getRandomInt(MIN_DURATION, MAX_DURATION);
                    bubbleChildren += '.bubbles li:nth-child(' + bubbleNr + ') {' +
                        'width:' + bubbleSize + 'px;' +
                        'height:' + bubbleSize + 'px;' +
                        'border-radius:' + rounding + '%;' +
                        'left:' + bubbleOffset + '%;' +
                        '-webkit-animation-delay:' + bubbleDelay + 's; animation-delay:' + bubbleDelay + 's;' +
                        '-webkit-animation-duration:' + bubbleDuration + 's;animation-duration:' + bubbleDuration + 's;}';
                }

                var translateYheight = boxHeight + MAX_SIZE;
                var bubbleStyle = '<style type="text/css">' +
                    '.bubbles {position: absolute;left:0;bottom: 0;width:100%;height:' + boxHeight + 'px;z-index: 0; overflow-y:hidden;overflow-x: hidden; -webkit-transform: translateZ(0);}.bubbles li {position: absolute;list-style: none;display: block;background-color:rgba' + BUBBLE_COLOR_START + ';bottom: -90px; -webkit-animation: square 15s infinite;animation: square 15s infinite; -webkit-transition-timing-function: linear;transition-timing-function: linear;}' +
                    bubbleChildren +
                    '@-webkit-keyframes square{0% { -webkit-transform: translateY(0);transform: translateY(0); background-color:rgba' + BUBBLE_COLOR_START + ';}100% { -webkit-transform: translateY(-' + translateYheight + 'px) rotate(-200deg);transform: translateY(-' + translateYheight + 'px) rotate(-200deg); background-color:rgba' + BUBBLE_COLOR_END + ';}}@keyframes square {0% { -webkit-transform: translateY(0);transform: translateY(0); background-color: rgba' + BUBBLE_COLOR_START + ';}100% { -webkit-transform: translateY(-' + translateYheight + 'px) rotate(-200deg);transform: translateY(-' + translateYheight + 'px) rotate(-200deg); background-color: rgba' + BUBBLE_COLOR_END + ';}}' +
                    '</style>';

                // add bubbles styles to html head tag
                angular.element(document).find("head").prepend(bubbleStyle);
                var bubbleFn = function bubbleEvent(event, to, toParams, from) {
                    if (from.name == 'login' && to.name !== 'login') {
                        angular.element(document.getElementById('bubbles')).remove();
                    }
                };
                scope.$on('$stateChangeStart', bubbleFn);
                scope.$on('$destroy', bubbleFn);
            }
        }
    }
})();