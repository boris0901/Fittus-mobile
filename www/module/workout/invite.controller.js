(function() {
    'use strict';

    angular
        .module('fittus.workout')
        .controller('WorkoutInviteController', WorkoutInviteController);

    WorkoutInviteController.$inject = ['$scope', '$state', '$ionicHistory'];

    function WorkoutInviteController($scope, $state, $ionicHistory) {

        $scope.selection = {
            member: []
        };

        $scope.members = [
            {
                name: "John Mitchell",
                avatar: "img/avatar-0.png"
            },
            {
                name: "John Mitchell",
                avatar: "img/avatar-0.png"
            },
            {
                name: "John Mitchell",
                avatar: "img/avatar-0.png"
            },
            {
                name: "John Mitchell",
                avatar: "img/avatar-0.png"
            },
            {
                name: "John Mitchell",
                avatar: "img/avatar-0.png"
            },
            {
                name: "John Mitchell",
                avatar: "img/avatar-0.png"
            },
            {
                name: "John Mitchell",
                avatar: "img/avatar-0.png"
            }
        ];

        $scope.goBack = function() {
            $ionicHistory.goBack();
        }

        $scope.doSkip = function() {
            $ionicHistory.goBack();
        }

        $scope.doInvite = function() {
            $ionicHistory.goBack();
        }

        $scope.init = function() {

            for(var i=0; i<$scope.members.length; i++) {
                $scope.selection.member.push(false);
            }
        }

        $scope.init();
    }
})();