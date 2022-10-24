// import pikachu from "../data/pikachu.json"

var pikachu = require('../data/pikachu.json')

function getMoves(pokemon) {
    return pokemon.moves;
}
let moves = getMoves(pikachu[0]);
console.log(moves);
