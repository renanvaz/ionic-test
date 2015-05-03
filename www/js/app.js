// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var IS_WEB = typeof cordova === 'undefined' ? true : false;

angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers'])

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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/base.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      menuContent: {
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.dates', {
    url: '/dates',
    views: {
      menuContent: {
        controller: 'DatesCtrl',
        templateUrl: 'templates/dates.html'
      }
    }
  })

  .state('app.events-year-month', {
    url: '/events/:year/:month',
    views: {
      menuContent: {
        controller: 'EventsCtrl',
        templateUrl: 'templates/events.html'
      }
    }
  })

  .state('app.event-id', {
    url: '/event/:id',
    views: {
      menuContent: {
        controller: 'SearchCtrl',
        templateUrl: 'templates/search.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

if (IS_WEB) {
  setTimeout(function(){
    var domElement = document.querySelector('body');
    angular.bootstrap(domElement, ['starter']);
  }, 0);
} else {
  document.addEventListener('deviceready', function() {
    var domElement = document.querySelector('body');
    angular.bootstrap(domElement, ['starter']);
  }, true);
}
