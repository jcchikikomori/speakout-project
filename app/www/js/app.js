// Ionic Starter App

var mods = [ 'ionic', 'starter.controllers', 'ui.router',
             'ionic-material', 'firebase', 'leaflet-directive', 'ngCordova', 'ionMdInput', 'igTruncate' ];

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', mods)

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.welcome', {
        url: '/welcome',
        views: {
            'menuContent': {
                templateUrl: 'templates/welcome.html'
            }
        }
    })
    .state('app.feature1', {
        url: '/feature1',
        views: {
            'menuContent': {
                templateUrl: 'templates/feature1.html'
            }
        }
    }).state('app.feature2', {
        url: '/feature2',
        views: {
            'menuContent': {
                templateUrl: 'templates/feature2.html'
            }
        }
    }).state('app.feature3', {
        url: '/feature3',
        views: {
            'menuContent': {
                templateUrl: 'templates/feature3.html'
            }
        }
    }).state('app.feature4', {
        url: '/feature4',
        views: {
            'menuContent': {
                templateUrl: 'templates/feature4.html'
            }
        }
    }).state('app.feature5', {
        url: '/feature5',
        views: {
            'menuContent': {
                templateUrl: 'templates/feature5.html'
            }
        }
    }).state('app.feature6', {
        url: '/feature6',
        views: {
            'menuContent': {
                templateUrl: 'templates/feature6.html'
            }
        }
    }).state('app.feature7', {
        url: '/feature7',
        views: {
            'menuContent': {
                templateUrl: 'templates/feature7.html'
            }
        }
    })
    .state('app.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity"  style="margin-bottom:40px;" class="button button-fab button-fab-bottom-right button-assertive"><i class="icon ion-android-call"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })

    .state('app.Self-Defense', {
        url: '/Self-Defense',
        views: {
            'menuContent': {
                templateUrl: 'templates/Self-Defense.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                template: '<button id="fab-friends"  style="margin-bottom:40px;" class="button button-fab button-fab-bottom-right button-assertive"><i class="icon ion-android-call"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-friends').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.feed', {
        url: '/feed',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'FeedCtrl'
            },
            'fabContent': {
                template: '<button id="fab-gallery"  style="margin-bottom:40px;" class="button button-fab button-fab-bottom-right button-assertive"><i class="icon ion-android-call"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
        }
    })

    .state('app.login_post', {
        url: '/login/post',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
        }
    })

    .state('app.feeds_test', {
        url: '/feeds_test',
        views: {
            'menuContent': {
                templateUrl: 'templates/feeds_test.html',
                controller: 'FeedCtrlOnline'
            }
        }
    })

    // .state('app.profile', {
    //     url: '/profile',
    //     views: {
    //         'menuContent': {
    //             templateUrl: 'templates/profile.html',
    //             controller: 'ProfileCtrl'
    //         },
    //         'fabContent': {
    //             template: '<button id="fab-profile" style="margin-bottom:40px;" class="button button-fab button-fab-bottom-right button-assertive"><i class="icon ion-android-call"></i></button>',
    //             controller: function ($timeout) {
    //                 /*$timeout(function () {
    //                     document.getElementById('fab-profile').classList.toggle('on');
    //                 }, 800);*/
    //             }
    //         }
    //     }
    // })

    .state('app.locate', {
        url: '/locate',
        views: {
            'menuContent': {
                templateUrl: 'templates/locate.html',
                controller: 'HeatMapCtrl'
            },
            'fabContent': {
                template: '',
            }
        }
    })

    .state('app.emergencyContacts', {
        url: '/emergencyContacts',
        views: {
            'menuContent': {
                templateUrl: 'templates/emergencyContacts.html'
                // controller: 'FriendsCtrl'
            }
            ,

        }
    })
    .state('app.tips', {
        url: '/tips',
        views: {
            'menuContent': {
                templateUrl: 'templates/tips.html'
                // controller: 'FriendsCtrl'
            },
            'fabContent': {
                template: '<button id="fab-gallery"  style="margin-bottom:40px;" class="button button-fab button-fab-bottom-right button-assertive"><i class="icon ion-android-call"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })
    .state('app.law', {
        url: '/law',
        views: {
            'menuContent': {
                templateUrl: 'templates/law.html'
                // controller: 'FriendsCtrl'
            },
            'fabContent': {
                template: '<button id="fab-gallery"  style="margin-bottom:40px;" class="button button-fab button-fab-bottom-right button-assertive"><i class="icon ion-android-call"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })
    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            },
            'fabContent': {
                template: '<button id="fab-gallery"  style="margin-bottom:40px;" class="button button-fab button-fab-bottom-right button-assertive"><i class="icon ion-android-call"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
