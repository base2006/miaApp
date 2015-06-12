// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
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
  .state('app', {
    url: "/",
    abstract: true,
    controller: "appCtrl"
  })

  .state('home', {
    url: "/home",
    templateUrl: "templates/home.html",
    controller: "homeCtrl"
  })

  .state('uitleg', {
    url: "/uitleg/:id",
    templateUrl: "templates/uitleg.html",
    controller: "uitlegCtrl"
  })

  .state('oefening', {
    url: "/oefening/:id/:second_id",
    templateUrl: "templates/oefening.html",
    controller: "oefeningCtrl"
  })

// oefeningen
  .state('oefening1', {
    url: "/oefening1",
    templateUrl: "templates/oefeningen/oefening1.html",
    controller: "oefeningCtrl"
  })
  .state('oefening2', {
    url: "/oefening2",
    templateUrl: "templates/oefeningen/oefening2.html",
    controller: "oefeningCtrl"
  })
  .state('oefening3', {
    url: "/oefening3",
    templateUrl: "templates/oefeningen/oefening3.html",
    controller: "oefeningCtrl"
  })
  .state('oefening4', {
    url: "/oefening4",
    templateUrl: "templates/oefeningen/oefening4.html",
    controller: "oefeningCtrl"
  })
  .state('oefening5', {
    url: "/oefening5",
    templateUrl: "templates/oefeningen/oefening5.html",
    controller: "oefeningCtrl"
  })
  .state('oefening6', {
    url: "/oefening6",
    templateUrl: "templates/oefeningen/oefening6.html",
    controller: "oefeningCtrl"
  })
  .state('oefening7', {
    url: "/oefening7",
    templateUrl: "templates/oefeningen/oefening7.html",
    controller: "oefeningCtrl"
  })
  .state('oefening8', {
    url: "/oefening8",
    templateUrl: "templates/oefeningen/oefening8.html",
    controller: "oefeningCtrl"
  })
  .state('oefening9', {
    url: "/oefening9",
    templateUrl: "templates/oefeningen/oefening9.html",
    controller: "oefeningCtrl"
  })
  .state('oefening10', {
    url: "/oefening10",
    templateUrl: "templates/oefeningen/oefening10.html",
    controller: "oefeningCtrl"
  })

 //  .state('antwoord', {
 //    url: "/antwoord/:id/:second_id",
 //    templateUrl: "templates/antwoord.html",
 //    controller: "antwoordCtrl"
 // })

// antwoorden 

  .state('antwoord1', {
    url: "/antwoord1",
    templateUrl: "templates/oefeningen/antwoord1.html",
    controller: "antwoordCtrl"
  })
  .state('antwoord2', {
    url: "/antwoord2",
    templateUrl: "templates/oefeningen/antwoord2.html",
    controller: "antwoordCtrl"
  })
  .state('antwoord3', {
    url: "/antwoord3",
    templateUrl: "templates/oefeningen/antwoord3.html",
    controller: "antwoordCtrl"
  })
  .state('antwoord4', {
    url: "/antwoord4",
    templateUrl: "templates/oefeningen/antwoord4.html",
    controller: "antwoordCtrl"
  })
  .state('antwoord5', {
    url: "/antwoord5",
    templateUrl: "templates/oefeningen/antwoord5.html",
    controller: "antwoordCtrl"
  })
  .state('antwoord6', {
    url: "/antwoord6",
    templateUrl: "templates/oefeningen/antwoord6.html",
    controller: "antwoordCtrl"
  })
  .state('antwoord7', {
    url: "/antwoord7",
    templateUrl: "templates/oefeningen/antwoord7.html",
    controller: "antwoordCtrl"
  })
  .state('antwoord8', {
    url: "/antwoord8",
    templateUrl: "templates/oefeningen/antwoord8.html",
    controller: "antwoordCtrl"
  })
  .state('antwoord9', {
    url: "/antwoord9",
    templateUrl: "templates/oefeningen/antwoord9.html",
    controller: "antwoordCtrl"
  })
  .state('antwoord10', {
    url: "/antwoord10",
    templateUrl: "templates/oefeningen/antwoord10.html",
    controller: "antwoordCtrl"
  })

  .state('score', {
    url: "/score",
    templateUrl: "templates/score.html",
    controller: "scoreCtrl"
  })

  // if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/home');
});