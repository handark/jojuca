'use strict'

/**
 ** SERVICIO QUE DEFINE LOS MENUS DE LA APLICACION
**/
app.service('menuService', ['$q', function($q) {

  var menuPagina = [{
      titulo: 'Crear Cuenta',
      ruta: '#/crear-cuenta',
      icono: 'fa fa-user-plus '
  }, {
      titulo: 'Acceder',
      ruta: '#/acceder',
      icono: 'fa fa-sign-in'
  }];

  var menuApp = [{
      titulo: 'Inicio',
      ruta: '#/index',
      icono: 'md md-home'
  },{
      titulo: 'Aplicaciones',
      ruta: '#/aplicaciones/index',
      icono: 'md md-view-module'
  }, {
      titulo: 'Libro de Anotaciones',
      ruta: '#/anotaciones/index',
      icono: 'md md-my-library-books'
  }, {
      titulo: 'Recordatorios',
      ruta: '#/recordatorios/index',
      icono: 'md md-alarm'
  }, {
      titulo: 'Tareas',
      ruta: '#/tareas/index',
      icono: 'md md-view-list'
  }, {
      titulo: 'Marcadores',
      ruta: '#/marcadores/index',
      icono: 'md md-grade'
  }];

  // Promesa
  return {
      cargar: function() {
        return $q.when(menuApp);
          // if(sessionStorage.getItem('usuarioLogueado'))
          //   return $q.when(menuApp);
          // else
          //   return $q.when(menuPagina);
      }
  };
}]);