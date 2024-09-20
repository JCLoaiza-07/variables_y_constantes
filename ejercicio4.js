const name = prompt("¿Cuál es tu nombre?");

const birthYear = parseInt(prompt("¿Cuál es tu año de nacimiento?"));

const year = 2023 - birthYear;

console.log(`Hola ${name}, tienes ${year}`);