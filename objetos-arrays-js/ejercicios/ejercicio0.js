var pokemons = require('../data/pokemons.json')
// crear una funcion getPokemon que reciab un argumento el cual representa el nombre del pokemon y 
// devuelva un objeto con la informacion del pokemon



module.exports = function getPokemon(namePokemon){
    
    switch (namePokemon) {
    case "pikachu":
        return pokemons[0]
    case "squirtle":
        return pokemons[1]
    case "charmander":
        return pokemons[2]
      
    case "bulbasaur":
        return pokemons[3]
    }
}



// que le paso a swith


