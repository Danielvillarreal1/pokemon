const getPokemon = require('../ejercicios/ejercicio0')
const bulbasaur = getPokemon('bulbasaur')

// Crear una función getResistances que tome como argumento un pokémon y
//  devuelva la lista de tipos contra los que es resistente

function getResistances(poke){
    return poke.modifiers.resistances
}
console.log(getResistances(bulbasaur))

// module.exports = {getResistances};