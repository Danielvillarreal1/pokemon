
// Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el 
//pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo,
// p. ej.: { name: "Rain dance", type: "water" }

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


const resistsMove = ()=>{
    const  ej6 =pikachu.moves
    {
     for (var i = 0; i < pikachu.moves.length; i++) {
        moveType= pikachu.moves
        tipo= pikachu.type
        
        if (tipo == moveType[i]) {
            console.log(moveType[i]  + "= " + "True");
        } else console.log(moveType[i]  + "= "+  "False");
    }

    }
    return ej6
}
const resismov = resistsMove();
console.log(resismov)