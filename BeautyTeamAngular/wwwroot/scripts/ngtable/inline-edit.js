// Inline Edit Table
// ====================================================================
// This file should included in your project.
//
// - Squaredesigns.net -
var app;

app = angular.module("inlineedittable", ["ngTable"])

/***********************************
 :: Inline Edit Ctrl
 ***********************************/

.controller("inlineeditCtrl", function($scope, $filter, ngTableParams) {
    var data;
    data = [{
        id: 1,
        pn: "product 1",
        ct: "Mens/Footwear",
        qt: "125",
        lm: 138661285100,
        ln: "Smith",
        fn: "John",
        dc: "2/2/2015",
        em: "$245.85",
        ph: "$245.85",
        ac: "On Hold",
        dl: false
    }, {
        id: 2,
        pn: "product 2",
        ct: "Mens/Footwear",
        qt: "200",
        lm: 138661285200,
        ln: "Taylor",
        fn: "Lisa",
        dc: "2/2/2015",
        em: "$245.85",
        ph: "$245.85",
        ac: "Processing",
        dl: false
    }, {
        id: 3,
        pn: "product 3",
        ct: "Mens/Footwear",
        qt: "350",
        lm: 138661285300,
        ln: "Jones",
        fn: "James",
        dc: "2/2/2015",
        em: "$245.85",
        ph: "$245.85",
        ac: "Cancelled",
        dl: false
    }, {
        id: 4,
        pn: "product 4",
        ct: "Mens/Footwear",
        qt: "145",
        lm: 138661285400,
        ln: "Wong",
        fn: "Paul",
        dc: "2/2/2015",
        em: "$245.85",
        ph: "$245.85",
        ac: "Pending",
        dl: false
    }, {
        id: 5,
        pn: "product 5",
        ct: "Mens/Footwear",
        qt: "450",
        lm: 138661285500,
        ln: "King",
        fn: "Alice",
        dc: "2/2/2015",
        em: "$245.85",
        ph: "$245.85",
        ac: "Dispatch",
        dl: false
    }, {
        id: 6,
        pn: "product 6",
        ct: "Mens/Footwear",
        qt: "650",
        lm: 138661285600,
        ln: "Brown",
        fn: "Jan",
        dc: "2/2/2015",
        em: "$245.85",
        ph: "$245.85",
        ac: "On Hold",
        dl: false
    }, {
        id: 7,
        pn: "product 7",
        ct: "Mens/Footwear",
        qt: "750",
        lm: 138661285700,
        ln: "Garcia",
        fn: "Ami",
        dc: "2/2/2015",
        em: "$245.85",
        ph: "$245.85",
        ac: "Processing",
        dl: false
    }, {
        id: 8,
        pn: "product 8",
        ct: "Mens/Footwear",
        qt: "856",
        lm: 138661285800,
        ln: "Green",
        fn: "Jack",
        dc: "2/2/2015",
        em: "$245.85",
        ph: "$245.85",
        ac: "Pending",
        dl: false
    }, {
        id: 9,
        pn: "product 9",
        ct: "Mens/Footwear",
        qt: "1425",
        lm: 138661285900,
        ln: "Liesen",
        fn: "Abraham",
        dc: "2/2/2015",
        em: "$245.85",
        ph: "$245.85",
        ac: "Cancelled",
        dl: false
    }, {
        id: 10,
        pn: "product 10",
        ct: "Mens/Footwear",
        qt: "2545",
        lm: 138661286000,
        ln: "Bower",
        fn: "Angela",
        dc: "2/2/2015",
        em: "$245.85",
        ph: "$245.85",
        ac: "Processing",
        dl: false
    }, {
        id: 11,
        pn: "product 11",
        ct: "Mens/Footwear",
        qt: "4515",
        lm: 138661286100,
        ln: "Davidoff",
        fn: "Fjodor",
        dc: "2/2/2015",
        em: "$245.85",
        ph: "$245.85",
        ac: "Dispatch",
        dl: false
    }, {
        id: 12,
        pn: "product 12",
        ct: "Mens/Footwear",
        qt: "5645",
        lm: 138661286200,
        ln: "Vitrovic",
        fn: "Biljana",
        dc: "2/2/2015",
        em: "$245.85",
        ph: "$245.85",
        ac: "Dispatch",
        dl: false
    }, {
        id: 13,
        pn: "product 13",
        ct: "Mens/Footwear",
        qt: "2315",
        lm: 138661286300,
        ln: "Valet",
        fn: "Guillaume",
        dc: "2/2/2015",
        em: "$245.85",
        ph: "$245.85",
        ac: "Dispatch",
        dl: false
    }, {
        id: 14,
        pn: "product 14",
        ct: "Mens/Footwear",
        qt: "2112",
        lm: 138661286400,
        ln: "Tran",
        fn: "Min",
        dc: "2/2/2015",
        em: "$245.85",
        ph: "$245.85",
        ac: "Pending",
        dl: false
    }];
    $scope.tableParams = new ngTableParams({
        page: 1,
        count: 10
    }, {
        total: data.length,
        getData: function($defer, params) {
            var orderedData;
            orderedData = (params.sorting() ? $filter("orderBy")(data, params.orderBy()) : data);
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
    $scope.editId = -1;
    $scope.setEditId = function(pid) {
        $scope.editId = pid;
    };
});