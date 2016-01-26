angular.module('appTP')
.controller('GestionClientesCtrl',
		['$scope','$location','clienteService','$routeParams',
		 function($scope,  $location,clientesDAO,$routeParams) {
			//funcion inicializadora
			$scope.init = function(){
				$scope.edicionHabilitada = true;
					if($routeParams.id==='add'){
						$scope.operacion = "Nuevo Cliente";
						console.log($routeParams.id+ " nuevo");
					}else{
						clientesDAO.buscar($routeParams.id)
						.then(
							function() {
								$scope.cliente = clientesDAO.get();
							}
						);
						$scope.operacion = "Editar Cliente";
					};
			};
			$scope.guardar = function(){
				console.log("guarda");
				console.log($scope.cliente);
				clientesDAO.guardar($scope.cliente);
				$scope.edicionHabilitada = false;	
			};
			$scope.actualizar = function(){
				console.log("actualiza");
				console.log($scope.cliente);
				clientesDAO.actualizar($scope.cliente);		
				$scope.edicionHabilitada = false;	
			}
			$scope.init();
		}]);
