(function() {
    'use strict';

    angular
        .module('fittus.goal')
        .controller('GoalController', GoalController);

    GoalController.$inject = ['$scope', '$state'];

    function GoalController($scope, $state) {

        $scope.selectTab = 0;

        $scope.goNext = function() {
            $state.go('invite');
        }

    }
})();