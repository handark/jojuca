'use strict'

var app = angular.module('JojucaApp', ['ui.utils']);

app.controller('AppCtrl', ['$scope', 'menuService', function($scope, menuService) {

  $scope.selected = null;
  
  cargarMenu();
  
  function cargarMenu() {
    
    $('.button-collapse').sideNav();

    menuService.cargar()
      .then(function(menu){
        $scope.menu = [].concat(menu);
        $scope.selected = $scope.menu[0];
      })
  }

  $scope.abrirEnlace = function (item){
    console.dir(item);
    $scope.selected = item;
  }
  
}])


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
      titulo: 'Aplicaciones',
      ruta: '#/aplicaciones',
      icono: 'icon-apps'
  }, {
      titulo: 'Anotaciones',
      ruta: '#/anotaciones',
      icono: 'icon-apps'
  }, {
      titulo: 'Recordatorios',
      ruta: '#/recordatorios',
      icono: 'icon-apps'
  }, {
      titulo: 'Enlaces',
      ruta: '#/enlaces',
      icono: 'icon-apps'
  }];

  // Promise-based API
  return {
      cargar: function() {
          if(sessionStorage.getItem('usuarioLogueado'))
            return $q.when(menuApp);
          else
            return $q.when(menuPagina);
      }
  };
}]);