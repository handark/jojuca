/**
* Recordatorios.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	titulo:{
  		type:'string',
  		required:true
  	},
  	descripcion:{
  		type:'string'
  	},
  	fecha_evento:{
  		type:'datetime',
  		required:true
  	},
   	fehca_recordar:{
  		type:'datetime'
  	},
  	estado:{
  		type:'boolean',
  		required:true
  	},
	etiquetas:{
  		type:'array'
  	}
  }
};

