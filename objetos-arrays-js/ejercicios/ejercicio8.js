const getPokemon = require('../ejercicios/ejercicio0')
const pikachu = getPokemon('pikachu')
const squirtle = getPokemon('squirtle')

//Crear una función isStrongAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked,
//  donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el 
// pokémon atacado es resistente al tipo de pokémon que lo ataca

function getType(pokemon1) {
    return pokemon1.type;
  }
function getResistances(pokemon2){
    return pokemon2.modifiers.resistances;
}  
  
// es fuerte en contra
function isStrongAgainst(pokemon1, pokemon2) {
    let resistance = getResistances(pokemon2);
    const pokemons = { attacker: pokemon1.name, attacked: pokemon2.name };
    console.log(pokemons);
    if (resistance.find((resist) => resist === getType(pokemon1))) {
      return true;
    } else return false;
  }
  
  let Resistances = isStrongAgainst(squirtle, pikachu);
  console.log(Resistances);