angular.module('appTP')
.controller('HomeCtrl',
		['$scope','$location','$routeParams','clienteService','proyectoService','tareaService',
		 function($scope, $location, $routeParams, clienteService, proyectoService, tareaService) {

		 	$scope.cantidadClientes = "Cargando...";
		 	$scope.cantidadProyectos = "Cargando...";
		 	$scope.cantidadTareas = "Cargando...";

		 	clienteService.listar().then(
				function() {
					$scope.cantidadClientes = clienteService.getLista().length;
				}
			);
			proyectoService.listar().then(
				function() {
					$scope.cantidadProyectos = proyectoService.getLista().length;
				}
			);
			tareaService.listar().then(
				function() {
					$scope.cantidadTareas = tareaService.getLista().length;
				}
			);

			$scope.verClientes= function(){
			    $location.path("/clientes/lista");
			};
			$scope.verProyectos= function(){
			    $location.path("/proyectos/lista");
			};
			$scope.verTareas= function(){
			    $location.path("/tareas/lista");
			};
			$scope.verAyuda= function(){
			    $location.path("/home").search('tutorial');
			};
		}]);
