'use strict';
angular.module('app.signup', [])
.controller('signupController', function ($location, $scope, basicApiService, userInfo) {
    var currentC = this;
    currentC.errorinfo = '';
    currentC.userInfo = {
        email: '',
        password: '',
        agree: false
    };
    basicApiService.getloginstatus().success(function (data) {
        if (data.Value == true) {
            $location.path('');
        }
    }).error(function (data) {
        $location.path('pages/500');
    });
    this.ableInfo = function () {
        return (this.userInfo.password == this.userInfo.repassword) && this.userInfo.password.length != '';
    };
    this.signuptoServer = function () {
        basicApiService.register(currentC.userInfo.email,
        currentC.userInfo.password,
        currentC.userInfo.repassword).success(function (data) {
            if (data.StatusCode == 200) {
                basicApiService.setBasicInfo(null, null, currentC.userInfo.fullName, null, null).success(function (data) {
                    $location.path('');
                    userInfo.refreshUsername();
                }).error(function (data) {
                    $location.path('pages/500');
                });
            }
            else if (data.StatusCode == 406) {
                if (currentC.userInfo.password.length >= 6) {
                    currentC.errorinfo = 'Please input a valid Email address!';
                }
                else {
                    currentC.errorinfo = 'Password must be longer than 6 words!';
                }
            }
            else if (data.StatusCode == 409) {
                currentC.errorinfo = 'An user with Email "' + currentC.userInfo.email + '" already exists!';
            }
        }).error(function (data) {
            $location.path('pages/500');
        });
    };
});