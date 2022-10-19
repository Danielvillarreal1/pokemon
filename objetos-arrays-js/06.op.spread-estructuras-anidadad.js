const pokemon = {
    name: 'Squirtle',
    type: 'Water',
    abilities: ['Torrent', 'Rain Dist']
}

const squirtClone = {...pokemon};
pokemon.name = 'Charmander';
pokemon.abilities.push('Suef');

console.log(squirtClone)