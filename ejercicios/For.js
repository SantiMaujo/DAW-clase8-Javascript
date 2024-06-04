//Ejercicio a)
var palabras = ["hola", "mundo", "javascript", "es", "genial"];

// Recorrer el array y mostrar una alerta para cada palabra
for (var i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}

//Ejercicio b)
// Recorrer el array y convertir la primera letra de cada palabra en mayúscula
for (var i = 0; i < palabras.length; i++) {
    var palabraModificada = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    alert(palabraModificada);
}

//Ejercicio c)
var sentence = "";

// Recorrer el array y concatenar cada palabra en la variable sentence
for (var i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}

// Mostrar una alerta con la cadena completa
alert(sentence.trim());

//Ejercicio d)
var numeros = [];

// Llenar el array con los números del 0 al 9
for (var i = 0; i < 10; i++) {
    numeros.push(i);
}

// Mostrar el array final por consola
console.log(numeros);
