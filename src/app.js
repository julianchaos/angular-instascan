'strict mode';
const angular = require('angular');
const ngRoute = require('angular-route');

// Declare app level module which depends on views, and core components
angular.module('app', ['ngRoute', 'angular-instascan']).
	config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');
		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'template.html',
			controller: 'appController',
			controllerAs: 'ctrl',
		});
	}]);

angular.module('app').controller('appController', controller);
controller.$inject = ['$instascan'];
function controller($instascan) {

	const self = this;
	self.response = [];

	activate();

	function activate() {

		const Instascan = $instascan.getInstascan();
		let scanner = new Instascan.Scanner({video: document.getElementById('preview')});

		scanner.addListener('scan', function(content) {
			self.response.push(content);
			console.log(self.response);
		});

		Instascan.Camera.getCameras().then(function (cameras) {
			if (cameras.length > 0) {
				scanner.start(cameras[0]);
			} else {
				self.response.push('No camres found.');
			}
		}).catch(function (e) {
			self.response.push(e);
		});
	}
}
