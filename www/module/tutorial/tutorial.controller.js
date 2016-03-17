(function() {
    'use strict';

    angular
        .module('fittus.tutorial')
        .controller('TutorialController', TutorialController);

    TutorialController.$inject = ['$scope', '$state', '$ionicSlideBoxDelegate'];

    function TutorialController($scope, $state, $ionicSlideBoxDelegate) {

        $scope.goNext = function() {

            $ionicSlideBoxDelegate.next();
        }

        $scope.loginFacebook = function() {

            $state.go('gym');
        }

        $scope.loginGoogle = function() {

        }
    }
})();