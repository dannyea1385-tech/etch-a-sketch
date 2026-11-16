const container = document.querySelector("#container");
const btnChange = document.querySelector("#btn-change");

function createGrid(size) {
  // Limpiamos la cuadrícula existente
  container.innerHTML = "";

  const totalSquares = size * size;
  const squareSize = 960 / size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Efecto de dibujo al pasar el ratón
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "#333";
    });

    container.appendChild(square);
  }
}

// 1. Creamos la cuadrícula inicial de 16x16
createGrid(16);

// 2. Programamos el botón para pedir el nuevo tamaño
btnChange.addEventListener("click", () => {
  let userInput = prompt("¿Cuántos cuadrados por lado quieres para la nueva cuadrícula? (Máximo 100)");

  if (userInput === null) return;

  let newSize = parseInt(userInput);

  if (isNaN(newSize) || newSize <= 0) {
    alert("Por favor, ingresa un número válido mayor a 0.");
  } else if (newSize > 100) {
    alert("El número máximo permitido es 100 para evitar sobrecargar el equipo.");
  } else {
    createGrid(newSize);
  }
});