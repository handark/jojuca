/**
* Aplicaciones.js
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
  	icono:{
  		type:'string'
  	},
   	url:{
  		type:'string',
  		required:true
  	},
  	etiquetas:{
  		type:'array'
  	}
  }
};

