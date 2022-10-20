// Crear una función isWeakAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, 
// donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon
// atacado es débil frente al tipo de pokémon que lo ataca

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


const isWeakAgainst = ()=>{
    
    const  ej7 = { 
       
        attacker: squirtle.name,
        attacked: pikachu.name,
        

        // if(attacker == attacked) {
        //     console.log(attacker  + "True");
        // } else {
        //     console.log(attacker+  "False");
        // }
        
    }
    // attackerType: squirtle.type
    // attackedType: charmander.modifiers.weakness
 
    
    return ej7
}
const Weak = isWeakAgainst();
console.log(Weak)


