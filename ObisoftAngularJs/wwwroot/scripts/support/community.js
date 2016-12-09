'use strict';
angular.module('app.support', [])
.controller('communityController', function ($location, $scope, basicApiService, ArgService) {
    $scope.articles = [];
    $scope.parts = [];
    $scope.initArticles = function () {
        basicApiService.partArticles(0).success(function (data) {
            $scope.Part = data.Result;
            $scope.articles = data.Articles;
        });
        //alert('h');
    };
    $scope.delHtmlTag = function (str) {
        var reTag = /<(?:.|\s)*?>/g;
        return str.replace(reTag, "");
    };
    $scope.initParts = function () {
        basicApiService.communityParts().success(function (data) {
            $scope.parts = data.Result;
        })
    };
    $scope.navArt = function (articleId) {
        ArgService.set(articleId);
        $location.path('support/article');
    }
});