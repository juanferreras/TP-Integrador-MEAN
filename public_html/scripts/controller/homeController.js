angular.module('appTP')
.controller('HomeCtrl',
		['$scope','$location','$routeParams',
		 function($scope,  $location,$routeParams) {
			$scope.verClientes= function(){
			    $location.path("/clientes/lista");
			};
			$scope.verProyectos= function(){
			    $location.path("/proyectos/lista");
			};
			$scope.verTareas= function(){
			    $location.path("/tareas/lista");
			};
		}]);
