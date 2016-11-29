// NG Table Table Sorting
// ====================================================================
// This file should included in your project.
//
// - Squaredesigns.net -

(function() {
    var app;

    app = angular.module("tablesorting", ["ngTable"])

    /***********************************
     :: ngTable Ctrl
     ***********************************/

    .controller("ngTableCtrl", function($scope, $filter, ngTableParams, $sce) {
        var data;
        data = [{
            name: "Moroni",
            age: 50
        }, {
            name: "Tiancum",
            age: 43
        }, {
            name: "Jacob",
            age: 27
        }, {
            name: "Nephi",
            age: 29
        }, {
            name: "Enos",
            age: 34
        }, {
            name: "Tiancum",
            age: 43
        }, {
            name: "Jacob",
            age: 27
        }, {
            name: "Nephi",
            age: 29
        }, {
            name: "Enos",
            age: 34
        }, {
            name: "Tiancum",
            age: 43
        }, {
            name: "Jacob",
            age: 27
        }, {
            name: "Nephi",
            age: 29
        }, {
            name: "Enos",
            age: 34
        }, {
            name: "Tiancum",
            age: 43
        }, {
            name: "Jacob",
            age: 27
        }, {
            name: "Nephi",
            age: 29
        }, {
            name: "Enos",
            age: 34
        }];
        $scope.tableParams = new ngTableParams({
            page: 1,
            count: 10,
            filter: {
                name: "M"
            },
            sorting: {
                name: "asc"
            }
        }, {
            total: data.length,
            getData: function($defer, params) {
                var orderedData;
                orderedData = (params.sorting() ? $filter("orderBy")(data, params.orderBy()) : data);
                orderedData = (params.filter() ? $filter("filter")(data, params.filter()) : data);
                return $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
        $scope.editId = -1;
        $scope.setEditId = function(pid) {
            $scope.editId = pid;
        };
    });

}).call(this);