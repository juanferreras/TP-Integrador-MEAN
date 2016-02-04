angular.module('appTP', ['ngRoute','ui.bootstrap', 'angular-intro', 'hSweetAlert'])
	.constant('URL_CLIENTES','http://localhost:8080/clientes')
  .constant('URL_PROYECTOS','http://localhost:8080/proyectos')
  .constant('URL_TAREAS','http://localhost:8080/tareas')
	.config(function($routeProvider) {
		$routeProvider.when('/home', {
			controller : 'HomeCtrl',
			templateUrl : 'vistas/home.html'
		}).when('/clientes/lista', {
			controller : 'ListaClientesCtrl',
			templateUrl : 'vistas/clientes/lista.html'
		}).when('/clientes/:id', {
			controller : 'GestionClientesCtrl',
			templateUrl : 'vistas/clientes/datos.html'
		}).when('/clientes/add', {
			controller : 'GestionClientesCtrl',
			templateUrl : 'vistas/clientes/datos.html'
		}).when('/proyectos/lista', {
			controller : 'ListaProyectosCtrl',
			templateUrl : 'vistas/proyectos/lista.html'
		}).when('/proyectos/add', {
			controller : 'GestionProyectosCtrl',
			templateUrl : 'vistas/proyectos/datos.html'
		}).when('/proyectos/:id', {
			controller : 'GestionProyectosCtrl',
			templateUrl : 'vistas/proyectos/datos.html'
		}).when('/tareas/lista', {
			controller : 'ListaTareasCtrl',
			templateUrl : 'vistas/tareas/lista.html'
		}).when('/tareas/add', {
			controller : 'GestionTareasCtrl',
			templateUrl : 'vistas/tareas/datos.html'
		}).when('/tareas/:id', {
			controller : 'GestionTareasCtrl',
			templateUrl : 'vistas/tareas/datos.html'
		}).otherwise({
			redirectTo: "/home"
		});
	});