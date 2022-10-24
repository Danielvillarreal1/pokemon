var bulbasaur = require('../data/pikachu.json')
// Crear una función addAbility que tome como argumentos un pokémon y un objeto con un tipo de habilidad y
//  el nombre de la misma (p. ej.: { secondary: "Discharge" }) y devuelva el pokémon con la habilidad agregada

const addAbility = (pokemon, secondary)=>{
       pokemon= {ability:{...bulbasaur[3].ability, secondary}} 
       return pokemon
}
const abi = addAbility(bulbasaur[3], "Discharge");
console.log(abi)



// const addAbility = (pokemon, secondary)=>{
//     const ability={
//         //...bulbasaur,
//         ability: {...bulbasaur.ability, secondary }      
//     }
//     return ability
// }
// const abi = addAbility(bulbasaur, "Discharge");
// console.log(abi)



// const addAbility = (pokemon)=>{
//     const ej9  = 
//         //...bulbasaur,
//         ability= {...bulbasaur.ability, secondary:  "Discharge" }  
//     return ej9
// }
// const abi = addAbility(bulbasaur);
// console.log(abi)


