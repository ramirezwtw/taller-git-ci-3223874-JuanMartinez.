function suma(a, b) {
  return a + b;
}

const lista = document.getElementById("lista");

function agregarItem(texto) {
  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = texto;
  lista.appendChild(nuevoItem);
}

document.getElementById("agregarBtn").addEventListener("click", () => {
  agregarItem(`Ítem agregado a las ${new Date().toLocaleTimeString()}`);
});

console.log("App lista");
