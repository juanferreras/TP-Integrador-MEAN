angular.module('appTP').filter("acortar", function () {
   return function (texto, numero) {
      if (!texto) return '';
      if (texto.length <= numero) return texto;

      texto = texto.substr(texto.length - numero);
      return '...' + texto;
  };
});