/**
 * UsuariosController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	registro: function(req,res){

		var hasher = require("password-hash"); //para encriptar la contraseña
		usuario = {
		    nombre: req.body.nombre,
		    email: req.body.email,
		    contrasena: hasher.generate(req.body.contrasena),
		    activado: false,
		    codigo_activacion: 'jkhjkjjk2453'
		  };

		Usuarios.findOne({ email: usuario.email }, function(err, usuarioFind) {
			if (err) {
	          res.send(500, { error: "DB Error" });
	      	}else if (usuarioFind) {
	          res.send(400, {error: "El Email ingresado ya ha sido registrado"});
	      	}else{
				Usuarios.create(usuario,function usuarioCreado(err, nuevoUsuario){
					if(err){
						res.send(500, { error: "DB Error" });
					}else{
						res.send(nuevoUsuario);
					}
				});
	      	}
	    });


		
	}

};

