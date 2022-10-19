// se puede usra la fusion de dos array solo desestructurando los dos array y convinando con el array literal

// declaro dos array que contienen una lista de string
const pokemon = ['Squirtle', 'Bulbasur', 'Charmander' ]
const morePoquemon = ['Tododile', 'Chikorita', 'Cyndaquil'];

// crea un nuevo array con los datos de las dos array anteriores
const pokedex = [...pokemon, ...morePoquemon];
console.log(pokedex)


// declaro dos array que contienen objetos
const pokemon2 = [
    {name: 'Squirtle', type: 'Water'},
    {name: 'Bulbasur', type: 'Plant'}
];
const morePoquemon2 = [{name: 'Charmander', type: 'Fire'}]

const pokedex2 = [...pokemon2, ...morePoquemon2];
console.log(pokedex2)

console.log('****** creo dos objetos********')

const baseSquirtle =  {
    name: 'Squirtle', 
    type: 'Water'
}

const aquirtleDetails = {
    species:'Otra species',
    evolution:'Wartortle'
};

// con operador spread fusiono los dos objetos con sus 4 propirdades
const squirtle = {...baseSquirtle, ...aquirtleDetails}
console.log(squirtle)
