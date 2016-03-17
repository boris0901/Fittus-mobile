(function() {
    'use strict';

    angular
        .module('fittus.home')
        .controller('FeedController', FeedController);

    FeedController.$inject = ['$scope', '$state', '$ionicModal'];

    function FeedController($scope, $state, $ionicModal) {

        $scope.floatButton = 'workout-add';

        $scope.init = function() {
            $ionicModal.fromTemplateUrl('module/home/feed/workout-start.template.html', {
                scope: $scope
            }).then(function(modal) {
                $scope.workoutStartModal = modal;
            });

            $ionicModal.fromTemplateUrl('module/home/feed/workout-complete.template.html', {
                scope: $scope
            }).then(function(modal) {
                $scope.workoutCompleteModal = modal;
            });
        }

        $scope.showWorkoutModal = function() {
            if ($scope.floatButton == 'workout-add') {
                $scope.workoutStartModal.show();
            }
            else {
                $scope.workoutCompleteModal.show();
            }
        }

        $scope.closeModal = function(modal) {
            if (modal == 'workout-start') {
                $scope.workoutStartModal.hide();
            }
            else {
                $scope.workoutCompleteModal.hide();
            }
        }

        $scope.doStartWorkout = function() {
            $scope.workoutStartModal.hide();
            $scope.floatButton = 'workout-complete';
        }

        $scope.doCompleteWorkout = function() {
            $scope.workoutCompleteModal.hide();
            $scope.floatButton = 'workout-start';
        }

        $scope.cards = [
            {
                avatar: "img/avatar-0.png",
                title: "Jen Sanders started a workout",
                time: "6:32 pm",
                position: "Planet Fitness on Tremont",
                post: "",
                description: "Training for the marathon with the best team ever!",
                team_priamry: "Mike, Akebe",
                team_addition: "2",
                team: [
                    {
                        name: "Mike",
                        avatar: "img/avatar-0.png"
                    },
                    {
                        name: "Akebe",
                        avatar: "img/avatar-0.png"
                    },
                    {
                        name: "Paul",
                        avatar: "img/avatar-0.png"
                    },
                    {
                        name: "Boris",
                        avatar: "img/avatar-0.png"
                    }
                ]
            },
            {
                avatar: "img/avatar-0.png",
                title: "Jen Sanders started a workout",
                time: "6:32 pm",
                position: "Planet Fitness on Tremont",
                post: "img/feed-post-img-1.svg",
                description: "Training for the marathon with the best team ever!",
                team_priamry: "",
                team_addition: "",
                team: []
            },
            {
                avatar: "img/avatar-0.png",
                title: "Jen Sanders started a workout",
                time: "6:32 pm",
                position: "Planet Fitness on Tremont",
                post: "",
                description: "Training for the marathon with the best team ever!",
                team_priamry: "Mike, Akebe",
                team_addition: "2",
                team: [
                    {
                        name: "Mike",
                        avatar: "img/avatar-0.png"
                    },
                    {
                        name: "Boris",
                        avatar: "img/avatar-0.png"
                    }
                ]
            },
            {
                avatar: "img/avatar-0.png",
                title: "Jen Sanders started a workout",
                time: "6:32 pm",
                position: "Planet Fitness on Tremont",
                post: "",
                description: "Training for the marathon with the best team ever!",
                team_priamry: "Mike, Akebe",
                team_addition: "2",
                team: [
                    {
                        name: "Mike",
                        avatar: "img/avatar-0.png"
                    },
                    {
                        name: "Akebe",
                        avatar: "img/avatar-0.png"
                    },
                    {
                        name: "Boris",
                        avatar: "img/avatar-0.png"
                    }
                ]
            }
        ];

        $scope.init();
    }
})();