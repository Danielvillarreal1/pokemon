// ************** lista de objetos **********

const pokedex1 = [
    {name: 'Squirtle', type: 'Water'},
    {name: 'Bulbasur', type: 'Plant'},
    {name: 'Charmander', type: 'Fire'}
];
console.log(pokedex1)

// console.log('\n ')
// const pokedex2 = [
//     {name: 'Squirtle', type: 'Water'},
//     {name: 'Bulbasur', type: 'Plant'},
//     {name: 'Charmander', type: 'Fire'}
// ];
// console.log(...pokedex2)


// desestructurar el contenido de la variable mySquirtle con el operador spread, luego con el objeto literal creo un nuevo objecto


const otroPokedex = [{
    ...pokedex1,
    name:'Ivysaur',
    type:'Volador'
}];


console.log(otroPokedex)


