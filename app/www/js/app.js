// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

/*global angular*/

angular.module('starter', ['ionic', 'ionic-material', 'starter.controllers', 'starter.services'])

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

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  // Each tab has its own nav history stack:
  .state('tab.locate', {
    url: '/locate',
    views: {
      'tab-locate': {
        templateUrl: 'templates/tab-locate.html',
        // controller: 'heatmapController'
      }
    }
  })
  .state('tab.tips', {
    url: '/tips',
    views: {
      'tab-tips': {
        templateUrl: 'templates/tab-tips.html'
      }
    }
  })
  .state('tab.feed', {
    url: '/feed',
    views: {
      'tab-feed': {
        templateUrl: 'templates/tab-feed.html'
      }
    }
  })
  .state('tab.law', {
    url: '/law',
    views: {
      'tab-law': {
        templateUrl: 'templates/tab-law.html',
        controller: 'ChatsCtrl'
      }
    }
  })
  .state('tab.chat-detail', {
    url: '/law/:chatId',
    views: {
      'tab-law': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })
  .state('tab.menu', {
    url: '/menu',
    views: {
      'tab-menu': {
        templateUrl: 'templates/tab-menu.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.login', {
    url: '/menu/login',
    views: {
      'tab-menu': {
        templateUrl: 'templates/tab-login.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.signup', {
    url: '/menu/signup',
    views: {
      'tab-menu': {
        templateUrl: 'templates/tab-signup.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.others', {
    url: '/menu/others',
    views: {
      'tab-menu': {
        templateUrl: 'templates/tab-others.html',
        controller: 'DashCtrl'
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/feed');
});
