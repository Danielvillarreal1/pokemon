//************* operador spread , copiar array y objeto de forma inmutable*********** */

const number1 = [1,2,3];
console.log(number1)

const number2 = [1,2,3];
console.log(...number2)

// ************** array de string **********
console.log('\n array de string ')
const pokemon = ['Squirtle', 'Bulbasur', 'Charmander' ]
// console.log(pokemon)

// se crea nuevo array con los valores de pokemon mas el nuevo valor
const pokedex = [...pokemon];
pokedex.push('Cyndaquil')

console.log(pokemon)
console.log(pokedex)

// // 
// const pokemon2 = ['Squirtle', 'Bulbasur', 'Charmander' ]
// console.log(...pokemon2)
