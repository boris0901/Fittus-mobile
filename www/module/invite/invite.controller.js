(function() {
    'use strict';

    angular
        .module('fittus.invite')
        .controller('InviteController', InviteController);

    InviteController.$inject = ['$scope', '$state'];

    function InviteController($scope, $state) {

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
            }
        ];

        $scope.doInvite = function() {
            $state.go('home.feed');
        }

        $scope.init = function() {

            for(var i=0; i<$scope.members.length; i++) {
                $scope.selection.member.push(false);
            }
        }

        $scope.init();
    }
})();