const pokedex =  {name: 'Squirtle', type: 'Water'}

console.log(pokedex)

// agrego dos nuevas propiedades al objecto
const otroPokedex = {
    ...pokedex,
    species:'Otra species',
    evolution:'Wartortle'
};


console.log(otroPokedex)


