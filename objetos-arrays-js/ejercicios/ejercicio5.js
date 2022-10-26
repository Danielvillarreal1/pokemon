const getPokemon = require('../ejercicios/ejercicio0')
const squirtle = getPokemon('squirtle')

// importar getResistances
const {getResistances} = require('../ejercicios/ejercicio4')

// Crear una función resistsType que tome como argumentos un pokémon y un tipo y
// devuelva true si el pokémon es resistente a dicho tipo

function getResistances(pokemon){
    return pokemon.modifiers.resistances;
}

function resistsType(pokemon, type){
    let resistences = getResistances(pokemon);
     console.log(resistences)
    
    if(resistences.find((resistence) => resistence === type)) {
        return true;
    }else return false;
}
const resist = resistsType(squirtle, "fire");
console.log(resist)

