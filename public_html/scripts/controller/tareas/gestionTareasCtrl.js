angular.module('appTP')
.controller('GestionTareasCtrl',
		['$scope','$location','$routeParams','tareaService','proyectoService',
		 function($scope,  $location,$routeParams,tareaService,pryService) {
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
        if($scope.tarea._id) tareaService.actualizar($scope.tarea);
        else tareaService.guardar($scope.tarea);
        $location.path("/tareas/lista");
      }
      $scope.buscarProyecto = function(){        
        tareaService.buscar($scope.tarea._id)
        .then(
            function() {
              $scope.tarea = tareaService.get();
            }
          );
      }
		}]);
