var mysql = require('mysql');
//Funcion para conectar a la base de datos
function BD(){
	 var conexion = mysql.createConnection({
		 host: 'localhost',
		 user: 'root',
		 //password: 'cr',
		 port: 3306,
		 database: 'clasifica_empresa'
	  });
}

module.exports = BD;

