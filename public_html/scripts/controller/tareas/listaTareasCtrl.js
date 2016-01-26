angular.module('appTP')
.controller('ListaTareasCtrl',
	['$scope','$location',
		 function($scope,  $location) {
			$scope.refrescar = function(){ 
				// se conecta a un servicio para buscar la lista de tareas de la base de datos.
			};
			$scope.refrescar();
		}

	]
);
