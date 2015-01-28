app.controller('MainCtrl', function ($scope, Post) {
	$scope.posts = Post.all;
	$scope.post = {name: ''};

	$scope.submitPost = function () {
		Post.create($scope.post).then(function () {
			$scope.post = {name: ''};
		});
	};

	$scope.deletePost = function (post) {
		Post.delete(post);
	};

});
