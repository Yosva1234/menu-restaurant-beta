const bebidas = [
    { nombre: " cerveza ", precio: 8.50, image:"fotosbebidas/descarga.png" },
    { nombre: "bebida 2", precio: 10.00 },
    { nombre: "bebida 3", precio: 9.00 },
    { nombre: "bebida 4", precio: 15.00 },
    { nombre: "bebida 5", precio: 12.00 },
    { nombre: "bebida 6", precio: 6.00 },
    { nombre: "bebida 7", precio: 6.00 },
    { nombre: "bebida 8", precio: 6.00 },
   
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
        
        
      `;
  
      platosContainer.appendChild(platoElement);
    });
  }
  
  // Llama a la función para mostrar los platos cuando la página se cargue
  window.onload = mostrarPlatos;