/**
* Usuarios.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	nombre:{
  		type:'string',
  		required:true
  	},
  	email:{
  		type:'email',
  		required:true
  	},
  	contrasena:{
  		type:'string',
  		required:true
  	},
  	activado:{
  		type:'boolean'
  	},
  	codigo_activacion:{
  		type:'string'
  	}
  }

};

