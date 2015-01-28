app.controller('MainCtrl', function ($scope, UsernameFactory) {

	$scope.usernames = [];
	$scope.username = {name: ''};

	$scope.submitUsername = function() {
		UsernameFactory.save($scope.username);
		$scope.username = {name: ''};
	};

	UsernameFactory.save($scope.username, function(ref) {
		$scope.usernames[ref.name] = $scope.username;
		$scope.username = {name: ''};
	});

	$scope.deleteUsername = function (index) {
		UsernameFactory.delete({id: nameId}, function() {
			delete $scope.username[nameId];
		});
	};
});