angular.module('appTP')
.controller('GestionClientesCtrl',
		['$scope','$location','clienteService','$routeParams',
		 function($scope,  $location,clienteService,$routeParams) {
			//funcion inicializadora
			$scope.init = function(){
				$scope.edicionHabilitada = true;
					if($routeParams.id==='add'){
						$scope.operacion = "Nuevo Cliente";
						console.log($routeParams.id+ " nuevo");
					}else{
						clienteService.buscar($routeParams.id)
						.then(
							function() {
								$scope.cliente = clienteService.get();
							}
						);
						$scope.operacion = "Editar Cliente";
					};
			};
			$scope.guardar = function(){
				console.log("guarda");
				console.log($scope.cliente);
				clienteService.guardar($scope.cliente);
				$location.path("/clientes/lista");
				$scope.edicionHabilitada = false;	
			};
			$scope.actualizar = function(){
				console.log("actualiza");
				console.log($scope.cliente);
				clienteService.actualizar($scope.cliente);
				$location.path("/clientes/lista");
				$scope.edicionHabilitada = false;	
			}
			$scope.init();
		}]);
