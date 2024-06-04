//Ejercicio a)
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Mostrar por consola los meses 5 y 11
console.log(meses[4]); // Mayo
console.log(meses[10]); // Noviembre

//Ejercicio b)
// Ordenar el array de meses alfabéticamente
meses.sort();

// Mostrar el array ordenado por consola
console.log(meses);

//Ejercicio c)
// Agregar un elemento al principio del array
meses.unshift("Inicio");

// Agregar un elemento al final del array
meses.push("Fin");

// Mostrar el array modificado por consola
console.log(meses);

//Ejercicio d)
// Quitar un elemento del principio del array
meses.shift();

// Quitar un elemento del final del array
meses.pop();

// Mostrar el array modificado por consola
console.log(meses);


//Ejercicio e)
// Invertir el orden del array
meses.reverse();

// Mostrar el array invertido por consola
console.log(meses);

//Ejercicio f)
// Unir todos los elementos del array en un único string separado por guiones
var mesesString = meses.join(" - ");

// Mostrar el string resultante por consola
console.log(mesesString);

//Ejercicio g)
// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
var mesesCopia = meses.slice(4, 11);

// Mostrar la copia del array por consola
console.log(mesesCopia);
