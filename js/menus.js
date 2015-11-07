(function() {
	
	var app = angular.module('game-menus', []);
	
	
	app.directive('ovenMenu', ['gameService', function(gameService) {
		
		return {
			restrict: 'E',
			templateUrl: 'menus/oven.html',
			scope: true,
			controller: function($scope) {
				gameService.activeMenu = 1;
			},
			controllerAs: 'menuCtrl'
		};
		
	}]);
	
	app.directive('tillMenu', function() {
		
		return {
			restrict: 'E',
			templateUrl: 'menus/till.html',
			scope: true,
			controller: function() {
				this.activeMenu = 2;
			},
			controllerAs: 'menuCtrl'
		};
		
	});
	
	
	app.directive('optionsMenu', ['gameService', function(gameService) {
		return {
			restrict: 'E',
			templateUrl: 'forms/options.html',
			scope: true,
			controller: function($scope) {
				
				$scope.optionsModel = gameService.options;

				
				this.changeHudOpacity = function() {
					gameService.options.hudOpacity = $scope.optionsModel.hudOpacity;
				};

				this.changeResolution = function() {
					gameService.options.resolution = $scope.optionsModel.resolution;
				};
				
			},
			controllerAs: 'options'
		};
	}]);
})();