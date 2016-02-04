angular.module('appTP')
.controller('ListaProyectosCtrl',
	['$scope','$location','proyectoService', 'sweet',
		function($scope,  $location,pryService, sweet) {

			$scope.cantFilas = 5;

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

				sweet.show({
            title: 'Confirme',
            text: '¿Desea eliminar este proyecto?',
            type: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function(isConfirm) {
            if (isConfirm) {
            		pryService.borrar(pry)
            		$scope.refrescar();
                sweet.show('¡Eliminado!', 'El proyecto ha sido eliminado.', 'success');
            }else{
                sweet.show('Cancelado', 'El proyecto no ha sido eliminado.', 'error');
            }
        });

			}	
			$scope.refrescar();
		}
	]
);
