var bulbasaur = require('../data/pikachu.json')
// Crear una función getResistances que tome como argumento un pokémon y
//  devuelva la lista de tipos contra los que es resistente

function getResistances(pokemon){
    return pokemon.modifiers.resistances;
}

resist = getResistances(bulbasaur[3])
console.log(resist)



