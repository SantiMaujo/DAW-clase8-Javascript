//Ejercicio a)
// Función suma que recibe dos valores numéricos y retorna el resultado
function suma(a, b) {
    return a + b;
}

// Ejecutar la función y guardar el resultado en una variable
var resultado = suma(5, 10);

// Mostrar el valor de la variable en la consola
console.log("Resultado de la suma:", resultado);

//Ejercicio b)
// Función suma con validación de parámetros numéricos
function suma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parámetros tiene error: no es un número");
        return NaN;
    }
    return a + b;
}

// Ejecutar la función con parámetros válidos e inválidos
var resultadoValido = suma(5, 10);
console.log("Resultado de la suma válida:", resultadoValido);

var resultadoInvalido = suma(5, "diez");
console.log("Resultado de la suma inválida:", resultadoInvalido);

//Ejercicio c)
// Función validateInteger que verifica si un número es entero
function validateInteger(num) {
    return Number.isInteger(num);
}

// Pruebas de la función validateInteger
console.log("¿5 es entero?", validateInteger(5)); // true
console.log("¿5.5 es entero?", validateInteger(5.5)); // false

//Ejercicio d)
// Función suma con validación de parámetros numéricos y enteros
function suma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parámetros tiene error: no es un número");
        return NaN;
    }
    if (!validateInteger(a)) {
        alert("El primer parámetro no es un entero. Redondeando...");
        a = Math.round(a);
    }
    if (!validateInteger(b)) {
        alert("El segundo parámetro no es un entero. Redondeando...");
        b = Math.round(b);
    }
    return a + b;
}

// Ejecutar la función con diferentes parámetros
var resultado1 = suma(5, 10);
console.log("Resultado de la suma:", resultado1);

var resultado2 = suma(5.5, 10.3);
console.log("Resultado de la suma con redondeo:", resultado2);

//Ejercicio e)
// Función validateInteger que verifica si un número es entero
function validateInteger(num) {
    return Number.isInteger(num);
}

// Función validateAndRound que valida y redondea si no es entero
function validateAndRound(num) {
    if (!validateInteger(num)) {
        alert(num + " no es un entero. Redondeando...");
        return Math.round(num);
    }
    return num;
}

// Función suma con validación de parámetros numéricos y enteros
function suma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parámetros tiene error: no es un número");
        return NaN;
    }
    a = validateAndRound(a);
    b = validateAndRound(b);
    return a + b;
}

// Ejecutar la función con diferentes parámetros
var resultado1 = suma(5, 10);
console.log("Resultado de la suma:", resultado1);

var resultado2 = suma(5.5, 10.3);
console.log("Resultado de la suma con redondeo:", resultado2);
