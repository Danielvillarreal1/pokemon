const getPokemon = require("../ejercicios/ejercicio0.js");
const pikachu = getPokemon("pikachu");

// Crear una función getMoves que tome como argumento un pokémon y devuelva la lista de movimientos

function getMoves(pokemon) {
    return pokemon.moves;
  }
let moves = getMoves(pikachu);
console.log(moves);


