var app = angular.module('twitchGiveaway', ['ngResource', 'firebase', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'MainCtrl'
		})
});