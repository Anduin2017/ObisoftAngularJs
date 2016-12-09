'use strict';
angular.module('app.support', [])
.controller('communityController', function ($location, $scope, basicApiService) {
    $scope.articles = [];
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
});