//Ejercicio a)
// Declarar una variable de tipo string con al menos 10 caracteres
var texto1 = "programacion";

// Convertir todo el texto a mayúscula
var textoMayuscula = texto1.toUpperCase();

// Imprimir el resultado
console.log("Texto en mayúscula: " + textoMayuscula);

//Ejercicio b)
// Declarar una variable de tipo string con al menos 10 caracteres
var texto2 = "programacion";

// Generar un nuevo string con los primeros 5 caracteres
var primeros5 = texto2.substring(0, 5);

// Imprimir el resultado
console.log("Primeros 5 caracteres: " + primeros5);


//Ejercicio c)
// Declarar una variable de tipo string con al menos 10 caracteres
var texto3 = "programacion";

// Generar un nuevo string con los últimos 3 caracteres
var ultimos3 = texto3.substring(texto3.length - 3);

// Imprimir el resultado
console.log("Últimos 3 caracteres: " + ultimos3);

//Ejercicio d)
// Declarar una variable de tipo string con al menos 10 caracteres
var texto4 = "programacion";

// Generar un nuevo string con la primera letra en mayúscula y las demás en minúscula
var primeraMayuscula = texto4.substring(0, 1).toUpperCase() + texto4.substring(1).toLowerCase();

// Imprimir el resultado
console.log("Primera letra en mayúscula: " + primeraMayuscula);

//Ejercicio e)
// Declarar una variable de tipo string con al menos 10 caracteres y algún espacio en blanco
var texto5 = "Hola mundo";

// Encontrar la posición del primer espacio en blanco
var posicionEspacio = texto5.indexOf(" ");

// Imprimir el resultado
console.log("Posición del primer espacio en blanco: " + posicionEspacio);

//Ejercicio f)
// Declarar una variable de tipo string con al menos 2 palabras largas
var texto6 = "programacion avanzada";

// Encontrar la posición del espacio en blanco
var posicionEspacio2 = texto6.indexOf(" ");

// Generar un nuevo string con la primera letra de ambas palabras en mayúscula
var palabra1 = texto6.substring(0, posicionEspacio2);
var palabra2 = texto6.substring(posicionEspacio2 + 1);

var resultado = palabra1.substring(0, 1).toUpperCase() + palabra1.substring(1).toLowerCase() + " " + palabra2.substring(0, 1).toUpperCase() + palabra2.substring(1).toLowerCase();

// Imprimir el resultado
console.log("Resultado: " + resultado);

