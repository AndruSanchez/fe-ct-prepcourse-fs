/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arr = [];

   for( var key in objeto) {
      arr.push([key, objeto[key]]);     // key = la clase   objeto[key] = el valor en [] para que sean un push de un arreglo dentro de un arreglo
   }
   return arr;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var obj = {};

   for (var i = 0; i < string.length; i++) {
      var letra = string[i]; 
      
      if(obj[letra]) {    // si existe suma 1, si no existe sera igual a 1. asi posteriormente pasara a 2 y seguira sumando
      obj[letra] = obj[letra] + 1;
      } else{
         obj[letra] = 1;
      }
}
return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayus = "";
   var minus = "";

   for(var i = 0; i < string.length; i++) {
      if(string[i] === string[i].toUpperCase()) {
         mayus = mayus + string[i];
      } else {
         minus = minus + string[i];
      }
   }
   return (mayus + minus);
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var palabras = frase.split(" ");
   for(var i = 0; i < palabras.length; i++){
      palabras[i] = palabras[i].split("").reverse().join("");
   }
   var resultado = palabras.join(" ");
   return resultado;
}
//console.log(asAmirror("The Henry Challenge is close!"));

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var str = numero.toString();
  for ( var i = 0; i<str.length; i++) {
   if(str[i] !== str[str.length - 1 - i]) {
      return "No es capicua";
   }
  }
  return "Es capicua";

}
//console.log(capicua(5111115))

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newString = string.split("a").join("").split("b").join("").split("c").join("");
   return newString;
      
}
//console.log(deleteAbc("hola como estaba"))

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   // mas entendible:

   for(let i = 0; i<arrayOfStrings.length - 1 ;i++) {
      for(let j = i + 1; j<arrayOfStrings.length; j++) {
         if (arrayOfStrings[j].length<arrayOfStrings[i].length){
               let stringMasCorto = arrayOfStrings[j];
               arrayOfStrings[j] = arrayOfStrings[i];
               arrayOfStrings[i] = stringMasCorto;
         }
      }
   }
   return arrayOfStrings;

   // otro método mas eficiente:
   
   /*
   return arrayOfStrings.sort(function (a,b){         //  sort compara valores y ordena
      return (a.length - b.length)                   // esta linea de código ordena de forma ascendente 
                                                   // b.length - a.length   -> ordena de forma decendente 
   })   */
}

let array = ["looking", "You", "beautiful", "are"]
console.log(sortArray(array));

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
var newArray = [];
   for(var i =0; i<array1.length;i++) {
      for(var z =0; z<array2.length; z++){
         if(array1[i] === array2[z]) {
            newArray.push(array1[i]);
         }
      }
}
 return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
