var app = angular.module('twitchGiveaway', ['ngResource', 'firebase', 'ui.router'])
.constant('FIREBASE_URL', 'https://blazing-fire-376.firebaseio.com/');

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: 'views/main.html'
		})
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'MainCtrl'
		})
		.state('register', {
			url: '/register',
			templateUrl: 'views/register.html',
			controller: 'AuthCtrl'
		})
});