// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('hive', ['ionic', 'hive.controllers', 'hive.services', 'ui.bootstrap'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
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
  
  $stateProvider
  
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
  })
  
  .state('app.submit', {
    url: '/submit',
    views: {
      'menuContent': {
        templateUrl: 'templates/submit.html'
      }
    }
  })

  .state('app.myhive', {
      url: '/myhive',
      views: {
        'menuContent': {
          templateUrl: 'templates/myhive.html'
        }
      }
    })
  .state('app.public', {
    url: '/public',
    views: {
      'menuContent': {
        templateUrl: 'templates/public.html',
        controller: 'PublicCtrl'
      }
    }
  })
    .state('app.details', {
    url: '/details',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-details.html',
        controller: 'DetailsCtrl'
      }
    }
  })
    .state('app.features', {
    url: '/features',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-features.html',
        controller: 'FeaturesCtrl'
      }
    }
  })
    .state('app.people', {
    url: '/people',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-people.html'
      }
    }
  })
    .state('app.downloads', {
    url: '/downloads',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-downloads.html'
      }
    }
  })
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })
    .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'templates/account.html'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
