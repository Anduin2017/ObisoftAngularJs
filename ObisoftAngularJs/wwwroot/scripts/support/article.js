'use strict';
angular.module('app.article', [])
.controller('articleController', function ($location, $scope, basicApiService, ArgService) {
    $scope.content = '';
    $scope.comments = [];
    $scope.article = null;
    $scope.initArt = function () {
        var ArticleId = ArgService.get();
        if (ArticleId > 0) {
            basicApiService.communityArticle(ArticleId).success(function (data) {
                $scope.content = data.Content;
                $scope.comments = data.Comments;
                $scope.article = data.Result;
            })
        }
        else {
            $location.path('support/community');
        }
    }
});
