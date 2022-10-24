var pokemons = require('../data/pokemons.json')
// crear una funcion getPokemon que reciab un argumento el cual representa el nombre del pokemon y 
// devuelva un objeto con la informacion del pokemon



module.exports = function getPokemon(namePokemon){
    
    switch (namePokemon) {
    case "pikachu":
        return pokemons[0]
        break;
    case "squirtle":
        return pokemons[1]
        break;
    case "charmander":
        return pokemons[2]
        break;
    case "bulbasaur":
        return pokemons[3]
        break;
    
    }
}



// que le paso a swith


