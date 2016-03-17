(function() {
    'use strict';

    angular
        .module('fittus.workout')
        .controller('WorkoutScheduleController', WorkoutScheduleController);

    WorkoutScheduleController.$inject = ['$scope', '$state', '$ionicHistory'];

    function WorkoutScheduleController($scope, $state, $ionicHistory) {

        $scope.goBack = function() {
            $ionicHistory.goBack();
        }

        $scope.goNext = function() {
            $state.go('workout-invite');
        }
    }
})();