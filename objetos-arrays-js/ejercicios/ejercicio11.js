// Crear una función removeMove que tome como argumentos un pokémon y un movimiento, elimine dicho movimiento de su lista y devuelva el pokémon con el movimiento agregado

const squirtle = {
    name: "Squirtle",
    type: "water",
    ability: {
        "primary": "Torrent",
        "hidden": "Rain Dish"
    },
    stats: {
        hp: 44,
        attack: 48,
        deffense: 50,
        speed: 43
    },
    moves: [
        "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
    ],
    modifiers: {
        "weakness": ["electric", "grass"],
        "resistances": ["water", "fire", "ice", "steel"]
    }
}


const removeMove = ()=>{
    const ej11 = {
        
        ...squirtle,
        // moves: [...squirtle.moves, moves.pop]


        //moves: [{...squirtle.moves, Tackle: "lllf"}]
  
     
    };
    ej11.squirtClone.moves.pop()
    return ej11

}


const mov = removeMove();
console.log(mov)