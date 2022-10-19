// objecto Squirtle

const mySquirtle = {
    name: 'Squirtle',
    type: 'Water',
    hp: 100
};
// const anotherSquirtle = mySquirtle; // asigno mySquirtle a otro Squirtle
// anotherSquirtle.hp = 0; // accedo a atributo hp y cambio a 0. con el operador spread solucionamos el problema
// console.log(mySquirtle)

// desestructurar el contenido de la variable mySquirtle con el operador spread, luego con el objeto literal creo un nuevo objecto
const anotherSquirtle = {...mySquirtle};
anotherSquirtle.hp=0;
console.log(anotherSquirtle)
console.log(mySquirtle)