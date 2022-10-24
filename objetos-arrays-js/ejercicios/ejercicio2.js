var squirtle = require('../data/pikachu.json')

// Crear una función getPrimaryAbility que tome como argumento un pokémon y devuelva la habilidad primaria


function getPrimaryAbility(pokemon) {
    return pokemon.ability.primary;
}
let moves = getPrimaryAbility(squirtle[1]);
console.log(moves);




// function getPrimaryAbility (){
//     const ej2 = {
//         primaryAbility: squirtle.ability.primary
//     }
//     return ej2;
// }
// let ability = getPrimaryAbility()
// console.log(ability)
