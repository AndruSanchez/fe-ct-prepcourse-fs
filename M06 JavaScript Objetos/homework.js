/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var gato = {
      nombre: nombre, edad: edad,
      meow: function () {
         return("Meow!");
      }
   };
   return gato;

   /*  otra manera de hacer la funcion ( funcion flecha)

     var gato = {
      nombre: nombre, edad: edad,
      meow: () => {
         return("Meow!");
      }
   };
   return gato; 
   
   */


}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var usuario = {nombre: nombre, email: email, password: password}
   return usuario;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;         // se una el metodo bracket-notation: entender que recibe una variable
   return objeto;                      
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:

   objeto[metodo]();   // con bracket-notation va a buscar una propiedad que tenga lo que sea que este guardado en esa variable
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   return objetoMisterioso.numeroMisterioso * 5;      // ya con el objetoMisterioso.numeroMisterioso invocamos el número 

   // otra manera, guardando el resultado:

// var resultado objetoMisterioso.numeroMisterioso * 5;
// return resultado;
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:

   if (objeto.hasOwnProperty(propiedad)) delete objeto[propiedad];
   return objeto;
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.email) {return true;}
   else {return false};

   //    Se puede obviar una parte:
   // if (objetoUsuario.email) return true;
   // else return false;
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objeto.hasOwnProperty(propiedad)) return true;
   return false;
   /*  una manera mas rápida: solo arroja un true o false.

    return objeto.hasOwnProperty(propiedad);
    */

}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:

   if (objetoUsuario.password === password) return true;
   else return false;

}

// para verificar que esta bien:
var objetoUsuario = { username: "Daniel", password: "123"}

console.log(verificarPassword(objetoUsuario, "123"));


function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:

   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;

}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
 objetoUsuario.amigos.push(nuevoAmigo);
 return objetoUsuario;

}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:

   for (var i = 0; i < objetoMuchosUsuarios.length; i++) {
      objetoMuchosUsuarios[i].esPremium = true;
   }
   return objetoMuchosUsuarios;

}

// un ejemplo de un arreglo de objetos con la propiedad llamada esPremium es:

// var usuarios = [
//    { esPremium: false },
//    { esPremium: false },
//    { esPremium: false },
//    { esPremium: false },
//    { esPremium: false },
// ]

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   var sumar = 0;
   for ( var i = 0; i < objetoUsuario.posts.length; i++) {
      sumar += objetoUsuario.posts[i].likes;
   }
   
   return sumar;
}

// par poder observar mejor dicho objeto con la porpiedad posts:

// var objetoUsuario = {
//    posts: [{likes:1},{likes:12},{likes:4},{likes:0}],
// }

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto["calcularPrecioDescuento"] = () => {
      return objetoProducto.precio - objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
   }
   return objetoProducto;

   // toda funcion debe retornar la logica que hayas realizado dentro de ella;
   //  de no ser así..  devuelve (return) undefine.


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
