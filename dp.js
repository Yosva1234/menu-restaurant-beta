// db.js
const mysql = require('mysql2');

// Configuración de la conexión
const connection = mysql.createConnection({
  host: 'bajha1aig69hxddhmuba-mysql.services.clever-cloud.com',       // Dirección del servidor de la base de datos
  user: 'ulzgopm4nysnylob',            // Usuario de la base de datos
  password: 'MHrcAEuCvfUWJ0GvGNiH', // Contraseña del usuario
  database: 'bajha1aig69hxddhmuba' // Nombre de la base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos MySQL.');
});

module.exports = connection;