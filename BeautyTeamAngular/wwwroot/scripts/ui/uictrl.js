"use strict";
angular.module("app.ui.ctrls", [])

.controller("starrating", function($scope) {
  $scope.toggleClass = function($event, className) {
    className = className || "is-open";
    $($event.target).toggleClass(className);
  };
})

.controller("AlertDemoCtrl", [
  "$scope", function($scope) {
    $scope.alerts = [
      {
        type: "success",
        msg: "Well done! You successfully read this important alert message."
      }, {
        type: "info",
        msg: "Heads up! This alert needs your attention, but it is not super important."
      }, {
        type: "warning",
        msg: "Warning! Best check yo self, you're not looking too good."
      }, {
        type: "danger",
        msg: "Oh snap! Change a few things up and try submitting again."
      }
    ];
    $scope.addAlert = function() {
      var num, type;
      num = Math.ceil(Math.random() * 4);
      switch (num) {
        case 0:
          type = "info";
          break;
        case 1:
          type = "success";
          break;
        case 2:
          type = "info";
          break;
        case 3:
          type = "warning";
          break;
        case 4:
          type = "danger";
      }
      return $scope.alerts.push({
        type: type,
        msg: "Another alert!"
      });
    };
    return $scope.closeAlert = function(index) {
      return $scope.alerts.splice(index, 1);
    };
  }
])

.controller("ProgressDemoCtrl", [
  "$scope", function($scope) {
    $scope.max = 200;
    $scope.random = function() {
      var type, value;
      value = Math.floor((Math.random() * 100) + 10);
      if (value < 25) {
        type = "success";
      } else if (value < 50) {
        type = "info";
      } else if (value < 75) {
        type = "warning";
      } else {
        type = "danger";
      }
      $scope.showWarning = type === "danger" || type === "warning";
      $scope.dynamic = value;
      $scope.type = type;
    };
    return $scope.random();
  }
])

.controller("AccordionDemoCtrl", [
  "$scope", function($scope) {
    $scope.oneAtATime = true;
    $scope.groups = [
      {
        title: "Dynamic Group Header - 1",
        content: "Dynamic Group Body - 1"
      }, {
        title: "Dynamic Group Header - 2",
        content: "Dynamic Group Body - 2"
      }, {
        title: "Dynamic Group Header - 3",
        content: "Dynamic Group Body - 3"
      }
    ];
    $scope.items = ["Item 1", "Item 2", "Item 3"];
    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
    return $scope.addItem = function() {
      var newItemNo;
      newItemNo = $scope.items.length + 1;
      $scope.items.push("Item " + newItemNo);
    };
  }
])

.controller("CollapseDemoCtrl", [
  "$scope", function($scope) {
    return $scope.isCollapsed = false;
  }
])

.controller("ModalDemoCtrl", [
  "$scope", "$modal", "$log", function($scope, $modal, $log) {
    $scope.items = ["item1", "item2", "item3"];
    return $scope.open = function() {
      var modalInstance;
      modalInstance = $modal.open({
        templateUrl: "myModalContent.html",
        controller: "ModalInstanceCtrl",
        resolve: {
          items: function() {
            return $scope.items;
          }
        }
      });
      modalInstance.result.then((function(selectedItem) {
        $scope.selected = selectedItem;
      }), function() {
        $log.info("Modal dismissed at: " + new Date());
      });
    };
  }
])

.controller("ModalInstanceCtrl", [
  "$scope", "$modalInstance", "items", function($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };
    $scope.ok = function() {
      $modalInstance.close($scope.selected.item);
    };
    return $scope.cancel = function() {
      $modalInstance.dismiss("cancel");
    };
  }
])

.controller("PaginationDemoCtrl", [
  "$scope", function($scope) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;
    $scope.setPage = function(pageNo) {
      return $scope.currentPage = pageNo;
    };
    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    return $scope.bigCurrentPage = 1;
  }
])
.controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];
})
.controller("TreeDemoCtrl", [
  "$scope", function($scope) {
    $scope.list = [
      {
        id: 1,
        title: "Item 1",
        items: []
      }, {
        id: 2,
        title: "Item 2",
        items: [
          {
            id: 21,
            title: "Item 2.1",
            items: [
              {
                id: 211,
                title: "Item 2.1.1",
                items: []
              }, {
                id: 212,
                title: "Item 2.1.2",
                items: []
              }
            ]
          }, {
            id: 22,
            title: "Item 2.2",
            items: [
              {
                id: 221,
                title: "Item 2.2.1",
                items: []
              }, {
                id: 222,
                title: "Item 2.2.2",
                items: []
              }
            ]
          }
        ]
      }, {
        id: 3,
        title: "Item 3",
        items: []
      }, {
        id: 4,
        title: "Item 4",
        items: [
          {
            id: 41,
            title: "Item 4.1",
            items: []
          }
        ]
      }
    ];
    $scope.selectedItem = {};
    $scope.options = {};
    $scope.remove = function(scope) {
      scope.remove();
    };
    $scope.toggle = function(scope) {
      scope.toggle();
    };
    return $scope.newSubItem = function(scope) {
      var nodeData;
      nodeData = scope.$modelValue;
      nodeData.items.push({
        id: nodeData.id * 10 + nodeData.items.length,
        title: nodeData.title + "." + (nodeData.items.length + 1),
        items: []
      });
    };
  }
])

.controller("MapDemoCtrl", [
  "$scope", "$http", "$interval", function($scope, $http, $interval) {
    var i, markers;
    markers = [];
    i = 0;
    while (i < 8) {
      markers[i] = new google.maps.Marker({
        title: "Marker: " + i
      });
      i++;
    }
    $scope.GenerateMapMarkers = function() {
      var d, lat, lng, loc, numMarkers;
      d = new Date();
      $scope.date = d.toLocaleString();
      numMarkers = Math.floor(Math.random() * 4) + 4;
      i = 0;
      while (i < numMarkers) {
        lat = 43.6600000 + (Math.random() / 100);
        lng = -79.4103000 + (Math.random() / 100);
        loc = new google.maps.LatLng(lat, lng);
        markers[i].setPosition(loc);
        markers[i].setMap($scope.map);
        i++;
      }
    };
    return $interval($scope.GenerateMapMarkers, 2000);
  }
])


.controller("invoiceCtrl", [
  "$scope", "$window", function($scope, $window) {
    return $scope.printInvoice = function() {
      var originalContents, popupWin, printContents;
      originalContents = void 0;
      popupWin = void 0;
      printContents = void 0;
      printContents = document.getElementById("invoice").innerHTML;
      originalContents = document.body.innerHTML;
      popupWin = window.open();
      popupWin.document.open();
      popupWin.document.write("<html><head><link rel=\"stylesheet\" type=\"text/css\" href=\"styles/main.css\" /><link rel=\"stylesheet\" type=\"text/css\" href=\"styles/bootstrap.css\" /></head><body onload=\"window.print()\">" + printContents + "</html>");
      return popupWin.document.close();
    };
  }
]);