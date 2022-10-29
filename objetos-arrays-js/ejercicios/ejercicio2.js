const getPokemon = require("../ejercicios/ejercicio0.js");
const squirtle = getPokemon("squirtle");

// Crear una función getPrimaryAbility que tome como argumento un pokémon y devuelva la habilidad primaria

function getPrimaryAbility(poke){
    return poke.ability.primary
}
console.log(getPrimaryAbility(squirtle))