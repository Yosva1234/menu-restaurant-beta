const express = require('express');
const path = require('path');
const mysql = require('mysql2'); // Importar mysql2

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración del pool de conexiones a MySQL
const pool = mysql.createPool({
  host: 'bajha1aig69hxddhmuba-mysql.services.clever-cloud.com', // Dirección del servidor de la base de datos
  user: 'ulzgopm4nysnylob', // Usuario de la base de datos
  password: 'MHrcAEuCvfUWJ0GvGNiH', // Contraseña del usuario
  database: 'bajha1aig69hxddhmuba', // Nombre de la base de datos
  waitForConnections: true, // Esperar si no hay conexiones disponibles
  connectionLimit: 10, // Número máximo de conexiones en el pool
  queueLimit: 0 // Número máximo de solicitudes en cola (0 = sin límite)
});

// Verificar la conexión al pool
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos MySQL.');
  connection.release(); // Liberar la conexión al pool
});

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta de ejemplo: obtener datos de la base de datos
app.get('/bebidas', (req, res) => {
  const query = 'SELECT * FROM bebidas'; // Cambia "usuarios" por el nombre de tu tabla

  // Usar el pool para ejecutar la consulta
  pool.query(query, (err, results) => {
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

// Cerrar el pool al detener la aplicación
process.on('SIGINT', () => {
  pool.end(); // Cerrar el pool de conexiones
  process.exit(); // Salir de la aplicación
});