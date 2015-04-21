var app = angular.module('JojucaApp', []);

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

app.controller('IngresoUsuariosCtrl', ['$scope','$http', function($scope,$http){
  

  $("#formIngreso").validate({
    focusInvalid: false,
    rules: {
      ingresoEmail: {
        required: true,
        email: true
      },
      ingresoContrasena:{
        required: true,
        minlength: 8
      }
    },
    messages: {
      ingresoEmail: {
        required: "El campo Correo Electronico es requerido",
        email: "Por favor ingresa una dirección de Correo Electronico correcta, ejm: nombre@jojuca.com"
      },
      ingresoContrasena: {
        required: "El campo Contraseña es requerido",
        minlength: "La contraseña debe contener al menos 8 caracteres"
      }
    },
    submitHandler: function(form) {

    }
  });


}])

app.controller('RegistroUsuariosCtrl', ['$scope','$http', function($scope,$http){

  $scope.registro = {
    nombre:'Jose Orozco',
    email: 'handark@gmail.com',
    contrasena:'12345678',
    verificaContrasena: '12345678',
    guardando: false,
    errores:false,
    errorDescripcion:''
  };

      
  $("#formRegistro").validate({
    focusInvalid: false,
    rules: {
      nombre: "required",
      email: {
        required: true,
        email: true
      },
      contrasena:{
        required: true,
        minlength: 8
      },
      verificaContrasena: {
        required: true,
        minlength: 8,
        equalTo: "#contrasena"
      }
    },
    messages: {
      nombre: "El campo Nombre es requerido",
      email: {
        required: "El campo Correo Electronico es requerido",
        email: "Por favor ingresa una dirección de Correo Electronico correcta, ejm: nombre@jojuca.com"
      },
      contrasena: {
        required: "El campo Contraseña es requerido",
        minlength: "La contraseña debe contener al menos 8 caracteres"
      },
      verificaContrasena:  {
        required: "El campo Verificar Contraseña es requerido",
        equalTo: "El campo Contraseña y Verificar Contraseña deben ser iguales"
      },
    },
    submitHandler: function(form) {

      $scope.registro.guardando = true;

      $http.post('/usuarios/registro', $scope.registro)
      .then(function onSuccess(sailsResponse){
        console.dir(sailsResponse);
      })
      .catch(function onError(sailsResponse){
        $scope.registro.errorDescripcion = sailsResponse.data.error;
        $scope.registro.errores = true;
      })
      .finally(function eitherWay(){
        $scope.registro.guardando = false;

      })

    }
  });


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