/**
* Anotaciones.js
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
  	descripcion:{
  		type:'string'
  	},
  	contenido:{
  		type:'string',
  		required:true
  	},
   	enlaces:{
  		type:'array'
  	},
  	etiquetas:{
  		type:'array'
  	},
  	observaciones:{
  		type:'array'
  	}
  }
};

