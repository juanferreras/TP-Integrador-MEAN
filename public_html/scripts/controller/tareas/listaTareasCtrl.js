angular.module('appTP')
.controller('ListaTareasCtrl',
	['$scope','$location','tareaService',
		 function($scope,  $location, tareaService) {

      $scope.cantFilas = 5;

      $scope.refrescar = function(){ 
        tareaService.listar().then(
          function() {
            $scope.listaTareas = tareaService.getLista();
          }
        );
      };
      $scope.editar = function(tarea){
        $location.path("/tareas/"+tarea._id);
      };
      $scope.nuevo = function(){ 
        $location.path("/tareas/add");
      };
      $scope.borrar = function(tarea){
        tareaService.borrar(tarea);
        $scope.refrescar();
      } 
      $scope.refrescar();

		}

	]
);
