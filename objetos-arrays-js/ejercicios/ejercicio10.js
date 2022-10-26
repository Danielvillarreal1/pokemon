const getPokemon = require('../ejercicios/ejercicio0')
const pikachu = getPokemon('pikachu')
// Crear una función addMove que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento
// a su lista y devuelva el pokémon con el movimiento agregado

const addMove = (pokemon, movi)=>{
        pokemon = {moves: [...pikachu.moves, movi] }
        return pokemon 
    }
const mov = addMove(pikachu, "another move");
console.log(mov)
