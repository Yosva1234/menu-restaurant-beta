// Lista de bebidas
const bebidas = [
  { nombre: "Cerveza", precio: 8.50, descripcion: "Una bebida energizante" },
  { nombre: "Bebida 2", precio: 1.928, descripcion: "yy" } // Agrega una imagen y descripción si es necesario
];

// Función para mostrar las bebidas en la página
function mostrarPlatos() {
  const platosContainer = document.getElementById("platos-container");

  // Limpia el contenedor antes de agregar las bebidas
  platosContainer.innerHTML = "";

  // Recorre la lista de bebidas y crea un elemento para cada una
  bebidas.forEach((plato) => {
    const platoElement = document.createElement("div");
    platoElement.classList.add("plato");

    // Construye el contenido HTML para cada bebida
    platoElement.innerHTML = `
      <h3>${plato.nombre} - $${plato.precio.toFixed(2)}</h3>
      ${plato.descripcion ? `<h4>${plato.descripcion}</h4>` : ''}
    `;

    // Agrega el elemento al contenedor
    platosContainer.appendChild(platoElement);
  });
}

// Llama a la función para mostrar las bebidas cuando la página se cargue
window.onload = mostrarPlatos;

