angular.module('appTP')
.controller('ListaProyectosCtrl',
	['$scope','$location','proyectoService',
		function($scope,  $location,pryService) {
			$scope.refrescar = function(){ 
				pryService.listar().then(
					function() {
						$scope.listaProyectos = pryService.getLista();
					}
				);
			};
			$scope.editar = function(pry){
				$location.path("/proyectos/"+pry._id);
			};
			$scope.nuevo = function(){ 
				$location.path("/proyectos/add");
			};
			$scope.borrar = function(pry){
				pryService.borrar(pry);
				$scope.refrescar();
			}	
			$scope.refrescar();
		}
	]
);
