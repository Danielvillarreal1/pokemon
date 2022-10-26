const getPokemon = require('../ejercicios/ejercicio0')
const pikachu = getPokemon('pikachu')
const squirtle = getPokemon('squirtle')
// Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el 
//pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo,
// p. ej.: { name: "Rain dance", type: "water" }

function getResistances(pokemon1){
    return pokemon1.modifiers.resistances;
}
function getMoves(pokemon2) {
    return pokemon2.moves;
  }
  
function getType(pokemon2) {
    return pokemon2.type;
  }
  
// true. name: Tackle Type: water
function resistsMove(pokemon1, pokemon2) {
    let resistances = getResistances(pokemon1);
    let move ="name: " + getMoves(pokemon2) + " " + "Type: " + getType(pokemon2);
    
    if (resistances.find((resistance) => resistance === getType(pokemon2))) {
      return true + ". " + move;
    } else return false + ". " + move;
  }
  
  console.log(resistsMove(pikachu, squirtle));
  


// function getResistances(pokemon){
//     return pokemon.modifiers.resistances;
// }

// function resistsMove(pokemon, type){
//     let resistences = getResistances(pokemon);
//     console.log(resistences)
    
//     if(resistences.find((resistence) => resistence === type)) {
//         return true;
//     }else return false;
// }
// const resist = resistsMove(pikachu, "electric");
// console.log(resist)


