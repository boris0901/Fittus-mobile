(function() {
    'use strict';

    angular
        .module('fittus.gym')
        .controller('GymController', GymController);

    GymController.$inject = ['$scope', '$state'];

    function GymController($scope, $state) {

        $scope.selection = {
            index: -1,
            gym: []
        };

        $scope.initSelection = function() {
            $scope.selection.index = -1;

            for(var i=0; i<$scope.gyms.length; i++) {
                $scope.selection.gym[i] = false;
            }
        }


        $scope.gyms = [
            {
                name: 'Planet Fitness #2152',
                street: '1010 Treemont Street',
                area: 'Boston MA',
                zipcode: '02151'
            },
            {
                name: 'Planet Fitness #2152',
                street: '1010 Treemont Street',
                area: 'Boston MA',
                zipcode: '02151'
            },
            {
                name: 'Planet Fitness #2152',
                street: '1010 Treemont Street',
                area: 'Boston MA',
                zipcode: '02151'
            },
            {
                name: 'Planet Fitness #2152',
                street: '1010 Treemont Street',
                area: 'Boston MA',
                zipcode: '02151'
            },
            {
                name: 'Planet Fitness #2152',
                street: '1010 Treemont Street',
                area: 'Boston MA',
                zipcode: '02151'
            },
            {
                name: 'Planet Fitness #2152',
                street: '1010 Treemont Street',
                area: 'Boston MA',
                zipcode: '02151'
            },
            {
                name: 'Planet Fitness #2152',
                street: '1010 Treemont Street',
                area: 'Boston MA',
                zipcode: '02151'
            },
            {
                name: 'Planet Fitness #2152',
                street: '1010 Treemont Street',
                area: 'Boston MA',
                zipcode: '02151'
            },
            {
                name: 'Planet Fitness #2152',
                street: '1010 Treemont Street',
                area: 'Boston MA',
                zipcode: '02151'
            },
            {
                name: 'Planet Fitness #2152',
                street: '1010 Treemont Street',
                area: 'Boston MA',
                zipcode: '02151'
            },
            {
                name: 'Planet Fitness #2152',
                street: '1010 Treemont Street',
                area: 'Boston MA',
                zipcode: '02151'
            }
        ];


        $scope.changeSelection = function(index) {

            if ($scope.selection.index == index) {
                $scope.selection.gym[index] = true;
                return false;
            }
            else {
                for(var i=0; i<$scope.selection.gym.length; i++) {
                    if (i == index) {
                        $scope.selection.gym[i] = true;
                    }
                    else {
                        $scope.selection.gym[i] = false;
                    }
                }
                $scope.selection.index = index;
                return false;
            }
        }

        $scope.goNext = function() {
            $state.go('goal');
        }

        $scope.initSelection();
    }
})();