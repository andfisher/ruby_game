(function() {
	
	var app = angular.module('game', ['game-rooms', 'game-menus', 'game-objects']);
	
	app.factory('gameService', function($rootScope) {
		
		return {
			optionsOn: false,
			isPaused: true,
			isPlaying: false,
			options: {
				hudOpacity: 100,
				resolution: '1920x1080'
			}
		};
		
	});
	
	app.controller('StageController', ['$scope', 'gameService', function($scope, gameService) {
		
		this.isPaused = gameService.isPaused;
		this.currentRoom = 0;
		this.optionsOn = gameService.optionsOn;
		this.options = gameService.options;
		
		this.keyboardInput = function(event) {
			console.log(event, event.key)
			// Handle the options menu call, either 'O' or 'o' and 'Esc' toggles if browser supports it.
			if (event.charCode === 79 || event.charCode === 111) {
				if (this.areOptionsShown()) {
					this.hideOptions();
				} else {
					this.showOptions();
				}
			} else if(event.key === 'Escape' && this.areOptionsShown()) {
				this.hideOptions();
			}
			
			// Handle the pause
			if (gameService.isPlaying && (event.charCode === 80 || event.charCode === 112)) {
				gameService.isPaused = !gameService.isPaused;
				this.isPaused = gameService.isPaused;
			}
		};
		
		this.ovenContents = [];
		
		this.isRoom = function(room) {
			return room === this.currentRoom;
		};
		
		this.setRoom = function(room) {
			this.currentRoom = room;
		};
		
		this.isMenuShown = function(menu) {
			return (menu ? menu === this.activeMenu : 0 === this.activeMenu);
		};
		
		this.areOptionsShown = function() {
			return gameService.optionsOn === true;
		};
		
		this.showMenu = function(menu) {
			this.activeMenu = menu;
		};
		
		this.showOptions = function() {
			gameService.optionsOn = true;
			gameService.isPaused = true;
		};
		
		this.hideOptions = function() {
			gameService.optionsOn = false;
			gameService.isPaused = false;
		};
		
		this.cancelMenu = function() {
			this.activeMenu = 0;
		};
		
		
	}]);

	
	app.directive('titleScreen', ['gameService', function(gameService) {
		return {
			restrict: 'A',
			templateUrl: 'title-screen.html',
			scope: true,
			controller: function() {
				
				this.copyright = Date.now();
				
				this.newGame = function(stage) {

					gameService.isPlaying = true;
					stage.setRoom(1);
					
				};
				
				this.continueGame = function(stage) {
					
					gameService.isPlaying = true;
					stage.setRoom(2);
					
				};
				
				this.showOptions = function(stage) {
					
					stage.setRoom(0);
					stage.showOptions();
					
				};
				
			},
			controllerAs: 'titleCtrl'
		};
	}]);
	
	
})();