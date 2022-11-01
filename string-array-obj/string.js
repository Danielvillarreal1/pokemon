// #Strings
// Ejercicio 1
// Hacer una función que reciba dos parámetros del tipo string. La función deberá retornar la cantidad 
// de apariciones que tiene el segundo parámetro en el primer parámetro. Ejemplo:


function contarOcurrencias(cadena, subcadena){  
    let contadorOcurrencias = 0;
    let = posicion = 0  
   
    while ((posicion = cadena.indexOf(subcadena, posicion)) !== -1){
        ++contadorOcurrencias; 
        posicion +=subcadena.length;  
    }
    return contadorOcurrencias;
}
console.log(contarOcurrencias("sarasa", "a")); // imprime 3
console.log(contarOcurrencias("sarasa", "z")); // imprime 0



console.log('\nejercicio 2 ')
// Ejercicio 2
// Hacer una función que reciba una string y retorne la misma string pero agregando después de cada
// caracter su í­ndice correspondiente. Es decir, que retorne la misma string transformada de la siguiente forma:

function agregarIndice(saludo) {
    for (i = 0; i < saludo.length; i++) {
      console.log(saludo.charAt(i) + i);
    }
  }
  agregarIndice("hola");

