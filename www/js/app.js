angular.module('fittus', [
        'ionic',

        'fittus.common',
        'fittus.tutorial',
        'fittus.gym',
        'fittus.goal',
        'fittus.invite',
        'fittus.home',
        'fittus.workout',

        'ngCordova',
        'flexcalendar'
    ])

    .constant('PARSE_APP_ID', 'fdnJrUNordiOgFQK7BXgnvnlEBtKVwlMQmoYL2kq')
    .constant('PARSE_JAVASCRIPT_KEY', '1qgaT4jLPBOEdkzAlT0vVfATERzJe57axkzJfoB6')

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .run(['$rootScope', '$state', 'PARSE_APP_ID', 'PARSE_JAVASCRIPT_KEY', function($rootScope, $state, PARSE_APP_ID, PARSE_JAVASCRIPT_KEY) {
        Parse.initialize(PARSE_APP_ID, PARSE_JAVASCRIPT_KEY);
        $rootScope.sessionUser = Parse.User.current();

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {


        });
    }])

    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('tutorial', {
                url: '/tutorial',
                templateUrl: 'module/tutorial/tutorial.template.html',
                controller: 'TutorialController'
            })

            .state('gym', {
                url: '/gym',
                templateUrl: 'module/gym/gym.template.html',
                controller: 'GymController'
            })

            .state('goal', {
                url: '/goal',
                templateUrl: 'module/goal/goal.template.html',
                controller: 'GoalController'
            })

            .state('invite', {
                url: '/invite',
                templateUrl: 'module/invite/invite.template.html',
                controller: 'InviteController'
            })

            .state('home', {
                url: '/home',
                abstract: true,
                templateUrl: 'module/home/home.template.html'
            })

            .state('home.calendar', {
                url: '/calendar',
                views: {
                    'home-calendar': {
                        templateUrl: 'module/home/calendar/calendar.template.html',
                        controller: 'CalendarController'
                    }
                }
            })

            .state('home.feed', {
                url: '/feed',
                views: {
                    'home-feed': {
                        templateUrl: 'module/home/feed/feed.template.html',
                        controller: 'FeedController'
                    }
                }
            })

            .state('home.profile', {
                url: '/profile',
                views: {
                    'home-profile': {
                        templateUrl: 'module/home/profile/profile.template.html',
                        controller: 'ProfileController'
                    }
                }
            })

            .state('workout-schedule', {
                url: '/workout-schedule',
                templateUrl: 'module/workout/schedule.template.html',
                controller: 'WorkoutScheduleController'
            })

            .state('workout-invite', {
                url: '/workout-invite',
                templateUrl: 'module/workout/invite.template.html',
                controller: 'WorkoutInviteController'
            })


/*
            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/tab-chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/chat-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });
*/
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tutorial');

    });
