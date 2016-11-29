'use strict';
angular.module('app.notice', [])
.controller('noticeCtrl', function ($location, $scope, basicApiService) {
    var model = this;
    basicApiService.getloginstatus().success(function (data) {
        if (data.Value == true) {
            model.Hello = 'SignedIn';
        }
        else {
            $location.path('pages/signin');
        }
    }).error(function (data) {
        $location.path('pages/500');
    });
});