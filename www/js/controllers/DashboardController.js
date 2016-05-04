(function() {
	angular.module('app')
		.controller('DashboardController', ['$scope', '$state', 'localStorageService', 'SocketService', DashboardController]);


	function DashboardController($scope, $state, localStorageService, SocketService) {

		var me = this;
	

		// me.current_parking = localStorageService.get('parking');
		me.parkings = ['Parking1', 'Parking2', 'Parking3', 'Parking4'];

		// SocketService.on('initialData', function(msg) {
	
			SocketService.on('sentData',function(data){
      			me.badge=data.number;
      			if(data.number > 0)
      			me.color='badge-balanced';
      			else me.color='badge-assertive';
   		 });
	
		// }

		$scope.enterParking = function(parking_name) {
			me.current_parking = parking_name;

			localStorageService.set('parking', parking_name);

			$state.go('parking');

		};


	}

})();
