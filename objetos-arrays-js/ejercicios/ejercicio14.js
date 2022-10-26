const getPokemon = require('../ejercicios/ejercicio0')
const squirtle = getPokemon('squirtle')
const charmander = getPokemon('charmander')
// importar getAttackModifier
const {getAttackModifier} = require('../ejercicios/ejercicio12')


/*  calculateDamage()
Crear una función calculateDamage que tome como un argumento un objeto con la siguientes propiedades
attack es el ataque del pokémon que ataca
defense es la defensa del pokémon siendo atacado
modifier el modificador del daño según el tipo del atacante y del atacado y devuelva el daño ocasionado. El daño se calcula con la siguiente fórmula:
0.5 * attack * (attack / defense) * modifier  */

function calculateDamage(pokemon1, pokemon2) {
    const calculateDMG = {
      attack: pokemon1.stats.attack,
      defense: pokemon2.stats.deffense,
      modifier: Math.round(
        0.5 *
          pokemon1.stats.attack *
          (pokemon1.stats.attack / pokemon2.stats.deffense) *
          getAttackModifier(pokemon1, pokemon2)
      ),
    };
    return calculateDMG;
  }
  
  console.log(calculateDamage(squirtle, charmander));

//   { attacker: 'Squirtle', attacked: 'Charmander' }
//   { attack: 48, defense: 43, modifier: 54 }