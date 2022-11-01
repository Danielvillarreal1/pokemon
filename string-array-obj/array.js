// array
// Ejercicio 1
// Hacer una función que reciba un array de strings y retorne una string igual a la concatenación de todos sus elementos. Ejemplo:

function concatenar(){
    
saludar = ['h','o','l','a']
let arrayTostring = saludar.join("");
return arrayTostring
 }

// // console.log(concatenar(["s","a","r","a","s","a"])); // imprime "sarasa"
//console.log(concatenar(["h","o","l","a"])); // imprime "hola"

console.log(concatenar()); 


console.log('ejercicio2')
// Ejercicio 2
// Hacer una función que reciba un array y retorne otro array con la misma cantidad de elementos, pero que cada elemento sea el tipo de dato del array original. Ejemplo:

let array2 = [];

function transformarATipos(array) {
  for (i = 0; i < array.length; i++) {
    array2.push(typeof array[i]);
  }
  return array2;
}

console.log(transformarATipos([1, "casa", {}]));
//console.log(transformarATipos()); // imprime ["number", "string", "object"]
// console.log(transformarATipos([function(){}, true]); // imprime ["function", "boolean"]