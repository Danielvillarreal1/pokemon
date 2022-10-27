const getPokemon = require('./ejercicio0.js')
const pikachu = getPokemon('pikachu')
const bulbasaur = getPokemon('bulbasaur')


/* Crear una función getAttackModifier, tome como argumento un objeto con dos propiedades, attacker y attacked,
donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva:
2, si el pokémon atacado es débil (weakness) contra el tipo del pokémon que ataca
0,5, si el pokémon atacado es resistente (resistances) contra el tipo del pokémon que ataca
1, si no es débil ni resistente
*/


function getAttackModifier() {
  const pokemons = { attacker: bulbasaur.name, attacked: pikachu.name };
  console.log(pokemons);
  resistente = pikachu.modifiers.resistances
  tipo = bulbasaur.type
  weakness = pikachu.modifiers.weakness

  if (resistente.find((resi) => resi === tipo)) {
    return 0.5;
  } else if (weakness.find((weak) => weak === tipo)) {
    return 2;
  } else return 1;
}

console.log(getAttackModifier(bulbasaur, pikachu));

// function getResistances(pokemon){
//     return pokemon.modifiers.resistances;
// }
// function getType(pokemon) {
//     return pokemon.type;
//   }
// function getWeaknesses(pokemon) {
//     return pokemon.modifiers.weakness;
// }

// // obtener modificador de ataque

// function getAttackModifier(pokemon1, pokemon2) {
//     const pokemons = { attacker: pokemon1.name, attacked: pokemon2.name };
//     console.log(pokemons);
//     if (
//       getResistances(pokemon2).find(
//         (resistance) => resistance === getType(pokemon1)
//       )
//     ) {
//       return 0.5;
//     } else if (
//       getWeaknesses(pokemon2).find((element) => element === getType(pokemon1))
//     ) {
//       return 2;
//     } else return 1;
//   }
  
//   console.log(getAttackModifier(bulbasaur, pikachu));


module.exports = {getAttackModifier};
