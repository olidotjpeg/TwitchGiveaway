'user strict';

app.factory('UsernameFactory', function($resource) {
	return $resource('https://blazing-fire-376.firebaseio.com/users/:id.json');
});