
const getPokemon = require('../ejercicios/ejercicio0')

// Crear una función isWeakAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, 
// donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon
// atacado es débil frente al tipo de pokémon que lo ataca


// Es débil contra


const isWeakAgainst = (pokemons)=>{
    
    console.log(pokemons.attacker)
    console.log(pokemons.attacked)
      
        attacker=  pikachu.modifiers.weakness
        attacked= squirtle.modifiers.weakness

        
        if(attacked.find((debil) => debil === 'electric')) {
            return true;}
        if(attacker.find((debil) => debil === 'ground')) {
            return true;}
            
        else return false;
        
    }
let pok =getPokemon('pikachu')

console.log(pok)
// console.log(poks)

