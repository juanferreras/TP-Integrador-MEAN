angular.module('appTP').factory('proyectoService',
		['$http','$q','URL_PROYECTOS',
		 function($http,$q,baseUrl) {
			var _lista=[];
			var _elementoEncontrado;
			var _agregar = function(objeto){
				console.log('servicio agregar');
				console.log(objeto);
				$http.post(baseUrl,objeto).
				  success(function(data, status, headers, config) {
						_lista.push(objeto);
				  }).
				  error(function(data, status, headers, config) {
					  console.log(data);					  
				  });			
			};
			var _actualizar= function(objeto){
				$http.put(baseUrl,objeto).
				  success(function(data, status, headers, config) {
					  console.log(data);
					  // actualizo la lista
					  _listar();
				  }).
				  error(function(data, status, headers, config) {
					  console.log(data);
				  });			
			};
			var _borrar= function(objeto){
				$http.delete(baseUrl,objeto).
				  success(function(data, status, headers, config) {
					  console.log(data);
					  // actualizo la lista
					  _listar();
				  }).
				  error(function(data, status, headers, config) {
					  console.log(data);
				  });			
			};
			var _buscar= function(objeto) {
				var deffered = $q.defer();
				$http.get(baseUrl+"/"+objeto).success(
					function(data, status, headers, config) {
						_elementoEncontrado = data;
						deffered.resolve();
				}).error(function(data, status, headers, config) {
					  console.log(data);
					  console.log(status);
				  });
				return deffered.promise;
			};
			var _listar= function(){
				var deffered = $q.defer();
				$http.get(baseUrl).success(
					function(data, status, headers, config) {
						_lista = data;
						console.log(data);
						deffered.resolve(data);
				}).error(function(data, status, headers, config) {
					  console.log(data);
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