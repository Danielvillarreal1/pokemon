// Crear una función addMove que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento a su lista y devuelva el pokémon con el movimiento agregado

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
    modifiers: {
        "weakness": ["ground"],
        "resistances": ["electric", "flying", "water", "steel"]
    }
}

const addMove = ()=>{
    const ej10  = {
        ...pikachu,
        moves: [...pikachu.moves,  "another move"],
         
    };
//bulbasaur.ability.push('  secondary:  "Discharge" ')
    return ej10

}


const mov = addMove();
console.log(mov)