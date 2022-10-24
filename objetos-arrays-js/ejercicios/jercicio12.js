/* Crear una función getAttackModifier, tome como argumento un objeto con dos propiedades, attacker y attacked,
donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva:
2, si el pokémon atacado es débil (weakness) contra el tipo del pokémon que ataca
0,5, si el pokémon atacado es resistente (resistances) contra el tipo del pokémon que ataca
1, si no es débil ni resistente
*/

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
const charmander = {
    name: "Charmander",
    type: "fire",
    ability: {
        "primary": "Blaze",
        "hidden": "Solar Power"
    },
    stats: {
        hp: 39,
        attack: 52,
        deffense: 43,
        speed: 65
    },
    moves: [
        "Growl", "Scratch", "Flamethrower", "Dragon Breath"
    ],
    modifiers: {
        "weakness": ["water", "ground", "rock"],
        "resistances": ["fire", "ice", "grass", "steal"]
    }
}



// obtener modificador de ataque
const getAttackModifier = ()=>{ 
    
    const  ej12 = {attacker:'squirtle', attacked:'charmander'}
    { 

        attackedResist= charmander.modifiers.resistances,
        attackedWeak= charmander.modifiers.weakness,
        attackerType= squirtle.type
        
        
        //["fire", "ice", "grass", "steal"]

        for (var i = 0; i < charmander.modifiers.resistances.length; i++) {
            if(attackedResist[i] === attackerType[i] ) {
                console.log(attackerType[i] + "0.5")}
            
                //  ["water", "ground", "rock"]
            else if(attackedWeak[i] === attackerType[i] ) {
                console.log(attackerType[i] + "2")      

            } else{
                console.log("1");
            }   
    }
    console.log(rdo)
}
    
    return ej12
}
   
const Weak = getAttackModifier();
console.log(Weak)

// function modifier(props) {
//     if (
//       resultado12.attackedResist.find(
//         (element) => element === resultado12.attackerType
//       )
//     ) {
//       console.log("0,5");
//     } else if (
//       resultado12.attackedWeak.find(
//         (element) => element === resultado12.attackerType
//       )
//     ) {
//       console.log("2");
//     } else console.log("1");
//     return props;



// //["fire", "ice", "grass", "steal"]
// if(attackedResist[0] || attackedResist[1]|| attackedResist[2] || attackedResist[3] === attackerType[0] || attackerType[1] || attackerType[2] ) {
//     console.log(attackerType + "0.5")
// }
//     //  ["water", "ground", "rock"]
// else if(attackedWeak[0] || attackedWeak[1] || attackedWeak[2] === attackerType[0] || attackerType[1] || attackerType[2] ) {
//     console.log(attackerType + "2")      

// } else{
//     console.log("1");
// }   