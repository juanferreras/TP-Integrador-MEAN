angular.module('appTP')
.controller('GestionProyectosCtrl',
		['$scope','$location','$routeParams','clienteService','proyectoService',
		 function($scope,  $location,$routeParams,clienteService,pryService) {
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
				console.log($scope.proyecto);
				if($scope.proyecto._id) pryService.actualizar($scope.proyecto);
				else  pryService.guardar($scope.proyecto);
			}
			$scope.buscarCliente = function(){				
				pryService.buscar($scope.proyecto._id)
				.then(
						function() {
							console.log($scope.listaClientes);
							$scope.proyecto = pryService.get();
							console.log($scope.proyecto.cliente);
							$scope.proyecto.fechaInicio = new Date($scope.proyecto.fechaInicio);
						}
					);
			}
		}]);