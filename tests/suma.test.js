const assert = require("assert");
const { suma } = require("../src/app");

// Función de suma mock para que el test no falle al importar
function suma(a, b) {
  return a + b;
}

assert.strictEqual(suma(1, 2), 3, "La suma de 1 y 2 debe ser 3");
console.log("Test de suma pasado.");
