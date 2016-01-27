angular.module('appTP')
.controller('TutorialCtrl',
    ['$scope', '$location',
     function($scope, $location) {
      $scope.arrancarAutomaticamente = typeof $location.search().tutorial == "undefined" ? false : true;
      $scope.tutorialOptions = {
        steps:[
        {
            intro: "Bienivenido al tutorial del Sistema de gestión de proyectos ágiles."
        },
        {
            element: '#step2',
            intro: "Seleccione aquí para ver el listado de Proyectos.",
            position: 'bottom'
        },
        {
            element: '#step3',
            intro: "Seleccione aquí para ver el listado de Clientes.",
            position: 'bottom'
        },
        {
            element: '#step4',
            intro: "Seleccione aquí para ver el listado de Historias de Usuario.",
            position: 'bottom'
        },
        {
            intro: "Gracias por utilizar nuestro sistema."
        }
        ],
        showStepNumbers: false,
        exitOnOverlayClick: true,
        exitOnEsc:true,
        nextLabel: 'Siguiente',
        prevLabel: 'Anterior',
        skipLabel: 'Salir',
        doneLabel: 'Gracias!'
      };
    }]);
