const getPokemon = require('../ejercicios/ejercicio0')
const squirtle = getPokemon('squirtle')
// Crear una función removeMove que tome como argumentos un pokémon y un movimiento, elimine dicho
//  movimiento de su lista y devuelva el pokémon con el movimiento agregado? eliminado?

const removeMove = (pokemon, movi) => {
  movi = pokemon.moves.splice(2, 1); // elimine posicion 0,1,2  etc 
  return squirtle;
};
const mov = removeMove(squirtle);
console.log(mov);
