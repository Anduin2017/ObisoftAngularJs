"use strict";
angular.module("app.directives", [])
.directive("imgHolder", [
function () {
    return {
        restrict: "A",
        link: function (scope, ele, attrs) {
            return Holder.run({
                images: ele[0]
            });
        }
    };
}])
.directive("panelToggle", [
function () {
    return {
        restrict: "A",
        link: function (scope, element) {
            element.click(function () {
                $(this).parent().parent().next().slideToggle("fast"), $(this).toggleClass("fa-chevron-down fa-chevron-up")
            });
        }
    };
}])
.directive("widgetClose", [
function () {
    return {
        restrict: "A",
        link: function (scope, element) {
            element.click(function () {
                $(this).parent().parent().parent().fadeOut();
            });
        }
    };
}])
.directive("toggleProfile", [
function () {
    return {
        restrict: 'A',
        controller: function ($scope, $element, $window) {
            $scope.toggleProfile = function () {
                $window.scrollTo(0, 0);
                $('#settings').slideToggle('fast');
            };
        }
    };
}])
.directive("customPage", function () {
    return {
        restrict: "A",
        controller: [
        "$scope", "$element", "$location", function ($scope, $element, $location) {
            var addBg, path;
            path = function () {
                return $location.path();
            };
            addBg = function (path) {
                $element.removeClass("body-wide body-lock");
                switch (path) {
                    case "/404":
                    case "/pages/404":
                    case "/pages/500":
                    case "/pages/signin":
                    case "/pages/signup":
                    case "/pages/forgot-password":
                        return $element.addClass("body-wide");
                    case "/pages/lock-screen":
                        return $element.addClass("body-wide body-lock");
                }
            };
            addBg($location.path());
            return $scope.$watch(path, function (newVal, oldVal) {
                if (newVal === oldVal) {
                    return;
                }
                return addBg($location.path());
            });
        }
        ]
    };
}).directive("rightSidebar", [
function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.click(function () {
                if ($(this).hasClass('open')) {
                    $('.rsidebar').animate({
                        "right": "-250px"
                    }, 150);
                    $(this).removeClass('open').addClass('closed');
                } else {
                    $(".rsidebar").animate({
                        "right": "0px"
                    }, 150);
                    $(this).removeClass('closed').addClass('open');
                }
            });
        }
    }
}])
.directive("toggleSettings", [
function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.click(function () {
                if ($(this).hasClass('open')) {
                    $('#config').animate({
                        "right": "-300px"
                    }, 150);
                    $(this).removeClass('open').addClass('closed');
                } else {
                    $("#config").animate({
                        "right": "0px"
                    }, 150);
                    $(this).removeClass('closed').addClass('open');
                }
            });
        }
    }
}])
.directive("skycon", [
function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var skycons = new Skycons({
                'color': (attrs.color || '#ffffff')
            });
            skycons.add("icon1", Skycons.CLEAR_DAY);
            skycons.add("icon2", Skycons.PARTLY_CLOUDY_NIGHT);
            skycons.play()
        }
    }
}]);
