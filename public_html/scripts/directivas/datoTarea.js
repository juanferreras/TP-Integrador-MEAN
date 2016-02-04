angular.module('appTP').directive('datotarea', function () {
  return {
    templateUrl: 'vistas/tareas/info.html',
    replace : true,
    restrict : 'AECM',
    scope: {
      tareaseleccionada : '=',
      cerrar:'&'
    }
  };
});