const getPokemon = require('./ejercicio0.js')
const pikachu = getPokemon('pikachu')
const bulbasaur = getPokemon('bulbasaur')


/* Crear una función getAttackModifier, tome como argumento un objeto con dos propiedades, attacker y attacked,
donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva:
2, si el pokémon atacado es débil (weakness) contra el tipo del pokémon que ataca
0,5, si el pokémon atacado es resistente (resistances) contra el tipo del pokémon que ataca
1, si no es débil ni resistente
*/

function getResistances(pokemon){
    return pokemon.modifiers.resistances;
}
function getType(pokemon) {
    return pokemon.type;
  }
function getWeaknesses(pokemon) {
    return pokemon.modifiers.weakness;
}

// obtener modificador de ataque

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


  module.exports = {getAttackModifier};

// const getAttackModifier = ()=>{

//     const  ej12 = {attacker:'squirtle', attacked:'charmander'}
//     {

//         attackedResist= charmander.modifiers.resistances,
//         attackedWeak= charmander.modifiers.weakness,
//         attackerType= squirtle.type

//         //["fire", "ice", "grass", "steal"]

//         for (var i = 0; i < charmander.modifiers.resistances.length; i++) {
//             if(attackedResist[i] === attackerType[i] ) {
//                 console.log(attackerType[i] + "0.5")}

//                 //  ["water", "ground", "rock"]
//             else if(attackedWeak[i] === attackerType[i] ) {
//                 console.log(attackerType[i] + "2")

//             } else{
//                 console.log("1");
//             }
//     }
//     console.log(rdo)
// }

//     return ej12
// }

// const Weak = getAttackModifier();
// console.log(Weak)

// function modifier(props) {
//     if (
//       resultado12.attackedResist.find(
//         (element) => element === resultado12.attackerType
//       )
//     ) {
//       console.log("0,5");
//     } else if (
//       resultado12.attackedWeak.find(
//         (element) => element === resultado12.attackerType
//       )
//     ) {
//       console.log("2");
//     } else console.log("1");
//     return props;

// //["fire", "ice", "grass", "steal"]
// if(attackedResist[0] || attackedResist[1]|| attackedResist[2] || attackedResist[3] === attackerType[0] || attackerType[1] || attackerType[2] ) {
//     console.log(attackerType + "0.5")
// }
//     //  ["water", "ground", "rock"]
// else if(attackedWeak[0] || attackedWeak[1] || attackedWeak[2] === attackerType[0] || attackerType[1] || attackerType[2] ) {
//     console.log(attackerType + "2")

// } else{
//     console.log("1");
// }


// ejercicio: 12 getAttackModifier
// { attacker: 'Bulbasaur', attacked: 'Pikachu' }
// 1