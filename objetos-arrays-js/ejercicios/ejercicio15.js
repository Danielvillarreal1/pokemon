//const pokemonTool = require("./functions.js");
const pokemonTool = require('../ejercicios/funtion')

// const { getAttackLog, calculateDamage } = require("./functions.js"); esta es otra forma de importar funciones, conviene cuando son pocas funciones
// const getPokemon = require("./Ejercicio0.js");

const getPokemon = require('../ejercicios/ejercicio0')
const charmander = getPokemon("charmander");
const pikachu = getPokemon("pikachu");
const squirtle = getPokemon("squirtle");
const bulbasaur = getPokemon("bulbasaur");

//battle()
//Crear un función battle que tome como argumentos dos pokémons. La función debe simular una batalla y devolver el resultado de la misma. Las reglas de la misma son:
//Por ronda, cada pokémon ataca al contrario
//Comienza atacando el pokémon con más velocidad (speed)
//La batalla termina cuando la vida (hp, hit points, puntos de golpe) de un pokémon llega a 0 o menos
//El daño se obtiene con la función calculateDamage y se resta a la vida del pokémon atacado
//Se tiene que guardar un registro o historial del ataque en cada turno, usando lo que devuelve la función getAttackLog
//El movimiento se elige de forma aleatoria en cada ataque

let array = [];

// function speed(pokemon1, pokemon2) {
//   if (pokemon1.stats.speed > pokemon2.stats.speed) {
//     return true;
//   } else return false;
// }

function battle(pokemon1, pokemon2) {
  let pokemonAtacanteEsA = speed();
  function speed() {
    if (pokemon1.stats.speed > pokemon2.stats.speed) {
      return true;
    } else return false;
  }
  while (pokemon1.stats.hp > 0 && pokemon2.stats.hp > 0) {
    if (pokemonAtacanteEsA == true) {
      pokemon2.stats.hp =
        pokemon2.stats.hp - pokemonTool.calculateDamage(pokemon1, pokemon2);
      array.push(pokemonTool.getAttackLog(pokemon1, pokemon2));
    } else if (pokemonAtacanteEsA == false) {
      pokemon1.stats.hp =
        pokemon1.stats.hp - pokemonTool.calculateDamage(pokemon2, pokemon1);
      array.push(pokemonTool.getAttackLog(pokemon2, pokemon1));
    }
    pokemonAtacanteEsA = !pokemonAtacanteEsA;
  }
  function winner() {
    if (pokemon1.stats.hp > 0) {
      return [pokemon1.name, pokemon1.stats.hp];
    } else if (pokemon2.stats.hp > 0) {
      return [pokemon2.name, pokemon2.stats.hp];
    }
  }
  function loser() {
    if (pokemon1.stats.hp < 0) {
      return [pokemon1.name, pokemon1.stats.hp];
    } else return [pokemon2.name, pokemon2.stats.hp];
  }
  let pokemonWinner = winner();
  let pokemonLosser = loser();

  const result = {
    rounds: array.length,
    results: {
      winner: {
        name: pokemonWinner[0],
        hp: pokemonWinner[1], // vida restante
      },
      losser: {
        name: pokemonLosser[0],
        hp: pokemonLosser[1],
      },
    },
    history: array,
  };
  return result;
}
console.log(battle(bulbasaur, charmander));