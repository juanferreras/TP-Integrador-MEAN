angular.module('appTP').factory('proyectoService',
		['$http','$q','URL_PROYECTOS',
		 function($http,$q,baseUrl) {
			var _lista=[];
			var _elementoEncontrado;
			var _agregar = function(objeto){
				var deffered = $q.defer();
				$http.post(baseUrl,objeto).
				  success(function(data, status, headers, config) {
						_lista.push(objeto);
						deffered.resolve();
				  }).
				  error(function(data, status, headers, config) {
					  console.log("Error", status, data);		
					  deffered.reject();
				  });			
			  return deffered.promise;
			};
			var _actualizar= function(objeto){
				var deffered = $q.defer();
				$http.put(baseUrl,objeto).
				  success(function(data, status, headers, config) {
					  // actualizo la lista
					  _listar();
					  deffered.resolve();
				  }).
				  error(function(data, status, headers, config) {
					  console.log("Error", status, data);
					  deffered.reject();
				  });		
			  return deffered.promise;	
			};
			var _borrar= function(objeto){
				$http.delete(baseUrl+"/"+objeto._id).
				  success(function(data, status, headers, config) {
					  // actualizo la lista
					  _listar();
				  }).
				  error(function(data, status, headers, config) {
					  console.log("Error", status, data);
				  });			
			};
			var _buscar= function(objeto) {
				var deffered = $q.defer();
				$http.get(baseUrl+"/"+objeto).success(
					function(data, status, headers, config) {
						_elementoEncontrado = data;
						deffered.resolve();
				}).error(function(data, status, headers, config) {
					  console.log("Error", status, data);
				  });
				return deffered.promise;
			};
			var _listar= function(){
				var deffered = $q.defer();
				$http.get(baseUrl).success(
					function(data, status, headers, config) {
						_lista = data;
						deffered.resolve(data);
				}).error(function(data, status, headers, config) {
					  console.log("Error", status, data);
				  });
				return deffered.promise;
			};
			return{
				buscar:_buscar,
				guardar: _agregar,
				actualizar:_actualizar,
				borrar : _borrar,
				listar:_listar,
				getLista : function(){return _lista; },
				get : function(){return _elementoEncontrado; }
			}
}]);