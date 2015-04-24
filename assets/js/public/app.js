'use strict'

/**
 ** JOJUCA | Nube de Utilidades de uso diario para mejorar la productividad
 ** Autor: Jose Luis Orozco <handark@gmail.com>
**/
var app = angular.module('JojucaApp', ['ui.utils','ngRoute']);

/**
 ** CONFIGURACION GENERAL DE LA APLICACION
**/
app.config(['$routeProvider',function($routeProvider) {
  
  var routes = [
            'index',
            'aplicaciones/index', 
            'recordatorios/index',
            'tareas/index',
            'anotaciones/index',
            'marcadores/index'
        ]

  var setRoutes = function(route) {
        var config, url;
        url = '/' + route;
        config = {
          templateUrl: 'views/' + route + '.html'
        };
        $routeProvider.when(url, config);
        return $routeProvider;
      };

  routes.forEach(function(route) {
    return setRoutes(route);
  });

  return $routeProvider.when('/', {
      redirectTo: '/index'
    }).when('/404', {
      templateUrl: 'views/pages/404.html'
    }).otherwise({
      redirectTo: '/404'
    });

}]);

/**
 ** CONTROLADOR GLOBAL DE LA APLICACION
**/
app.controller('AppCtrl', ['$scope', function($scope) {


  
}]);

/**
 ** CONTROLADOR DEL HEADER DE LA APLICACION
**/
app.controller('HeaderCtrl', ['$scope', function($scope){
  
}]);

/**
 ** CONTROLADOR DEL MENU LATERAL DE LA APLICACION
**/
app.controller('NavCtrl', ['$scope','menuService', function($scope,menuService){
    
  $scope.selected = null;
  
  cargarMenu();
  
  function cargarMenu() {

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

}]);

