const getPokemon = require("../ejercicios/ejercicio0.js");
const charmander = getPokemon("charmander");

// Crear una función getWeaknesses que tome como argumento un pokémon y devuelva la lista de tipos 
//contra los que es débil

function getWeaknesses(pokemon) {
        return pokemon.modifiers.weakness;
}
const tipos = getWeaknesses(charmander)
console.log(tipos)