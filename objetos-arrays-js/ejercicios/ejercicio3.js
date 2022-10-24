var charmander = require('../data/pikachu.json')

// Crear una función getWeaknesses que tome como argumento un pokémon y devuelva la lista de tipos 
//contra los que es débil

function getWeaknesses(pokemon) {
        return pokemon.modifiers.weakness;
}
const tipos = getWeaknesses(charmander[2])
console.log(tipos)