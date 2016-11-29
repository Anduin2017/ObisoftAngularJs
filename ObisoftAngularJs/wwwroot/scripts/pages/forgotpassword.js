'use strict';
angular.module('app.forgotPassword', [])
.controller('forgotPasswordController', function ($location, basicApiService) {
    var currentC = this;
    currentC.errorinfo = '';
    currentC.email = '';
    this.sendForgotInfo = function () {
        basicApiService.forgotpassword(currentC.email).success(function (data) {
            if (data.StatusCode == 200) {
                currentC.errorinfo = 'An Email successfully sent. Check the inbox to reset your password.';
            }
            else if (data.StatusCode == 406) {
                currentC.errorinfo = 'Please input a valid Email address!';
            }
            else if (data.StatusCode == 404) {
                currentC.errorinfo = 'There does not exist a user with Email"'+currentC.email+'".';
            }
        }).error(function (data) {
            $location.path('pages/500');
        });
    };
});