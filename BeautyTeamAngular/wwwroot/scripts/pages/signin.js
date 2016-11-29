'use strict';
angular.module('app.signin', [])
.controller('signinController', [
"$location", "$scope", "basicApiService","userInfo",
function ($location, $scope, basicApiService, userInfo) {
    var foScope = $scope;
    $scope.errorinfo = '';
    $scope.ani = 'shake';
    $scope.userInfo = {
        email: '',
        password: '',
        rememberme: false
    };
    $scope.trysignin = function () {
        var ismail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!ismail.test($scope.userInfo.email)) {
            $scope.ani = 'shake';
            $scope.errorinfo = 'Please input a valid Email address.';
        }
        else if ($scope.userInfo.password.length < 6) {
            $scope.ani = 'shake';
            $scope.errorinfo = 'Please input a password with 6 more charactors.';
        }
        else {
            $scope.ani = '';
            $scope.signintoserver();
        }
    };
    $scope.shakeAsync = function (elemet) {
        elemet.addClass("shake").delay(1000).queue(function (next) {
            elemet.removeClass("shake");
            next();
        });
    };
    $scope.signintoserver = function () {
        var panel = $("#panelinSignin");
        basicApiService.login(
        $scope.userInfo.email,
        $scope.userInfo.password,
        $scope.userInfo.rememberme)
        .success(function (data) {
            if (data.StatusCode == 200) {
                $location.path('');
                userInfo.refreshUsername();
            }
            else if (data.StatusCode == 403) {
                $scope.errorinfo = "Invalid login attempt!";
                $scope.shakeAsync(panel);
            }
            else if (data.StatusCode == 406) {
                $scope.errorinfo = "Please input a valid Email!";
                $scope.shakeAsync(panel);
            }
        }).error(function (data) {
            $location.path('pages/500');
        });
    };
}]);