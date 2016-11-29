
// app.ui.form.ctrls
// ====================================================================
// This file should included in your project.
//
// - Squaredesigns.net -


"use strict";
angular.module("app.ui.form.ctrls", ["lazyModel"])

/***********************************
 :: lazyModel Ctrl 
 ***********************************/

.controller("lazyModelCtrl", function($scope) {
  $scope.user = {
    name: "Square Design"
  };
})

/***********************************
 :: Tags Demo Ctrl 
 ***********************************/

.controller("TagsDemoCtrl", [
  "$scope", function($scope) {
    return $scope.tags = ["Tag1", "Tag2"];
  }
])

/***********************************
 :: Datepicker Demo Ctrl 
 ***********************************/

.controller("DatepickerDemoCtrl", [
  "$scope", function($scope) {
    $scope.today = function() {
      return $scope.dt = new Date();
    };
    $scope.today();
    $scope.showWeeks = true;
    $scope.toggleWeeks = function() {
      return $scope.showWeeks = !$scope.showWeeks;
    };
    $scope.clear = function() {
      return $scope.dt = null;
    };
    $scope.disabled = function(date, mode) {
      return mode === "day" && (date.getDay() === 0 || date.getDay() === 6);
    };
    $scope.toggleMin = function() {
      var _ref;
      _ref = void 0;
      return $scope.minDate = ((_ref = $scope.minDate) != null ? _ref : {
        "null": new Date()
      });
    };
    $scope.toggleMin();
    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      return $scope.opened = true;
    };
    $scope.dateOptions = {
      "year-format": "'yy'",
      "starting-day": 1
    };
    $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "shortDate"];
    return $scope.format = $scope.formats[0];
  }
])

/***********************************
 :: Timepicker Demo Ctrl 
 ***********************************/

.controller("TimepickerDemoCtrl", [
  "$scope", function($scope) {
    $scope.mytime = new Date();
    $scope.hstep = 1;
    $scope.mstep = 15;
    $scope.options = {
      hstep: [1, 2, 3, 4, 5],
      mstep: [1, 5, 10, 15, 25, 30]
    };
    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      return $scope.ismeridian = !$scope.ismeridian;
    };
    $scope.update = function() {
      var d;
      d = void 0;
      d = new Date();
      d.setHours(14);
      d.setMinutes(0);
      return $scope.mytime = d;
    };
    $scope.changed = function() {
      return console.log("Time changed to: " + $scope.mytime);
    };
    return $scope.clear = function() {
      return $scope.mytime = null;
    };
  }
])

/***********************************
 :: Typeahead Ctrl 
 ***********************************/
 
.controller("TypeaheadCtrl", [
  "$scope", function($scope) {
    $scope.selected = void 0;
    return $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  }
])

/***********************************
 :: RatingDemo Ctrl
 ***********************************/

.controller("RatingDemoCtrl", [
  "$scope", function($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;
    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };
    return $scope.ratingStates = [
      {
        stateOn: "glyphicon-ok-sign",
        stateOff: "glyphicon-ok-circle"
      }, {
        stateOn: "glyphicon-star",
        stateOff: "glyphicon-star-empty"
      }, {
        stateOn: "glyphicon-heart",
        stateOff: "glyphicon-ban-circle"
      }, {
        stateOn: "glyphicon-heart"
      }, {
        stateOff: "glyphicon-off"
      }
    ];
  }
]);