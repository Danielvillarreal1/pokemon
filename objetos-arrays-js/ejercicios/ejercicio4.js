const getPokemon = require('../ejercicios/ejercicio0')
const bulbasaur = getPokemon('bulbasaur')

// Crear una función getResistances que tome como argumento un pokémon y
//  devuelva la lista de tipos contra los que es resistente

function getResistances(pokemon){
    return pokemon.modifiers.resistances;
}

resist = getResistances(bulbasaur)
console.log(resist)



module.exports = {getResistances};