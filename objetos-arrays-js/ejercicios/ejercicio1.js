const getPokemon = require("../ejercicios/ejercicio0.js");
const pikachu = getPokemon("pikachu");

// Crear una función getMoves que tome como argumento un pokémon y devuelva la lista de movimientos

function getMoves(poke){
    return poke.moves
}
console.log(getMoves(pikachu))


