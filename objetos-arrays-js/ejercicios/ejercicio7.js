const getPokemon = require('../ejercicios/ejercicio0')
const squirtle = getPokemon('squirtle')
const charmander = getPokemon('charmander')

// Crear una función isWeakAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, 
// donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon
// atacado es débil frente al tipo de pokémon que lo ataca


// Es débil contra

function isWeakAgainst(){
    let weakness = charmander.modifiers.weakness
    let tipo = squirtle.type

    const pokemons = { attacker: squirtle.name, attacked: charmander.name };
    console.log(pokemons);

    if(weakness.find((wek) => wek === tipo)){
        return true;
    } return false
}
console.log(isWeakAgainst(charmander, squirtle))


// function getWeakness(pokemon){
//     return pokemon.modifiers.weakness
// }

// function getType(pokemon) {
//     return pokemon.type;
//   }

// // Es débil contra
// function isWeakAgainst(pokemon1, pokemon2) {
//     let weakness = getWeakness(pokemon2);
//     const pokemons = { attacker: pokemon1.name, attacked: pokemon2.name };
//     console.log(pokemons);
//     if (weakness.find((weak) => weak === getType(pokemon1))) {
//       return true;
//     } else return false;
//   }
  
//   console.log(isWeakAgainst(squirtle, charmander));
















// const isWeakAgainst = (pokemons)=>{
    
//     console.log(pokemons.attacker)
//     console.log(pokemons.attacked)
      
//         // attacker=  pikachu.modifiers.weakness
//         // attacked= squirtle.modifiers.
        
//         let attacker= getWeakness1(pokemon1)
//         let attacked= getWeakness2(pokemon2)
        
//         console.log(attacked)
//         console.log(attacker)
      
        

        
//         if(attacked.find((debil) => debil === 'electric')) {
//             return true;}
//         if(attacker.find((debil) => debil === 'ground')) {
//             return true;}
            
//         else return false;
        
//     }


// let weak = isWeakAgainst('pikachu')   
// let weak2 = isWeakAgainst('squirtle')   
// console.log(weak)
// console.log(weak2)


// let pok =getPokemon('pikachu')
// console.log(pok)


