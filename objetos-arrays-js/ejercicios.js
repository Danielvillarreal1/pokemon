

// {
//   "name": "Bulbasaur",
//   "type": "grass",
//   "ability": {
//       "primary": "Overgrow",
//       "hidden": "Chlorophyll"
//   },
//   "stats": {
//       "hp": 45,
//       "attack": 49,
//       "deffense": 59,
//       "speed": 45
//   },
//   "moves": [
//       "Growl", "Tackle", "Vine Whip", "Razor Leaf"
//   ],
//   "modifiers": {
//       "weakness": ["fire, ice", "flying", "psychic"],
//       "resistances": ["water", "grass", "electric", "fighter"]
//   }
// }



// {
//   "name": "Charmander",
//   "type": "fire",
//   "ability": {
//       "primary": "Blaze",
//       "hidden": "Solar Power"
//   },
//   "stats": {
//       "hp": 39,
//       "attack": 52,
//       "deffense": 43,
//       "speed": 65
//   },
//   "moves": [
//       "Growl", "Scratch", "Flamethrower", "Dragon Breath"
//   ],
//   "modifiers": {
//       "weakness": ["water", "ground", "rock"],
//       "resistances": ["fire", "ice", "grass", "steal"]
//   }
// }



// {
//   "name": "Squirtle",
//   "type": "water",
//   "ability": {
//       "primary": "Torrent",
//       "hidden": "Rain Dish"
//   },
//   "stats": {
//       "hp": 44,
//       "attack": 48,
//       "deffense": 50,
//       "speed": 43
//   },
//   "moves": [
//       "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
//   ],
//   "modifiers": {
//       "weakness": ["electric", "grass"],
//       "resistances": ["water", "fire", "ice", "steel"]
//   }
// }


var charmander = require('../data/pokemons.json')

// Crear una función getWeaknesses que tome como argumento un pokémon y devuelva la lista de tipos 
//contra los que es débil

function getWeaknesses(pokemon) {
        return pokemon.modifiers.weakness;
}
const tipos = getWeaknesses(charmander[2])
console.log(tipos)



var bulbasaur = require('../data/pokemons.json')
// Crear una función getResistances que tome como argumento un pokémon y
//  devuelva la lista de tipos contra los que es resistente

function getResistances(pokemon){
    return pokemon.modifiers.resistances;
}

resist = getResistances(bulbasaur[3])
console.log(resist)


var squirtle = require('../data/pokemons.json')
// Crear una función resistsType que tome como argumentos un pokémon y un tipo y
// devuelva true si el pokémon es resistente a dicho tipo

function getResistances(pokemon){
    return pokemon.modifiers.resistances;
}

function resistsType(pokemon, type){
    let resistences = getResistances(pokemon);
    console.log(resistences)
    
    if(resistences.find((resistence) => resistence === type)) {
        return true;
    }else return false;
}
const resist = resistsType(squirtle[1], "fire");
console.log(resist)


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


// // 11
// var squirtle = require("../data/pikachu.json");
// // Crear una función removeMove que tome como argumentos un pokémon y un movimiento, elimine dicho
// //  movimiento de su lista y devuelva el pokémon con el movimiento agregado? eliminado?

// const removeMove = (pokemon, movi) => {
//   movi = pokemon.moves.splice(2, 1); // elimini posicion 0,1,2  etc 
//   return squirtle[1];
// };
// const mov = removeMove(squirtle[1]);
// console.log(mov);

