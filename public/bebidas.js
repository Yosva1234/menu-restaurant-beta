

const fs = require('fs');

fs.readFile('bebidas.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const fileContent = data;
    console.log(fileContent);
});


const bebidas = [
    { nombre: " cerveza ", precio: 8.50, image:"fotosbebidas/descarga.png", descripcion:"una bebida energizante"},
  ]

  // Lista de platos (puedes modificarla o cargarla desde una API)
  // Función para mostrar los platos en la página
  function mostrarPlatos() {
    const platosContainer = document.getElementById("platos-container");
  
    // Limpia el contenedor antes de agregar los platos
    platosContainer.innerHTML = "";
  
    // Recorre la lista de platos y crea un elemento para cada uno
    bebidas.forEach((plato) => {
      const platoElement = document.createElement("div");
      platoElement.classList.add("plato");
  
      platoElement.innerHTML = `
        <h3>${plato.nombre + " ------- " + plato.precio.toFixed(2)}  <img src = ${plato.image}></h3>
        <h4>${plato.descripcion}</h4>
      `;
  
      platosContainer.appendChild(platoElement);
    });
  }
  
  // Llama a la función para mostrar los platos cuando la página se cargue
  window.onload = mostrarPlatos;