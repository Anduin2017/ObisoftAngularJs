"use strict";
angular.module("app.nav", []).directive("toggleNavCollapsedMin", [
"$rootScope", function ($rootScope) {
    return {
        restrict: "A",
        link: function (scope, ele, attrs) {
            var app;
            app = $("#app");
            return ele.on("click", function (e) {
                if (app.hasClass("nav-collapsed-min")) {
                    app.removeClass("nav-collapsed-min");
                } else {
                    app.addClass("nav-collapsed-min");
                    $rootScope.$broadcast("nav:reset");
                }
                return e.preventDefault();
            });
        }
    };
}]).directive("collapseNav", [
function () {
    return {
        restrict: "A",
        link: function (scope, ele, attrs) {
            var $a, $aRest, $app, $lists, $listsRest, $nav, $window, prevWidth, updateClass;
            $window = $(window);
            $lists = ele.find('ul').parent('li');
            $a = $lists.children("a");
            $listsRest = ele.children("li").not($lists);
            $aRest = $listsRest.children("a");
            $app = $("#app");
            $nav = $("#nav-container");
            $a.on("click", function (event) {
                var $parent, $this;
                if ($app.hasClass("nav-collapsed-min") || ($nav.hasClass("nav-horizontal") && $window.width() >= 768)) {
                    return false;
                }
                $this = $(this);
                $parent = $this.parent("li");
                $lists.not($parent).removeClass("open").find("ul").slideUp();
                $parent.toggleClass("open").find("ul").slideToggle();
                return event.preventDefault();
            });
            $aRest.on("click", function (event) {
                return $lists.removeClass("open").find("ul").slideUp();
            });
            scope.$on("nav:reset", function (event) {
                return $lists.removeClass("open").find("ul").slideUp();
            });
            prevWidth = $window.width();
            updateClass = function () {
                var currentWidth;
                currentWidth = $window.width();
                if (currentWidth < 768) {
                    $app.removeClass("nav-collapsed-min");
                }
                if (prevWidth < 768 && currentWidth >= 768 && $nav.hasClass("nav-horizontal")) {
                    $lists.removeClass("open").find("ul").slideUp();
                }
                return prevWidth = currentWidth;
            };
            return $window.resize(function () {
                var t;
                clearTimeout(t);
                return t = setTimeout(updateClass, 300);
            });
        }
    };
}]).directive("toggleOffCanvas", [
function () {
    return {
        restrict: "A",
        link: function (scope, ele, attrs) {
            return ele.on("click", function () {
                return $("#app").toggleClass("on-canvas");
            });
        }
    };
}]);