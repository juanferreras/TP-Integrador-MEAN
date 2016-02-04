angular.module('appTP')
.controller('GestionClientesCtrl',
		['$scope','$location','clienteService','$routeParams', 'sweet',
		 function($scope,  $location, clienteService, $routeParams, sweet) {
			//funcion inicializadora
			$scope.init = function(){
				$scope.edicionHabilitada = true;
					if($routeParams.id==='add'){
						$scope.operacion = "Nuevo Cliente";
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
				clienteService.guardar($scope.cliente);

				sweet.show({
            title: '¡Perfecto!',
            text: 'Su cliente ha sido cargado con éxito.',
            type: 'success',
            confirmButtonText: 'Volver'
        }, function() {
						$location.path("/clientes/lista");
						if(!$scope.$$phase) $scope.$apply()
        });

				$scope.edicionHabilitada = false;	
			};
			$scope.actualizar = function(){
				clienteService.actualizar($scope.cliente);

				sweet.show({
            title: '¡Perfecto!',
            text: 'Su cliente ha sido actualizado con éxito.',
            type: 'success',
            confirmButtonText: 'Volver'
        }, function() {
						$location.path("/clientes/lista");
						if(!$scope.$$phase) $scope.$apply()
        });

				$scope.edicionHabilitada = false;	
			}
			$scope.init();
		}]);
