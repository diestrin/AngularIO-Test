var IO = require('angulario');

var angular = require('angular');
require('angular-route');
var app = IO(angular);
var ngApp = angular.module('io', ['angulario']);

var HomeCtrl = require('./controllers/HomeCtrl.js');
var LoginCtrl = require('./controllers/LoginCtrl.js');
var UserCtrl = require('./controllers/UserCtrl.js');

ngApp.config(function (IORouterProvider) {
  IORouterProvider
  .base('/index.html')
  .when('/', {
    controller: HomeCtrl,
    templateUrl: '/templates/home.html'
  })
  .when('/login', {
    controller: LoginCtrl,
    templateUrl: '/templates/login.html'
  })
  .when('/user', {
    controller: UserCtrl,
    templateUrl: '/templates/user.html',
    policies: ['userIsAuth', {POST: ['hasWriteRights']}],
  })
  .otherwise({
    redirectTo: '/'
  });
});

angular.bootstrap(document.body, ['io']);

module.exports = app;
