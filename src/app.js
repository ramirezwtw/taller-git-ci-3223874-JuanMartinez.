// src/app.js

function suma(a, b) {
  return a + b;
}

// Asegúrate de que solo exportas la función de negocio
module.exports = {
  suma,
};

// Elimina o comenta las líneas que causan el error:
// const lista = document.getElementById("lista");
// [ ... cualquier otra línea que use document o window ... ]
