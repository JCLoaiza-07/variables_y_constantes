const peso = parseFloat(prompt("¿Cuál es tu peso?"));
const altura = parseFloat(prompt("¿Cuál es tu altura?"));

const imc = peso/altura**2;

console.log(`Tu IMC es ${imc}`);