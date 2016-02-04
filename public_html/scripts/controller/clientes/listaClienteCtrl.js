angular.module('appTP')
.controller('ListaClientesCtrl',
	['$scope','$location','clienteService', 'sweet',
		 function($scope,  $location,clienteService, sweet) {

		 	$scope.cantFilas = 5;

			$scope.refrescar = function(){ 
				clienteService.listar().then(
					function() {
						$scope.listaClientes = clienteService.getLista();
					}
				);
			};
			$scope.elegir = function(cli){
				$scope.clienteSeleccionado = cli;
			};
			$scope.editar = function(cli){
				$location.path("/clientes/"+cli._id);
			};
			$scope.nuevo = function(){ 
				$location.path("/clientes/add");
			};
			$scope.borrar = function(cli){ 

				sweet.show({
            title: 'Confirme',
            text: '¿Desea eliminar este cliente?',
            type: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function(isConfirm) {
            if (isConfirm) {
            		clienteService.borrar(cli)
            		$scope.refrescar();
                sweet.show('¡Eliminado!', 'El cliente ha sido eliminado.', 'success');
            }else{
                sweet.show('Cancelado', 'El cliente no ha sido eliminado.', 'error');
            }
        });

			};
			$scope.refrescar();
		}

	]
);
