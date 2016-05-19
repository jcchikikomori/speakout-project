// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

/*global angular*/

angular.module('starter', ['ionic', 'ionic-material', 'starter.controllers', 'starter.services', 'ngRiffle'])

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

.config(function($riffleProvider){
    $riffleProvider.setDomain("REPLACEME");
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: '/event',
      abstract: true,
      templateUrl: 'templates/event-menu.html'
    })
    .state('eventmenu.home', {
      url: '/home',
      views: {
        'menuContent' :{
          templateUrl: 'templates/home.html'
        }
      }
    })
    .state('eventmenu.checkin', {
      url: '/check-in',
      views: {
        'menuContent' :{
          templateUrl: 'templates/check-in.html',
          controller: 'CheckinCtrl'
        }
      }
    })
    .state('eventmenu.attendees', {
      url: '/attendees',
      views: {
        'menuContent' :{
          templateUrl: 'templates/attendees.html',
          controller: 'AttendeesCtrl'
        }
      }
    })
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    });

  // $urlRouterProvider.otherwise('/tab/dash');
  $urlRouterProvider.otherwise('/event/home');

});
