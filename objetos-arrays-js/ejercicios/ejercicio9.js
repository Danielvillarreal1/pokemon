const getPokemon = require('../ejercicios/ejercicio0')
const bulbasaur = getPokemon('bulbasaur')
// Crear una función addAbility que tome como argumentos un pokémon y un objeto con un tipo de habilidad y
//  el nombre de la misma (p. ej.: { secondary: "Discharge" }) y devuelva el pokémon con la habilidad agregada

function addAbility(pokemon){
       return  {ability : {...pokemon.ability, secundary:"Dischange"}}  
   }
   console.log(addAbility(bulbasaur))



