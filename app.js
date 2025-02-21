// Importar módulos necesarios
const express = require('express');
const mysql = require('mysql2');
const path = require('path');

// Crear una instancia de Express
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'bajha1aig69hxddhmuba-mysql.services.clever-cloud.com',// Dirección del servidor de la base de datos
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

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal: sirve el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta de ejemplo: obtener datos de la base de datos
app.get('/usuarios', (req, res) => {
  const query = 'SELECT * FROM bebidas'; // Cambia "usuarios" por el nombre de tu tabla

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err.stack);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results); // Enviar los resultados como JSON
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});