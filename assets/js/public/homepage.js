'use strict'

app.controller('IngresoUsuariosCtrl', ['$scope','$http', function($scope,$http){
  
  // Ejecutar el submit del form de ingreso al presionar enter en un input
  $scope.submitFormIngreso = function($event) {
      $("#formIngreso").submit();
      $event.preventDefault();
  };

  $('#modalIngresar').on('shown.bs.modal', function () {
    $('#ingresoEmail').focus()
  });

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

app.controller('RecordarContrasenaCtrl', ['$scope','$http', function($scope,$http){
    // Ejecutar el submit del form de ingreso al presionar enter en un input
  $scope.submitFormRecordarContrasena = function($event) {
      $("#formRecordarContrasena").submit();
      $event.preventDefault();
  };

  $('#modalRecordarContrasena').on('shown.bs.modal', function () {
  	$('#modalIngresar').modal('toggle');
    $('#recordarContrasenaEmail').focus();
  });

  $("#formRecordarContrasena").validate({
    focusInvalid: false,
    rules: {
      recordarContrasenaEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      recordarContrasenaEmail: {
        required: "El campo Correo Electronico es requerido",
        email: "Por favor ingresa una dirección de Correo Electronico correcta, ejm: nombre@jojuca.com"
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