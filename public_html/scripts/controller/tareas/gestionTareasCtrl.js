angular.module('appTP')
.controller('GestionTareasCtrl',
		['$scope','$location','$routeParams',
		 function($scope,  $location,$routeParams) {
			//funcion inicializadora
			$scope.init = function(){
				console.log("inicializa la gestion de tareas");
			};
			$scope.init();
		}]);
