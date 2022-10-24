var squirtle = require("../data/pikachu.json");
// Crear una función removeMove que tome como argumentos un pokémon y un movimiento, elimine dicho
//  movimiento de su lista y devuelva el pokémon con el movimiento agregado? eliminado?

const removeMove = (pokemon, movi) => {
  movi = pokemon.moves.splice(2, 1); // elimini posicion 0,1,2  etc 
  return squirtle[1];
};
const mov = removeMove(squirtle[1]);
console.log(mov);




// const removeMove = ()=>{
//     const ej11 = {
//                 ...squirtle,
//                 movi: squirtle.moves
//     };
//     ej11.movi.pop()
//     return ej11
// }

// const removeMove = (pokemon, movi)=>{
//     // movi= pokemon.moves.pop()
//       movi= pokemon.moves.splice(0,1)
//      //movi = {moves: {movi: squirtle.moves.pop(pokemon)}} // pop() elimino ultimo movimiento
//     return squirtle[1]
// }
// const mov = removeMove(squirtle[1]);
// console.log(mov)
