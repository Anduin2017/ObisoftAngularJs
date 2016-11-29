"use strict";
angular.module("app.controllers", ['angular-loading-bar', 'ngTable'])
.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}])
.controller("AppCtrl", [
"$scope", "$rootScope", "basicApiService",
function ($scope, $rootScope, basicApiService) {
    var $window;
    $window = $(window);
    $scope.main = {
        brand: "AdminPro",
        name: "P Square Design"
    };
    $scope.admin = {
        layout: false,
        menu: false,
        fixedHeader: true,
        fixedSidebar: true,
        themeID: "26",
        navbarHeaderColor: 'bg-danger',
        logo: 'bg-danger',
        logoPath: 'images/logo_icon.png',
        asideColor: 'bg-dark'
    };
    $scope.color = {
        primary: "#248AAF",
        success: "#3CBC8D",
        info: "#29B7D3",
        purple: "#7266ba",
        warning: "#FAC552",
        danger: "#E9422E"
    };
    $scope.initWaves = function () {
        Waves.displayEffect();
    };
}])
.controller("HeaderCtrl", [
"$scope", "$location", "userInfo", "basicApiService",
function ($scope, $location, userInfo, basicApiService) {
    $scope.userInfo = userInfo;
    $scope.SignOut = function () {
        basicApiService.logoff()
        .success(function (data) {
            if (data.StatusCode == 200) {
                $location.path('pages/signin');
            }
            else {
                $location.path('pages/500');
            }
        }).error(function (data) {
            $location.path('pages/500');
        });
    };
}])
.factory("userInfo", ["$location", "basicApiService",
function ($location, basicApiService) {
    var userInfo = {
        userNick: 'Loading..',
        userIcon: 'https://obisoft.oss-cn-beijing.aliyuncs.com/WebSiteIcon/Icon.jpg',
        refreshUsername: function () {
            basicApiService.getloginstatus().success(function (data) {
                if (data.Value == true) {
                    basicApiService.currentUser().success(function (data) {
                        userInfo.userNick = data.Object.NickName;
                        userInfo.userIcon = data.Object.IconImage;
                    });
                }
                else {
                    $location.path('pages/signin');
                }
            }).error(function (data) {
                $location.path('pages/500');
            });
        }
    };
    return userInfo;
}]).factory('ArgService', function () {
    var savedData = {}
    function set(data) {
        savedData = data;
    }
    function get() {
        return savedData;
    }
    return {
        types: [
         { num: '', des: 'All' },
         { num: 2, des: 'Work' },
         { num: 3, des: 'Organization' },
         { num: 4, des: 'Family' },
         { num: 5, des: 'Private' },
         { num: 6, des: 'Classmates' },
         { num: 1, des: 'Others' }
        ],
        set: set,
        get: get
    }
});
