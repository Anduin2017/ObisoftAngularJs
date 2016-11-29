"use strict";
angular.module("app.ui.directives", [])
.directive("uiNotCloseOnClick", [
   function () {
       return {
           restrict: "A",
           compile: function (ele) {
               return ele.on("click", function (event) {
                   return event.stopPropagation()
               })
           }
       }
   }
])
;//.directive("slimScroll", [
//  function() {
//    return {
//      restrict: "A",
//      link: function(scope, ele, attrs) {
//        return ele.slimScroll({
//          height: attrs.scrollHeight || "100%"
//        });
//      }
//    };
//  }
//]);