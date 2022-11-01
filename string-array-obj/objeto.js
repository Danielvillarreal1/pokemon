// Objetos
// Ejercicio 1
// Hacer una función que reciba un objeto y retorne un array con todos los valores de sus propiedades cómo elementos. Ejemplo:


function aArrayDeValores(){
var obj = {  a: 1, b: "z", c: 3};
return Object.values(obj)

}
console.log(aArrayDeValores({})); // imprime [1, "z",3]
// console.log(aArrayDeValores({ a: "f", b: true})); // imprime ["f", true]


// Ejercicio 2
// Hacer una función que reciba un objeto el cual posee propiedades con valores de string y retorne una string cómo resultado de la concatenación de todos los valores de las propiedades del objeto. Ejemplo:

function concatenarObj(){
    const saludar ={ a: "h", b:"o",c:"l", d:"a"}  
    const _arr = Object.values(saludar)
    let arrayTostring = _arr.join("");
     return arrayTostring
}

console.log(concatenarObj()); // imprime "hola"
// console.log(concatenarObj({ z: "sa", x:"ra", y:"sa"})); // imprime "sarasa"