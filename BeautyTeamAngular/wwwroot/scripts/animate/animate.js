/***********************************
 :: Angular Animate 
 ***********************************/
"use strict";
angular.module("angular-animate", [])

.directive("animatectrl", [
    function() {
        return {
            restrict: 'A',
            link: function(scope, element) {
                element.click(function() {
                    var animate = $(this).attr("data-animated");
                    $(this).closest('.panel').addClass(animate).delay(1000).queue(function(next) {
                        $(this).removeClass(animate);
                        next();
                    })
                })
            }
        }
    }
])