// Gallery App
// ====================================================================
// This file should included in your project.
//
// - Squaredesigns.net -

var App = angular.module('galleryApp', []);

/***********************************
  :: Gallery Ctrl
 ***********************************/

App.controller('galleryCtrl', function galleryCtrl($scope) {
    $scope.list1 = [{
        'src': 'images/gallery/image1.png',
        'name': 'IMG_001.jpg'
    }, {
        'src': 'images/gallery/image2.png',
        'name': 'IMG_002.jpg'
    }, {
        'src': 'images/gallery/image3.png',
        'name': 'IMG_003.jpg'
    }, {
        'src': 'images/gallery/image4.png',
        'name': 'IMG_004.jpg'
    }, {
        'src': 'images/gallery/image5.png',
        'name': 'IMG_005.jpg'
    }, {
        'src': 'images/gallery/image1.png',
        'name': 'IMG_006.jpg'
    }, {
        'src': 'images/gallery/image2.png',
        'name': 'IMG_007.jpg'
    }, {
        'src': 'images/gallery/image3.png',
        'name': 'IMG_008.jpg'
    }, {
        'src': 'images/gallery/image4.png',
        'name': 'IMG_009.jpg'
    }, {
        'src': 'images/gallery/image5.png',
        'name': 'IMG_0010.jpg'
    }, {
        'src': 'images/gallery/image1.png',
        'name': 'IMG_0011.jpg'
    }, {
        'src': 'images/gallery/image1.png',
        'name': 'IMG_0012.jpg'
    }, {
        'src': 'images/gallery/image1.png',
        'name': 'IMG_0013.jpg'
    }, {
        'src': 'images/gallery/image1.png',
        'name': 'IMG_0014.jpg'
    }, {
        'src': 'images/gallery/image1.png',
        'name': 'IMG_0015.jpg'
    }, {
        'src': 'images/gallery/image1.png',
        'name': 'IMG_0016.jpg'
    }, {
        'src': 'images/gallery/image1.png',
        'name': 'IMG_0017.jpg'
    }, {
        'src': 'images/gallery/image1.png',
        'name': 'IMG_0018.jpg'
    }, {
        'src': 'images/gallery/image1.png',
        'name': 'IMG_0019.jpg'
    }, {
        'src': 'images/gallery/image1.png',
        'name': 'IMG_0020.jpg'
    }];

    $scope.checkAll = function() {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.list1, function(item) {
            item.Selected = $scope.selectedAll;
        });

    };

});