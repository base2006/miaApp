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

  .state('antwoord', {
    url: "/antwoord/:id/:second_id",
    templateUrl: "templates/antwoord.html",
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