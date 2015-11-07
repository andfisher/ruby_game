(function() {
	
	var cakes = [
		{
			name: 'Strawberry cream cake',
			className: 'strawberry-cream-cake',
			price: 5
		},
		{
			name: 'Cherry Pie',
			className: 'cherry-pie',
			price: 5
		},
		{
			name: 'Chocolate Chip Cookies',
			className: 'chocolate-chip-cookies',
			price: 5
		},
		{
			name: 'Pancakes with Syrup',
			className: 'pancakes-with-syrup',
			price: 5
		},
		{
			name: 'Cupcakes',
			className: 'cupcakes',
			price: 5
		},
		{
			name: 'Chocolate Cake',
			className: 'chocolate-cake',
			price: 5
		},
		{
			name: 'Chocolate Chip Muffins',
			className: 'chocolate-chip-muffins',
			price: 5
		}
	];
	
	var app = angular.module('game-objects', []);
	
	app.directive('oven', function() {
		return {
			restrict: 'E',
			templateUrl: 'oven.html'
		};
	});
	app.directive('counter', function() {
		return {
			restrict: 'E',
			templateUrl: 'counter.html'
		};
	});
	app.directive('cakeDisplay', function() {
		return {
			restrict: 'E',
			templateUrl: 'cake-display.html',
			controller: function() {
				this.cakes = cakes;
			},
			controllerAs: 'display'
		};
	});
	app.directive('entrance', function() {
		return {
			restrict: 'E'
		};
	});
	app.directive('corridor', function() {
		return {
			restrict: 'E'
		};
	});
	
	app.directive('door', function() {
		return {
			restrict: 'A'
		};
	});
	
})();