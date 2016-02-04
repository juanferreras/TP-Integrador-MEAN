angular.module('appTP')
.controller('GestionProyectosCtrl',
		['$scope','$location','$routeParams','clienteService','proyectoService', 'sweet',
		 function($scope,  $location,$routeParams,clienteService,pryService, sweet) {
			//funcion inicializadora
			$scope.init = function(){
				$scope.proyecto = {}; // creo el proyecto como un objeto vacio cuando inicia el controlador
				if($routeParams.id) {
				   $scope.proyecto._id = $routeParams.id;	
				   $scope.operacion= "Editar";
				} else  $scope.operacion= "Nuevo";

				clienteService.listar().then(
					function() {
						$scope.listaClientes = clienteService.getLista();
						if($scope.proyecto._id) $scope.buscarCliente();
					}
				);
			};
			$scope.init();
			$scope.guardar = function(){
				if($scope.proyecto._id) {
					pryService.actualizar($scope.proyecto)
					.then(
						function(){
								sweet.show({
				            title: '¡Perfecto!',
				            text: 'Su proyecto ha sido actualizado con éxito.',
				            type: 'success',
				            confirmButtonText: 'Volver'
				        }, function() {
										$location.path("/proyectos/lista");
										if(!$scope.$$phase) $scope.$apply()
				        });
						},
						function(){
							sweet.show({
			            title: '¡Error!',
			            text: 'El cliente ya está asignado a un proyecto.',
			            type: 'error',
			            confirmButtonText: 'Entiendo'
			        });
						}
					);
				}
				else {
					pryService.guardar($scope.proyecto)
					.then(
						function(){
								sweet.show({
				            title: '¡Perfecto!',
				            text: 'Su proyecto ha sido cargado con éxito.',
				            type: 'success',
				            confirmButtonText: 'Volver'
				        }, function() {
										$location.path("/proyectos/lista");
										if(!$scope.$$phase) $scope.$apply()
				        });
						},
						function(){
							sweet.show({
			            title: '¡Error!',
			            text: 'El cliente ya está asignado a un proyecto.',
			            type: 'error',
			            confirmButtonText: 'Entiendo'
			        });
						}
					);
				}
			};
			$scope.buscarCliente = function(){				
				pryService.buscar($scope.proyecto._id)
				.then(
						function() {
							$scope.proyecto = pryService.get();
							$scope.proyecto.fechaInicio = new Date($scope.proyecto.fechaInicio);
						}
					);
			}
			$scope.cancelar = function(){
        $location.path("/proyectos/lista");
      }
		}]);