(function() {
	
	var app = angular.module('game-rooms', []);
	
	app.directive('cakeRoom', function() {
		return {
			restrict: 'E',
			templateUrl: 'cake-room.html'
		};
	});
	
	app.directive('dogsRoom', function() {
		return {
			restrict: 'E',
			templateUrl: 'dogs-room.html'
		};
	});
	
})();