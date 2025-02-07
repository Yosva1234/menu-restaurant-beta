// Lista de platos (puedes modificarla o cargarla desde una API)
const platos = [
  { nombre: "Ensalada César", precio: 8.50,  },
  { nombre: "Pizza Margarita", precio: 10.00 },
  { nombre: "Hamburguesa Clásica", precio: 9.00 },
  { nombre: "Sushi Variado", precio: 15.00 },
  { nombre: "Pasta Alfredo", precio: 12.00 },
  { nombre: "Tarta de Chocolate", precio: 6.00 },
  { nombre: "Tarta de Chocolate", precio: 6.00 },
  { nombre: "Tarta de Chocolate", precio: 6.00 },
  { nombre: "Tarta de Chocolate", precio: 6.00 },
];

// Función para mostrar los platos en la página
function mostrarPlatos() {
  const platosContainer = document.getElementById("platos-container");

  // Limpia el contenedor antes de agregar los platos
  platosContainer.innerHTML = "";

  // Recorre la lista de platos y crea un elemento para cada uno
  platos.forEach((plato) => {
    const platoElement = document.createElement("div");
    platoElement.classList.add("plato");

    platoElement.innerHTML = `
      <h3>${plato.nombre}</h3>
      <p>Precio: $${plato.precio.toFixed(2)}</p>
    `;

    platosContainer.appendChild(platoElement);
  });
}

// Llama a la función para mostrar los platos cuando la página se cargue
window.onload = mostrarPlatos;