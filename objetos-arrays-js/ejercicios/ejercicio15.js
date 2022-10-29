const getPokemon = require('../ejercicios/ejercicio0')
const charmander = getPokemon('charmander')
const pikachu = getPokemon("pikachu");

//battle()
//Crear un función battle que tome como argumentos dos pokémons. La función debe simular una batalla y devolver el resultado de la misma. Las reglas de la misma son:
//Por ronda, cada pokémon ataca al contrario
//Comienza atacando el pokémon con más velocidad (speed)
//La batalla termina cuando la vida (hp, hit points, puntos de golpe) de un pokémon llega a 0 o menos
//El daño se obtiene con la función calculateDamage y se resta a la vida del pokémon atacado
//Se tiene que guardar un registro o historial del ataque en cada turno, usando lo que devuelve la función getAttackLog
//El movimiento se elige de forma aleatoria en cada ataque


//getAttackModifier()
function getAttackModifier(charmander, pikachu) {
    //const pokemons = { attacker: bulbasaur.name, attacked: pikachu.name };
    resistente = pikachu.modifiers.resistances
    tipo = charmander.type
    weakness = pikachu.modifiers.weakness

    if (resistente.find((resi) => resi === tipo)) {
      return 0.5;
    } else if (weakness.find((weak) => weak === tipo)) {
      return 2;
    } else return 1;
  }


//prhase()
function phrase(charmander, pikachu) {
    if (getAttackModifier(charmander, pikachu) == 2) {
      return "It's Very Efective!";
    } else if (getAttackModifier(charmander, pikachu) == 1) {
      return "It's Efective!";
    } else return "It's not Very Efective!";
  }
  //getAttackLog()
  function getAttackLog(charmander, pikachu) {
    const battle = {
      attacker: charmander.name,
      attacked: pikachu.name,  
      move: pikachu.moves,
      damage: "12",
      modifier: phrase(charmander, pikachu),
    };
    return `${battle.attacker} used ${battle.move}! ${
      battle.attacked
    } lost ${calculateDamage(charmander, pikachu)} HP! ${battle.modifier}`;
  }
  

function calculateDamage(charmander, pikachu) {
    const calculateDMG = {
      attack: charmander.stats.attack,
      defense: pikachu.stats.deffense,
      modifier: Math.round(0.5 * charmander.stats.attack *(charmander.stats.attack / pikachu.stats.deffense) *
          getAttackModifier(charmander, pikachu)
      ),
    };
    return calculateDMG.modifier;
  }
console.log('********************************************')


let array = [];

// const pokemonFasterComparer= (pokemon1, pokemon2) => pokemon1.stats.speed > pokemon2.stats.speed;

function pokemonFasterComparer(charmander, pikachu) {
  return charmander.stats.speed > pikachu.stats.speed;
}

function calcularCombatientes(charmander, pikachu, pokemonAtacanteCharmander) {
  let campoDeBattalla = {
    pokemonAtacante: null,
    pokemonDefensor: null,
  };
  if (pokemonAtacanteCharmander) {
    campoDeBattalla.pokemonAtacante = charmander;
    campoDeBattalla.pokemonDefensor = pikachu;
  } else {
    campoDeBattalla.pokemonAtacante = pikachu;
    campoDeBattalla.pokemonDefensor = charmander;
  }
  return campoDeBattalla;
}

function battle(charmander, pikachu) {
  let pokemonAtacanteCharmander = pokemonFasterComparer(charmander, pikachu);

  let vidaCharmander = charmander.stats.hp;
  let vidaPikachu = pikachu.stats.hp;

  while (vidaCharmander > 0 && vidaPikachu > 0) {
    let { pokemonAtacante, pokemonDefensor } = calcularCombatientes(
      charmander,
      pikachu,
      pokemonAtacanteCharmander
    );

    let damage = calculateDamage(pokemonAtacante, pokemonDefensor);
    array.push(getAttackLog(pokemonAtacante, pokemonDefensor));

    if (pokemonAtacanteCharmander) {
      vidaPikachu -= damage;
    } else {
      vidaCharmander -= damage;
    }

    // pokemonAtacanteEs1 ?  vidaPokemon2 -= damage : vidaPokemon1 -= damage; //Operador ternario

    pokemonAtacanteCharmander = !pokemonAtacanteCharmander;
  }

  let pokemonWinner = vidaCharmander > 0 ? charmander.name : pikachu.name;
  let pokemonLosser = vidaCharmander < 0 ? charmander.name : pikachu.name;

  let pokemonVidaWinner = vidaCharmander > 0 ? vidaCharmander : vidaPikachu;
  let pokemonVidaLosser = vidaCharmander < 0 ? vidaCharmander : vidaPikachu;

  const result = {
    rounds: array.length,
    results: {
      winner: {
        name: pokemonWinner,
        hp: pokemonVidaWinner, // vida restante
      },
      losser: {
        name: pokemonLosser,
        hp: pokemonVidaLosser,
      },
    },
    history: array,
  };
  return result;
}
console.log(battle(charmander, pikachu));




module.exports = { battle };


// {
//     rounds: 3,
//     results: {
//       winner: { name: 'Pikachu', hp: 1 },
//       losser: { name: 'Charmander', hp: -31 }
//     },
//     history: [
//       "Pikachu used Iron Tail! Charmander lost 35 HP! It's Efective!",
//       "Charmander used Flamethrower! Pikachu lost 34 HP! It's Efective!",
//       "Pikachu used Thunderbolt! Charmander lost 35 HP! It's Efective!"
//     ]
//   }