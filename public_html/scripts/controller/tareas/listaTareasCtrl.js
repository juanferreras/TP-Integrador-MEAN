angular.module('appTP')
.controller('ListaTareasCtrl',
	['$scope','$location','tareaService', 'proyectoService', 'sweet',
		 function($scope,  $location, tareaService, pryService, sweet) {

      $scope.init = function(){
        pryService.listar().then(
          function() {
            $scope.listaProyectos = pryService.getLista();
          }
        );
      }

      $scope.init();
      $scope.cantFilas = 5;
      $scope.tareaseleccionada = null;

      $scope.guardar = function(tarea){
        tareaService.actualizar(tarea).then(
          function() {
            $scope.refrescar();
          }
        );
      };

      $scope.ver = function(tarea){
        $scope.tareaseleccionada = tarea;
        console.log($scope.tareaseleccionada);
      };
      $scope.cerrar = function(){
        $scope.tareaseleccionada = null;
      };

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

        sweet.show({
            title: 'Confirme',
            text: '¿Desea eliminar esta tarea?',
            type: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function(isConfirm) {
            if (isConfirm) {
                tareaService.borrar(tarea)
                $scope.refrescar();
                sweet.show('¡Eliminado!', 'La tarea ha sido eliminada.', 'success');
            }else{
                sweet.show('Cancelado', 'La tarea no ha sido eliminada.', 'error');
            }
        });

      } 
      $scope.refrescar();

		}

	]
);
