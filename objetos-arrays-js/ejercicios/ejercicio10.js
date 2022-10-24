var pikachu = require('../data/pikachu.json')
// Crear una función addMove que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento
// a su lista y devuelva el pokémon con el movimiento agregado

const addMove = (pokemon, movi)=>{
        //...pikachu,
        pokemon = {moves: [...pikachu[0].moves, movi] }
        return pokemon        
    }
const mov = addMove(pikachu[0], movi="another move");
console.log(mov)






// const addMove = ()=>{
//     const ej10  = {
//         ...pikachu,
//         moves: [...pikachu.moves,  "another move"],
         
//     };
// //bulbasaur.ability.push('  secondary:  "Discharge" ')
//     return ej10