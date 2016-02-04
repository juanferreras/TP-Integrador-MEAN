angular.module('appTP')
.controller('GestionTareasCtrl',
		['$scope','$location','$routeParams','tareaService','proyectoService', 'sweet',
		 function($scope,  $location,$routeParams,tareaService,pryService, sweet) {
			//funcion inicializadora
			$scope.init = function(){
        $scope.tarea = {}; // creo el proyecto como un objeto vacio cuando inicia el controlador
        if($routeParams.id) {
           $scope.tarea._id = $routeParams.id; 
           $scope.operacion= "Editar";
        } else  $scope.operacion= "Nuevo";

        pryService.listar().then(
          function() {
            $scope.listaProyectos = pryService.getLista();
            if($scope.tarea._id) $scope.buscarProyecto();
          }
        );
      };
      $scope.init();
      $scope.guardar = function(){
        if($scope.tarea._id) {
          tareaService.actualizar($scope.tarea);
          sweet.show({
              title: '¡Perfecto!',
              text: 'Su historia de usuario ha sido actualizada con éxito.',
              type: 'success',
              confirmButtonText: 'Volver'
          }, function() {
              $location.path("/tareas/lista");
              if(!$scope.$$phase) $scope.$apply()
          });
        }
        else {
          tareaService.guardar($scope.tarea);
          sweet.show({
              title: '¡Perfecto!',
              text: 'Su historia de usuario ha sido cargada con éxito.',
              type: 'success',
              confirmButtonText: 'Volver'
          }, function() {
              $location.path("/tareas/lista");
              if(!$scope.$$phase) $scope.$apply()
          });
        }
      }
      $scope.buscarProyecto = function(){        
        tareaService.buscar($scope.tarea._id)
        .then(
            function() {
              $scope.tarea = tareaService.get();
            }
          );
      }
      $scope.cancelar = function(){
        $location.path("/tareas/lista");
      }
		}]);
