"use strict";
angular.module("app.apis", []).factory('basicApiService', ['$http', '$location', '$httpParamSerializerJQLike',
    function ($http, $location, $httpParamSerializerJQLike) {
        var methods = {};
        methods = {
            serverAddress: 'https://www.obisoft.com.cn',
            httpPost: function (url, form) {
                return $http.post(this.serverAddress + url, $.param(form), {
                    responseType: 'json',
                    withCredentials: true,
                    paramSerializer: '$httpParamSerializerJQLike',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
                });
            },
            httpGet: function (url, param) {
                return $http.get(this.serverAddress + url + '?' + $httpParamSerializerJQLike(param), {
                    responseType: 'json',
                    withCredentials: true,
                    paramSerializer: '$httpParamSerializerJQLike',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
                });
            },
            validatetoken: function () {
                return this.httpGet('/api/validatetoken');
            },
            token: function () {
                return this.httpGet('/api/token', {
                    appid: '49c33442bfaacd2ae6803bdd06fd2eea',
                    appsecret: '802f4fd9dc97c53eb0873cac09a52b04'
                });
            },
            signinStatus: function () {
                return this.httpGet('/api/signinStatus');
            },
            index: function () {
                return this.httpGet('/api/index');
            },
            changeLanguage: function (target) {
                return this.httpPost('/api/changeLanguage', { culture: target });
            },
            logIn: function (email, password, rememberme) {
                return this.httpPost('/api/login', {
                    email: email,
                    password: password,
                    rememberme: rememberme
                });
            },
            userInfo: function () {
                return this.httpGet('/api/UserInfo');
            },
            logoff: function () {
                return this.httpPost('/api/logoff', {});
            },
            register: function (email, password, confirmpassword) {
                return this.httpPost('/api/register', {
                    Email: email,
                    Password: password,
                    ConfirmPassword: confirmpassword
                });
            }
        };
        methods.token();
        return methods;
    }]);