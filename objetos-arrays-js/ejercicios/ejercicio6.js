var pikachu = require('../data/pikachu.json')
// Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el 
//pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo,
// p. ej.: { name: "Rain dance", type: "water" }

function getMovi(pokemon){
    return pokemon.moves;
}



const resistsMove = (pokemon, type)=>{
    let resistences = getMovi(pokemon);
    
    if(resistences.find((resistence) => resistence === type)) {
        return true;
    }else return false;
}
const resismov = resistsMove(pikachu[0], "electric");
console.log(resismov)


// "moves": [
//     "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
// ],
// "modifiers": {
//     "weakness": ["ground"],
//     "resistances": ["electric", "flying", "water", "steel"]
// }