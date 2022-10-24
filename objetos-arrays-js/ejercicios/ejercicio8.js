//Crear una función isStrongAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked,
//  donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el 
// pokémon atacado es resistente al tipo de pokémon que lo ataca


const bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ],
    modifiers: {
        "weakness": ["fire, ice", "flying", "psychic"],
        "resistances": ["water", "grass", "electric", "fighter"]
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

// es fuerte en contra


function isWeakAgainst(pokemon1, pokemon2) {
    let weakness = getWeaknesses(pokemon2);
    const pokemons = { attacker: pokemon1.name, attacked: pokemon2.name };
    console.log(pokemons);
    if (weakness.find((weak) => weak === getType(pokemon1))) {
      return true;
    } else return false;
  }
  let Weakness = isWeakAgainst(squirtle, charmander);
  console.log(Weakness);





// const isWeakAgainst = (attacker, attacked)=>{
    
//     const att=  {attacker:'Charmander', attacked:'Bulbasaur'}
    
    
//        attacker=  bulbasaur.modifiers.resistances
//        attacked= charmander.modifiers.resistances
       
//        if(attacked.find((fuerte) => fuerte === 'electric')) {
//            return true;
//        }else return false;
//    }

// const Weak = isWeakAgainst();
// console.log(Weak)




// const isWeakAgainst = ()=>{
    
//     const  ej8 = {attacker:'Charmander', attacked:'Bulbasaur'}
//     { 
//         attacker= charmander.stats.attack, 
//         attacked= bulbasaur.stats.attack
        
//         if(attacker > attacked) {
//             console.log(attacked + ":" + "True");
//         } else{
//             console.log(attacked + ":" + "False");
//         }
//     }
    
//     return ej8
// }