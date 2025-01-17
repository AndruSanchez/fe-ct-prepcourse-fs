/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

   

   if(typeof nombre !== "string") {                // typeof para validar si un dato es un tipo de dato especifico
      throw new Error("El argumento debe ser un string");
   }

   if(nombre.length === 0){
      throw new Error("No recibio parametro");
   }
 
   //convertir la primera letra en mayuscula y concatenar el resto del nombre:
   var primeraLetra = nombre.charAt(0).toUpperCase();  //chartAt selecciona la letra del indice 0
   var restoNombre =nombre.slice(1);             // toUpperCase la convierte en mayuscula
                                                //slice selecciona el string desde el indice que se le señala (1) no toma en cuenta la primera letra del indice 0
   return primeraLetra + restoNombre;

   // return nombre.charAt(0).toUpperCase() + nombre.slice(1)


}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotornar nada.
   // Tu código:

cb();

}

// algo similar pero avanzado para entender alli:
// function suma(num,num2){
//    return num + num2;
// }

// var resultado = invocarCallback(suma())

// resultado();

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:

   return cb(num1,num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   var sumaTotal = 0;
   for(var i = 0; i<arrayOfNumbers.length; i++) {
      sumaTotal = sumaTotal + arrayOfNumbers[i];
   }

   cb(sumaTotal);
}

//para entender un poco mejor:
// var arrayOfNumbers = [1,2,3]
// var cb = function(e) {
//    return e*e }


function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   array.forEach(e => cb(e));  // e num number element : es basicamente el elemento que recorre del arreglo
   
}

// para ver un ejemplo de lo que se ejecuta internamente en la funcion:
// var array = [2,3,4];
// function cb(e){
//    return e*e
// }    
// un ejemplo mas claro: en el work 



function map(array, cb) {          // cabe destacar que cuando sacan estos enunciados, el arreglo y el callback ya estan creados.
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   return array.map((e) => cb(e));

   // ó 
   // var newArray = array.map(function(e) {
   // return cb(e);
   //    }


}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   // 1:
   var newArray = [];

   for ( var i = 0; i < arrayOfStrings.length; i++){
      if( arrayOfStrings[i].charAt(0) === "a"){
         newArray.push(arrayOfStrings[i]);
      }
   }
   return newArray
   // 2: manera mas simplificada:

   // return  arrayOfStrings.filter((e) => e.startsWith("a"));   // startsWith agarra los elementos que comienzan con ("a")
   // el metodo filter al igual que el map retorna un nuevo arreglo

   // ó  
   // var newArray = arrayOfStrings.filter((number) => number.charAt(0) === "a");
   // return newArray;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
