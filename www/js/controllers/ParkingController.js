(function() {
	angular.module('app')
	.controller('ParkingController', ['$scope', '$state', 'localStorageService', 'SocketService', 'moment', '$ionicScrollDelegate', ParkingController]);

	function ParkingController($scope, $state, localStorageService, SocketService, moment, $ionicScrollDelegate) {

		var me = this;

		me.current_parking = localStorageService.get('parking');

		$scope.leaveParking = function() {
			$state.go('dashboard');
		}
	}
})();

