'use strict';
angular.module('app.team', [])
.controller('teamController', ['$location', '$scope', 'basicApiService', 'ArgService',
function ($location, $scope, basicApiService, ArgService) {
    basicApiService.CallWithAuthorize(function () {
        basicApiService.groupsijoined().success(function (data) {
            $scope.Groups = [];
            data.List.forEach(function (Relation) {
                var GroupD = Relation.Group;
                GroupD.CreaterName = Relation.CreaterName;
                GroupD.RelationType = Relation.RelationType;
                $scope.Groups.push(GroupD);
            })
        });
        basicApiService.statisticInfo().success(function (data) {
            $scope.data = data;
        });
    });
    $scope.Classify = [
    { tabheading: 'All', filter: '', active: 'true' },
    { tabheading: 'Info Stations', filter: 'RadioStation', active: 'false' },
    { tabheading: 'Teams', filter: 'Team', active: 'false' }
    ];
    $scope.enum = ArgService.types;
    $scope.TypeFilter = '';
    $scope.setEnum = function (int) {
        $scope.TypeFilter = int;
    };
    $scope.TeamDetails = function (GroupId) {
        ArgService.set(GroupId);
        $location.path('teams/teamprofile', { id: GroupId });
    };
}]).controller('createNewGroupController',['$scope', 'ArgService',
function ($scope, ArgService) {
    $scope.Type = 'Group';
    $scope.DisableToInput = true;
    $scope.enum = ArgService.types;
    $scope.SetState = function (Type) {
        $scope.DisableToInput = false;
        if (Type === 'Team') {
            $scope.Type = 'Team';
        }
        if (Type === 'InfoStation') {
            $scope.Type = 'Info Station';
        }
    }

}]).controller('teamprofile', ['$scope', '$location', 'basicApiService', 'ArgService',
function ($scope, $location, basicApiService, ArgService) {
    var id = ArgService.get();
    if (id > 0) {
        $scope.o = id;
        basicApiService.groupDetails(id).success(function (data) {
            $scope.CurrentTeam = data.Object;
        });
    }
    else {
        $location.path('teams/team');
    }
}]);