const getPokemon = require("../ejercicios/ejercicio0");
const pikachu = getPokemon("pikachu");
const bulbasaur = getPokemon("bulbasaur");
const charmander = getPokemon("charmander");
const squirtle = getPokemon("squirtle");

// const {battle} = require('../ejercicios/ejercicio15')

// 1 Crear una función getMoves que tome como argumento un pokémon y devuelva la lista de movimientos
console.log('ejercicio 1') 

function getMoves(poke){
    return poke.moves
}
console.log(getMoves(pikachu))

//getRandomMove funcion randon que obtiene los movimientos aleatoriamente de los distintos pokemones
function getRandomMove(pokemon) {
    let move = pokemon.moves[Math.floor(Math.random() * pokemon.moves.length)];
    return move;
  }

// 2 Crear una función getPrimaryAbility que tome como argumento un pokémon y devuelva la habilidad primaria
console.log('\n ejercicio: 2 Primary Hability')
function getPrimaryAbility(poke){
    return poke.ability.primary
}
console.log(getPrimaryAbility(squirtle))

// 3 weakness
// Crear una función getWeaknesses que tome como argumento un pokémon y devuelva la lista de tipos 
//contra los que es débil
console.log('\n ejercicio: 3 weakness')
function getWeaknesses(poke){
    return poke.modifiers.weakness
}
console.log(getWeaknesses(charmander))
 

// 4 resistances
// Crear una función getResistances que tome como argumento un pokémon y
//  devuelva la lista de tipos contra los que es resistente
console.log('\n ejercicio: 4 weakness')

function getResistances(poke){
    return poke.modifiers.resistances
}
console.log(getResistances(bulbasaur))

// 5 resiststype
// Crear una función resistsType que tome como argumentos un pokémon y un tipo y
// devuelva true si el pokémon es resistente a dicho tipo
console.log('\n ejercicio: 5 resiststype')

function resistsType(poke, tipo){
    resist= poke.modifiers.resistances
    console.log(resist)
    
    if(resist.find((res) => res === tipo)){
        return true;
    }else return false
}
console.log(resistsType(squirtle, tipo='steel' ))

//  getType

function getType(pokemon) {
  return pokemon.type;
}

//console.log(getType(pikachu));

// 6 resistmove
console.log('\n ejercicio: 6 resistmove')
// Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el 
//pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo,
// p. ej.: { name: "Rain dance", type: "water" }

function resistsMove(poke, movimiento){
    movimientos = poke.moves
    console.log(movimientos)

    if(movimientos.find((mov) => mov === movimiento)){
        return true;
    }else return false;
}
console.log(resistsMove(pikachu, movimienot='Quick Attack'))

// 7 isWeakAgainst()
// Crear una función isWeakAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, 
// donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon
// atacado es débil frente al tipo de pokémon que lo ataca
console.log('\n ejercicio:  7 isWeakAgainst')

function isWeakAgainst(pokemon1, pokemon2) {
  let weakness = getWeaknesses(pokemon2);
  const pokemons = { attacker: pokemon1.name, attacked: pokemon2.name };
  console.log(pokemons);
  if (weakness.find((weak) => weak === getType(pokemon1))) {
    return true;
  } else return false;
}

console.log(isWeakAgainst(charmander, squirtle));

// 8 isStrongAgainst()
console.log('\n ejercicio: 8 isStrongAgainst')
//Crear una función isStrongAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked,
//  donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el 
// pokémon atacado es resistente al tipo de pokémon que lo ataca

// es fuerte en contra
function isStrongAgainst(pikachum, squirtle){
    let resistente = pikachu.modifiers.resistances;
    let tipo = squirtle.type;
    const pokemones = { attacker: squirtle.name, attacked: pikachu.name}
    console.log(pokemones)

    if(resistente.find((resi) => resi === tipo)){
        return true;
    }else return false;
}
console.log(isStrongAgainst(pikachu, squirtle))

// 9 addAbility
console.log('\n ejercicio: 9 addAbility')
// Crear una función addAbility que tome como argumentos un pokémon y un objeto con un tipo de habilidad y
//  el nombre de la misma (p. ej.: { secondary: "Discharge" }) y devuelva el pokémon con la habilidad agregada

function addAbility(pokemon){
    return  {ability : {...pokemon.ability, secundary:"Dischange"}}  
}
console.log(addAbility(bulbasaur))

// 10 addMove
console.log('\n ejercicio: 10 addMove')
// Crear una función addMove que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento
// a su lista y devuelva el pokémon con el movimiento agregado

const addMove = (pokemon, movi)=>{
    pokemon = {moves: [...pikachu.moves, movi] }
    return pokemon 
}
const mov = addMove(pikachu, "another move");
console.log(mov)


// 11 removeMove
console.log('\n ejercicio: 11 removeMove')
// Crear una función removeMove que tome como argumentos un pokémon y un movimiento, elimine dicho
//  movimiento de su lista y devuelva el pokémon con el movimiento agregado? eliminado?

const removeMove = (pokemon, movi) => {
    movi = pokemon.moves.splice(2, 1); // elimine posicion 0,1,2  etc 
    return squirtle;
  };
  const move = removeMove(squirtle);
  console.log(move);


// 12 getAttackModifier
console.log('\n ejercicio: 12 getAttackModifier')
/* Crear una función getAttackModifier, tome como argumento un objeto con dos propiedades, attacker y attacked,
donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva:
2, si el pokémon atacado es débil (weakness) contra el tipo del pokémon que ataca
0,5, si el pokémon atacado es resistente (resistances) contra el tipo del pokémon que ataca
1, si no es débil ni resistente
*/

function getAttackModifier(pokemon1, pokemon2) {
  const pokemons = { attacker: pokemon1.name, attacked: pokemon2.name };
  console.log(pokemons);
  if (
    getResistances(pokemon2).find(
      (resistance) => resistance === getType(pokemon1)
    )
  ) {
    return 0.5;
  } else if (
    getWeaknesses(pokemon2).find((element) => element === getType(pokemon1))
  ) {
    return 2;
  } else return 1;
}

console.log(getAttackModifier(bulbasaur, pikachu));

// 13 getAttackLog
console.log('\n ejercicio:  13 getAttackLog')
/* Crear una función getAttackLog, que tome como argumento un objeto con las siguientes propiedades:
{
    attacker: "Squirtle",
    attacked: "Pikachu",
    move: "Water Gun",
    damage: 12,
    modifier: "weak" // otros valores: "resistant", "normal"
}
Y que devuelve un string con la siguiente plantilla:

`${attacker} used ${move}! ${attacked} lost ${damage} HP!`
Por ejemplo:

"Squirtle used Water Gun! Pikachu lost 12 HP!"
Si el pokémon es débil contra el tipo de su atacante, se debe agregar It's super effective!, si es resistente, se debe agregar It's not very effective!, por ejemplo:

"Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!" */

function getAttackLog(pokemon1, pokemon2) {
  const battle = {
    attacker: pokemon1.name,
    attacked: pokemon2.name,
    move: pokemon1.moves[2],
    damage: "12",
    modifier: "weak",
  };
  return battle;
}
let battle = getAttackLog(squirtle, pikachu);
console.log(battle);

console.log(
  `${battle.attacker} used ${battle.move}! ${battle.attacked} lost ${battle.damage} HP! It's not very effective!`
);

// 14 calculateDamage
console.log('\n ejercicio: 14 calculateDamage')
/* Crear una función calculateDamage que tome como un argumento un objeto con la siguientes propiedades
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

console.log('\n ejercicio: 15 battle')

// battle()
module.exports = { getAttackLog, calculateDamage, getMoves };